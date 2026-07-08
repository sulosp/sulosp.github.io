"use client";

import { useEffect, useRef } from "react";

const VERT_SRC = `
  attribute vec2 a_position;
  varying vec2 v_uv;
  void main() {
    v_uv = a_position * 0.5 + 0.5;
    gl_Position = vec4(a_position, 0.0, 1.0);
  }
`;

const FRAG_SRC = `
  precision highp float;
  varying vec2 v_uv;
  uniform sampler2D u_texture;
  uniform vec2 u_mouse;
  uniform vec2 u_resolution;
  uniform float u_hover;

  vec2 swirlSample(vec2 uv, vec2 diff, vec2 aspect, vec2 pushDir, float strength, float angleMult, float pushMult) {
    float angle = strength * angleMult;
    float s = sin(angle);
    float c = cos(angle);
    vec2 rotated = vec2(diff.x * c - diff.y * s, diff.x * s + diff.y * c) / aspect;
    vec2 swirlUV = uv - diff / aspect + rotated;
    vec2 pushUV = uv + (pushDir / aspect) * strength * pushMult;
    return mix(uv, mix(swirlUV, pushUV, 0.5), strength);
  }

  void main() {
    vec2 uv = vec2(v_uv.x, 1.0 - v_uv.y);

    vec2 aspect = vec2(u_resolution.x / u_resolution.y, 1.0);
    vec2 diff = (uv - u_mouse) * aspect;
    float dist = length(diff);

    float radius = 0.16;
    float strength = smoothstep(radius, 0.0, dist) * u_hover;
    vec2 pushDir = dist > 0.0001 ? normalize(diff) : vec2(0.0);

    vec2 uvR = swirlSample(uv, diff, aspect, pushDir, strength, 2.0, 0.10);
    vec2 uvG = swirlSample(uv, diff, aspect, pushDir, strength, 2.6, 0.055);
    vec2 uvB = swirlSample(uv, diff, aspect, pushDir, strength, 3.3, 0.02);

    float r = texture2D(u_texture, uvR).r;
    float g = texture2D(u_texture, uvG).g;
    float b = texture2D(u_texture, uvB).b;

    gl_FragColor = vec4(r, g, b, 1.0);
  }
`;

function compileShader(
  gl: WebGLRenderingContext,
  src: string,
  type: number,
): WebGLShader | null {
  const shader = gl.createShader(type);
  if (!shader) return null;
  gl.shaderSource(shader, src);
  gl.compileShader(shader);
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    console.error(gl.getShaderInfoLog(shader));
    gl.deleteShader(shader);
    return null;
  }
  return shader;
}

function getThemeColors() {
  const styles = getComputedStyle(document.documentElement);
  return {
    background: styles.getPropertyValue("--background").trim() || "#080808",
    foreground: styles.getPropertyValue("--foreground").trim() || "#f0f0f0",
  };
}

function getResponsiveFontSize(containerWidth: number, lineTexts: string[]) {
  const vw = window.innerWidth / 100;
  const longestChars = Math.max(...lineTexts.map((line) => line.length), 1);

  const minSize = 2.75 * 16;
  const maxSize = 20 * 16;
  const byViewport = 18 * vw;
  const byContainer = containerWidth * 0.185;
  const byFit = containerWidth / (longestChars * 0.56);

  return Math.min(
    Math.max(Math.min(byViewport, byContainer, byFit), minSize),
    maxSize,
  );
}

function getTextBlockHeight(fontSize: number, lineCount: number) {
  const lineGap = fontSize * 0.06;
  const lineHeight = fontSize * 0.9;
  return lineCount * lineHeight + (lineCount - 1) * lineGap;
}

interface HeroTextProps {
  lines: string[];
  className?: string;
}

