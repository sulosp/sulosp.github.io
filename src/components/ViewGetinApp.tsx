const appUrl =
  "https://play.google.com/store/apps/details?id=xyz.getin.wallet.fans&hl=en";

export default function ViewGetinApp({
  variant = "sticky",
}: {
  variant?: "sticky" | "inline";
}) {
  const className =
    variant === "inline"
      ? "btn-primary mt-8 rounded-[50px] px-7 py-3.5 text-[15px] sm:px-8 sm:py-4 sm:text-base"
      : "btn-primary haller-demo-cta";

  return (
    <a href={appUrl} target="_blank" rel="noreferrer" className={className}>
      View GETIN Wallet
      <span aria-hidden="true" className="ml-2">
        ↗
      </span>
    </a>
  );
}
