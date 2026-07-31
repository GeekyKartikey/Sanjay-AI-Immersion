import { v } from "convex/values";
import { mutation } from "./_generated/server";

const roleOptions = [
  "Developer",
  "DevRel",
  "Program Manager",
  "Founder",
  "Product Manager",
  "Community Manager",
  "Consultant",
  "Other",
] as const;

const operatingSystemOptions = ["macOS", "Windows", "Linux", "Other"] as const;

const problemOptions = [
  "Too much context switching",
  "Information scattered across tools",
  "Privacy concerns with cloud AI",
  "Too much typing",
  "Repeating context to AI tools",
  "Missing follow-ups",
  "Other",
] as const;

const interviewOptions = ["Yes", "Maybe", "No"] as const;

const toolOptions = [
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

function isOneOf(value: string | undefined, options: readonly string[]) {
  return value === undefined || options.includes(value);
}

function normalizedEmail(email: string) {
  const value = email.trim().toLowerCase();
  if (value.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
    throw new Error("Invalid email address");
  }
  return value;
}

export const signup = mutation({
  args: {
    email: v.string(),
    firstName: v.string(),
    referralSource: v.string(),
  },
  handler: async (ctx, args) => {
    const email = normalizedEmail(args.email);
    const firstName = args.firstName.trim();
    const referralSource = args.referralSource.trim() || "direct";

    if (!firstName || firstName.length > 80 || referralSource.length > 200) {
      throw new Error("Invalid waitlist signup");
    }

    const existing = await ctx.db
      .query("waitlist")
      .withIndex("by_email", (query) => query.eq("email", email))
      .unique();

    if (existing) return { status: "duplicate" as const };

    await ctx.db.insert("waitlist", {
      email,
      firstName,
      referralSource,
      tools: [],
    });
    return { status: "saved" as const };
  },
});

export const qualify = mutation({
  args: {
    email: v.string(),
    role: v.optional(v.string()),
    operatingSystem: v.optional(v.string()),
    biggestProblem: v.optional(v.string()),
    tools: v.array(v.string()),
    interviewInterest: v.optional(v.string()),
    desiredFirstTask: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    const email = normalizedEmail(args.email);
    if (
      !isOneOf(args.role, roleOptions) ||
      !isOneOf(args.operatingSystem, operatingSystemOptions) ||
      !isOneOf(args.biggestProblem, problemOptions) ||
      !isOneOf(args.interviewInterest, interviewOptions) ||
      args.tools.length > toolOptions.length ||
      args.tools.some((tool) => !toolOptions.includes(tool as (typeof toolOptions)[number])) ||
      (args.desiredFirstTask?.trim().length ?? 0) > 500
    ) {
      throw new Error("Invalid waitlist qualification");
    }

    const existing = await ctx.db
      .query("waitlist")
      .withIndex("by_email", (query) => query.eq("email", email))
      .unique();

    if (!existing) return { status: "not_found" as const };

    await ctx.db.patch(existing._id, {
      role: args.role,
      operatingSystem: args.operatingSystem,
      biggestProblem: args.biggestProblem,
      tools: [...new Set(args.tools)],
      interviewInterest: args.interviewInterest,
      desiredFirstTask: args.desiredFirstTask?.trim() || undefined,
    });
    return { status: "updated" as const };
  },
});