export default function HeroText({ lines, className = "" }: HeroTextProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const textCanvasRef = useRef<HTMLCanvasElement | null>(null);
  const rafRef = useRef(0);
  const mouseRef = useRef({
    x: 0.5,
    y: 0.5,
    targetX: 0.5,
    targetY: 0.5,
    hover: 0,
    targetHover: 0,
  });
  const glStateRef = useRef<{
    gl: WebGLRenderingContext;
    uniforms: {
      mouse: WebGLUniformLocation | null;
      resolution: WebGLUniformLocation | null;
      hover: WebGLUniformLocation | null;
    };
    uploadTexture: () => void;
  } | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reducedMotion) return;

    const textCanvas = document.createElement("canvas");
    textCanvasRef.current = textCanvas;

    const gl =
      canvas.getContext("webgl", { premultipliedAlpha: true, alpha: true }) ??
      canvas.getContext("experimental-webgl", {
        premultipliedAlpha: true,
        alpha: true,
      });

    if (!gl || !(gl instanceof WebGLRenderingContext)) return;

    const vertShader = compileShader(gl, VERT_SRC, gl.VERTEX_SHADER);
    const fragShader = compileShader(gl, FRAG_SRC, gl.FRAGMENT_SHADER);
    if (!vertShader || !fragShader) return;

    const program = gl.createProgram();
    if (!program) return;

    gl.attachShader(program, vertShader);
    gl.attachShader(program, fragShader);
    gl.linkProgram(program);

    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.error(gl.getProgramInfoLog(program));
      return;
    }

    gl.useProgram(program);

    const positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]),
      gl.STATIC_DRAW,
    );

    const posLoc = gl.getAttribLocation(program, "a_position");
    gl.enableVertexAttribArray(posLoc);
    gl.vertexAttribPointer(posLoc, 2, gl.FLOAT, false, 0, 0);

    const texture = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_2D, texture);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);

    const uploadTexture = () => {
      gl.bindTexture(gl.TEXTURE_2D, texture);
      gl.texImage2D(
        gl.TEXTURE_2D,
        0,
        gl.RGBA,
        gl.RGBA,
        gl.UNSIGNED_BYTE,
        textCanvas,
      );
    };

    gl.enable(gl.BLEND);
    gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA);

    const uniforms = {
      mouse: gl.getUniformLocation(program, "u_mouse"),
      resolution: gl.getUniformLocation(program, "u_resolution"),
      hover: gl.getUniformLocation(program, "u_hover"),
    };

    const drawText = (width: number, height: number, fontSize: number) => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const colors = getThemeColors();

      textCanvas.width = Math.max(1, Math.floor(width * dpr));
      textCanvas.height = Math.max(1, Math.floor(height * dpr));

      const ctx = textCanvas.getContext("2d");
      if (!ctx) return;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.fillStyle = colors.background;
      ctx.fillRect(0, 0, width, height);

      const lineGap = fontSize * 0.06;
      const lineHeight = fontSize * 0.9;
      const blockHeight =
        lines.length * lineHeight + (lines.length - 1) * lineGap;
      let y = (height - blockHeight) / 2 + lineHeight / 2;

      ctx.fillStyle = colors.foreground;
      ctx.font = `800 ${fontSize}px var(--font-syne), system-ui, sans-serif`;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.letterSpacing = `${fontSize * -0.04}px`;

      for (const line of lines) {
        ctx.fillText(line, width / 2, y);
        y += lineHeight + lineGap;
      }
    };

    const layout = () => {
      const width = container.clientWidth;
      if (width === 0) return;

      const fontSize = getResponsiveFontSize(width, lines);
      const blockHeight = getTextBlockHeight(fontSize, lines.length);
      const padding = Math.max(12, fontSize * 0.05);
      const height = blockHeight + padding * 2;

      container.style.height = `${height}px`;
      container.style.setProperty("--hero-font-size", `${fontSize}px`);

      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.max(1, Math.floor(width * dpr));
      canvas.height = Math.max(1, Math.floor(height * dpr));
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      gl.viewport(0, 0, canvas.width, canvas.height);
      gl.uniform2f(uniforms.resolution, canvas.width, canvas.height);

      drawText(width, height, fontSize);
      uploadTexture();
    };

    const render = () => {
      const mouse = mouseRef.current;
      mouse.x += (mouse.targetX - mouse.x) * 0.12;
      mouse.y += (mouse.targetY - mouse.y) * 0.12;
      mouse.hover += (mouse.targetHover - mouse.hover) * 0.12;

      gl.uniform2f(uniforms.mouse, mouse.x, mouse.y);
      gl.uniform1f(uniforms.hover, mouse.hover);
      gl.drawArrays(gl.TRIANGLES, 0, 6);

      rafRef.current = requestAnimationFrame(render);
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      if (rect.width === 0 || rect.height === 0) return;

      mouseRef.current.targetX = (e.clientX - rect.left) / rect.width;
      mouseRef.current.targetY = (e.clientY - rect.top) / rect.height;
      mouseRef.current.targetHover = 1;
    };

    const handleMouseLeave = () => {
      mouseRef.current.targetHover = 0;
    };

    const handleThemeChange = () => {
      layout();
    };

    glStateRef.current = { gl, uniforms, uploadTexture };

    const resizeObserver = new ResizeObserver(() => layout());
    resizeObserver.observe(container);
    window.addEventListener("resize", layout);

    const themeObserver = new MutationObserver(handleThemeChange);
    themeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });

    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseleave", handleMouseLeave);

    document.fonts.ready.then(() => {
      layout();
      rafRef.current = requestAnimationFrame(render);
    });

    return () => {
      cancelAnimationFrame(rafRef.current);
      resizeObserver.disconnect();
      themeObserver.disconnect();
      window.removeEventListener("resize", layout);
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseleave", handleMouseLeave);
      glStateRef.current = null;
      textCanvasRef.current = null;
    };
  }, [lines]);

  return (
    <div
      ref={containerRef}
      className={`hero-liquid-text hero-text-inner ${className}`}
    >
      <canvas ref={canvasRef} className="hero-liquid-canvas" aria-hidden="true" />
      <h1 className="sr-only">{lines.join(" ")}</h1>
      <div className="hero-liquid-fallback" aria-hidden="true">
        {lines.map((line) => (
          <span key={line} className="hero-liquid-fallback-line">
            {line}
          </span>
        ))}
      </div>
    </div>
  );
}
