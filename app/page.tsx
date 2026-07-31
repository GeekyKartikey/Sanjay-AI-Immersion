import { AnalyticsSectionObserver } from "@/components/analytics-section-observer";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { Navigation } from "@/components/navigation";
import {
  DifferentiatorsSection,
  FinalCtaSection,
  MvpSection,
  PersonalisationSection,
  PrivacySection,
  ProblemSection,
  ProductFlowSection,
  UseCasesSection,
  WaitlistSection,
  WorkdaySection,
} from "@/components/sections";

const softwareProductSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Sanjay",
  applicationCategory: "ProductivityApplication",
  operatingSystem: "macOS, Windows, Linux",
  description:
    "A private, voice-first AI assistant designed to run on your device and help manage meetings, communication, projects, and daily tasks.",
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
        <WorkdaySection />
        <ProblemSection />
        <ProductFlowSection />
        <DifferentiatorsSection />
        <MvpSection />
        <UseCasesSection />
        <PersonalisationSection />
        <PrivacySection />
        <WaitlistSection />
        <FinalCtaSection />
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
