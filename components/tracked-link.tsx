"use client";

import type { AnchorHTMLAttributes, ReactNode } from "react";
import { trackEvent, type AnalyticsEvent } from "@/lib/analytics";

type TrackedLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  event: AnalyticsEvent;
};

export function TrackedLink({
  children,
  event,
  onClick,
  ...props
}: TrackedLinkProps) {
  return (
    <a
      {...props}
      onClick={(clickEvent) => {
        trackEvent(event);
        onClick?.(clickEvent);
      }}
    >
      {children}
    </a>
  );
}
