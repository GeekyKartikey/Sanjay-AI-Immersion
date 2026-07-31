export type AnalyticsEvent =
  | "hero_waitlist_clicked"
  | "secondary_cta_clicked"
  | "waitlist_started"
  | "waitlist_submitted"
  | "waitlist_submission_failed"
  | "qualification_started"
  | "qualification_completed"
  | "qualification_skipped"
  | "use_case_viewed"
  | "privacy_section_viewed";

export function trackEvent(
  event: AnalyticsEvent,
  properties: Record<string, unknown> = {},
) {
  if (typeof window === "undefined") return;

  window.dispatchEvent(
    new CustomEvent("sanjay:analytics", { detail: { event, properties } }),
  );

  const analyticsWindow = window as Window & {
    dataLayer?: Array<Record<string, unknown>>;
  };
  analyticsWindow.dataLayer?.push({ event, ...properties });
}
