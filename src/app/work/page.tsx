import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Work from "@/components/Work";

export const metadata: Metadata = {
  title: "Work — Sulochana Peiris",
  description:
    "Selected projects — brand identities, product interfaces, and design systems.",
};

export default function WorkPage() {
  return (
    <div className="site-shell">
      <Header />
      <main>
        <Work />
      </main>
      <Footer />
    </div>
  );
}
