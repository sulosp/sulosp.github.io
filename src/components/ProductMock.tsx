import type { JSX, ReactNode } from "react";

type MockKind = "aurora" | "solace" | "forma" | "nexus";

function Chrome({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="flex h-full flex-col bg-white text-[#111]">
      <div className="flex items-center gap-2 border-b border-black/10 px-4 py-2.5">
        <span className="h-1.5 w-1.5 rounded-full bg-[#ff6b6b]" />
        <span className="h-1.5 w-1.5 rounded-full bg-[#ffd93d]" />
        <span className="h-1.5 w-1.5 rounded-full bg-[#6bcb77]" />
        <span className="ml-2 text-[10px] tracking-wide text-black/40">{title}</span>
      </div>
      {children}
    </div>
  );
}

function AuroraMock() {
  return (
    <Chrome title="aurora.finance">
      <div className="grid flex-1 grid-cols-[0.28fr_1fr] bg-[#f6f7fb]">
        <aside className="space-y-3 border-r border-black/10 p-4">
          <div className="h-3 w-16 rounded bg-[#2f4bff]/20" />
          {["Overview", "Portfolio", "Move", "Insights"].map((item, i) => (
            <div
              key={item}
              className={`rounded-md px-2 py-1.5 text-[10px] ${i === 0 ? "bg-[#2f4bff] text-white" : "text-black/50"}`}
            >
              {item}
            </div>
          ))}
        </aside>
        <div className="space-y-3 p-4">
          <div className="flex items-end justify-between">
            <div>
              <p className="text-[10px] text-black/40">Net worth</p>
              <p className="text-xl font-semibold tracking-tight">$248,920</p>
            </div>
            <span className="rounded-full bg-[#d9f5e5] px-2 py-0.5 text-[10px] text-[#18794e]">
              +12.4%
            </span>
          </div>
          <div className="flex h-24 items-end gap-1.5 rounded-xl bg-white p-3">
            {[40, 55, 38, 70, 62, 84, 76, 90, 68, 95].map((h, i) => (
              <div
                key={i}
                className="flex-1 rounded-sm bg-gradient-to-t from-[#2f4bff] to-[#9aa8ff]"
                style={{ height: `${h}%` }}
              />
            ))}
          </div>
          <div className="grid grid-cols-3 gap-2">
            {["Equities", "Cash", "Funds"].map((label) => (
              <div key={label} className="rounded-lg bg-white p-2">
                <p className="text-[9px] text-black/35">{label}</p>
                <p className="text-xs font-semibold">32%</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Chrome>
  );
}

function SolaceMock() {
  return (
    <Chrome title="solace.health">
      <div className="flex flex-1 flex-col bg-[#f3f7f4] p-5">
        <p className="text-[10px] tracking-[0.18em] text-[#3d6b5a] uppercase">Care, simplified</p>
        <h4 className="mt-2 max-w-[12ch] text-2xl leading-[1.1] font-semibold tracking-tight">
          Book the next visit in two taps.
        </h4>
        <div className="mt-4 grid grid-cols-2 gap-3">
          {["Dr. Mendes · Thu 14:00", "Follow-up · Fri 09:30", "Labs · Ready", "Messages · 2"].map(
            (card) => (
              <div key={card} className="rounded-xl bg-white p-3 shadow-sm">
                <div className="mb-2 h-8 w-8 rounded-full bg-[#cfe4d8]" />
                <p className="text-[11px] font-medium">{card}</p>
              </div>
            ),
          )}
        </div>
      </div>
    </Chrome>
  );
}

function FormaMock() {
  return (
    <Chrome title="forma.studio">
      <div className="flex flex-1 bg-[#efece6]">
        <div className="flex w-[42%] flex-col justify-between p-5">
          <p className="text-[10px] tracking-[0.2em] uppercase">Forma</p>
          <div>
            <h4 className="text-2xl leading-none font-medium tracking-tight">Quiet rooms, long light.</h4>
            <p className="mt-2 text-[11px] leading-relaxed text-black/50">
              Architecture for living, not looking.
            </p>
          </div>
        </div>
        <div className="grid flex-1 grid-cols-2 gap-1 p-2">
          <div className="rounded-lg bg-[#cfc6b8]" />
          <div className="rounded-lg bg-[#b7c4c1]" />
          <div className="col-span-2 h-20 rounded-lg bg-[#d8d1c4]" />
        </div>
      </div>
    </Chrome>
  );
}

function NexusMock() {
  return (
    <Chrome title="nexus.system">
      <div className="flex-1 space-y-3 bg-[#f7f7f5] p-4">
        <div className="flex items-center justify-between">
          <p className="text-sm font-semibold">Components</p>
          <span className="rounded-full bg-black px-2 py-0.5 text-[10px] text-white">v2.4</span>
        </div>
        <div className="grid grid-cols-4 gap-2">
          {["Button", "Input", "Chip", "Table", "Modal", "Toast", "Nav", "Card"].map((name) => (
            <div key={name} className="rounded-lg border border-black/10 bg-white px-2 py-3 text-center text-[10px]">
              {name}
            </div>
          ))}
        </div>
        <div className="flex gap-2">
          <span className="rounded-md bg-[#2f4bff] px-3 py-1.5 text-[10px] text-white">Primary</span>
          <span className="rounded-md border border-black/15 px-3 py-1.5 text-[10px]">Ghost</span>
          <span className="rounded-md bg-black px-3 py-1.5 text-[10px] text-white">Inverse</span>
        </div>
      </div>
    </Chrome>
  );
}

const mocks: Record<MockKind, () => JSX.Element> = {
  aurora: AuroraMock,
  solace: SolaceMock,
  forma: FormaMock,
  nexus: NexusMock,
};

export default function ProductMock({
  kind,
  className = "",
}: {
  kind: MockKind;
  className?: string;
}) {
  const Mock = mocks[kind];
  return (
    <div className={`mock-root overflow-hidden ${className}`}>
      <Mock />
    </div>
  );
}
