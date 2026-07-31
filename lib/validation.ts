import { z } from "zod";

const optionalText = z.string().trim().max(500).optional().default("");

export const roleOptions = [
  "Developer",
  "DevRel",
  "Program Manager",
  "Founder",
  "Product Manager",
  "Community Manager",
  "Consultant",
  "Other",
] as const;

export const operatingSystemOptions = [
  "macOS",
  "Windows",
  "Linux",
  "Other",
] as const;

export const problemOptions = [
  "Too much context switching",
  "Information scattered across tools",
  "Privacy concerns with cloud AI",
  "Too much typing",
  "Repeating context to AI tools",
  "Missing follow-ups",
  "Other",
] as const;

export const interviewOptions = ["Yes", "Maybe", "No"] as const;

export const toolOptions = [
  "Gmail",
  "Google Calendar",
  "Notion",
  "Google Meet",
  "Zoom",
  "GitHub",
  "Slack",
  "Telegram",
  "WhatsApp",
  "LinkedIn",
  "X",
  "Instagram",
  "CLI AI agents",
  "Coding assistants",
] as const;

export const waitlistSignupSchema = z.object({
  action: z.literal("signup"),
  first_name: z.string().trim().min(1, "Enter your first name.").max(80),
  email: z.string().trim().email("Enter a valid email address.").max(254),
  referral_source: z.string().trim().max(200).optional().default("direct"),
  privacy_acknowledged: z.literal(true, {
    error: "Please confirm that you have read the privacy note.",
  }),
});

export const waitlistQualificationSchema = z.object({
  action: z.literal("qualify"),
  email: z.string().trim().email().max(254),
  role: z.enum(roleOptions).optional(),
  operating_system: z.enum(operatingSystemOptions).optional(),
  biggest_problem: z.enum(problemOptions).optional(),
  tools: z
    .array(z.enum(toolOptions))
    .max(toolOptions.length)
    .optional()
    .default([]),
  interview_interest: z.enum(interviewOptions).optional(),
  desired_first_task: optionalText,
});

export const waitlistRequestSchema = z.discriminatedUnion("action", [
  waitlistSignupSchema,
  waitlistQualificationSchema,
]);

export type WaitlistSignup = z.infer<typeof waitlistSignupSchema>;
export type WaitlistQualification = z.infer<typeof waitlistQualificationSchema>;
