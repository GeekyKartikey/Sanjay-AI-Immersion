import "server-only";

import { ConvexHttpClient } from "convex/browser";
import { api } from "@/convex/_generated/api";
import type { WaitlistQualification, WaitlistSignup } from "./validation";

type WaitlistResult =
  | { status: "saved" }
  | { status: "duplicate" }
  | { status: "updated" }
  | { status: "not_found" };

function getConvexClient() {
  const url = process.env.NEXT_PUBLIC_CONVEX_URL;
  if (!url) return null;
  return new ConvexHttpClient(url);
}

export async function createWaitlistEntry(
  input: WaitlistSignup,
): Promise<WaitlistResult> {
  const convex = getConvexClient();
  if (!convex) throw new WaitlistConfigurationError();

  return await convex.mutation(api.waitlist.signup, {
    email: input.email.toLowerCase(),
    firstName: input.first_name,
    referralSource: input.referral_source || "direct",
  });
}

export async function updateWaitlistEntry(
  input: WaitlistQualification,
): Promise<WaitlistResult> {
  const convex = getConvexClient();
  if (!convex) throw new WaitlistConfigurationError();

  return await convex.mutation(api.waitlist.qualify, {
    email: input.email,
    role: input.role,
    operatingSystem: input.operating_system,
    biggestProblem: input.biggest_problem,
    tools: input.tools,
    interviewInterest: input.interview_interest,
    desiredFirstTask: input.desired_first_task,
  });
}

export class WaitlistConfigurationError extends Error {
  constructor() {
    super("Convex waitlist storage is not configured");
    this.name = "WaitlistConfigurationError";
  }
}
