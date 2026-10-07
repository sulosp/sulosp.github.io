const siteUrl = "https://dutchrulesdistilling.com.au/";

export default function ViewDutchRules({
  variant = "sticky",
}: {
  variant?: "sticky" | "inline";
}) {
  const className =
    variant === "inline"
      ? "btn-primary mt-8 rounded-[50px] px-7 py-3.5 text-[15px] sm:px-8 sm:py-4 sm:text-base"
      : "btn-primary haller-demo-cta";

  return (
    <a href={siteUrl} target="_blank" rel="noreferrer" className={className}>
      View Dutch Rules
      <span aria-hidden="true" className="ml-2">
        ↗
      </span>
    </a>
  );
}
