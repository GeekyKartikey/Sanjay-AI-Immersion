import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

// The schema is entirely optional.
// You can delete this file (schema.ts) and the
// app will continue to work.
// The schema provides more precise TypeScript types.
export default defineSchema({
  waitlist: defineTable({
    email: v.string(),
    firstName: v.string(),
    referralSource: v.string(),
    role: v.optional(v.string()),
    operatingSystem: v.optional(v.string()),
    biggestProblem: v.optional(v.string()),
    tools: v.array(v.string()),
    interviewInterest: v.optional(v.string()),
    desiredFirstTask: v.optional(v.string()),
  }).index("by_email", ["email"]),
});
