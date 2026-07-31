import { AnalyticsSectionObserver } from "@/components/analytics-section-observer";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { Navigation } from "@/components/navigation";
import {
  BenefitsSection,
  DailyExampleSection,
  PrivacySection,
  WaitlistSection,
} from "@/components/sections";

const softwareProductSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Sanjay",
  applicationCategory: "ProductivityApplication",
  operatingSystem: "macOS, Windows, Linux",
  description:
    "A private, voice-first personal AI designed to understand context across approved software and coordinate daily work from one voice command.",
  offers: { "@type": "Offer", availability: "https://schema.org/PreOrder" },
};

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <Navigation />
      <main id="main-content">
        <Hero />
        <DailyExampleSection />
        <BenefitsSection />
        <PrivacySection />
        <WaitlistSection />
      </main>
      <Footer />
      <AnalyticsSectionObserver />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(softwareProductSchema),
        }}
      />
    </>
  );
}
