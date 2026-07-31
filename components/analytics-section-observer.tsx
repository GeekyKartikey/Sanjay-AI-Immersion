"use client";

import { useEffect } from "react";
import { trackEvent, type AnalyticsEvent } from "@/lib/analytics";

const trackedSections: Array<{ id: string; event: AnalyticsEvent }> = [
  { id: "use-cases", event: "use_case_viewed" },
  { id: "privacy", event: "privacy_section_viewed" },
];

export function AnalyticsSectionObserver() {
  useEffect(() => {
    const seen = new Set<string>();
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting || seen.has(entry.target.id)) continue;
          const section = trackedSections.find(
            ({ id }) => id === entry.target.id,
          );
          if (!section) continue;
          seen.add(entry.target.id);
          trackEvent(section.event);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.35 },
    );

    for (const { id } of trackedSections) {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  return null;
}
