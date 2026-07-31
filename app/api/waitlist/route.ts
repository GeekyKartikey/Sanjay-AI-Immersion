import { NextResponse } from "next/server";
import { ZodError } from "zod";
import {
  createWaitlistEntry,
  updateWaitlistEntry,
  WaitlistConfigurationError,
} from "@/lib/waitlist";
import { waitlistRequestSchema } from "@/lib/validation";

export async function POST(request: Request) {
  try {
    const body: unknown = await request.json();
    const input = waitlistRequestSchema.parse(body);

    if (input.action === "signup") {
      const result = await createWaitlistEntry(input);
      if (result.status === "duplicate") {
        return NextResponse.json(
          {
            ok: true,
            duplicate: true,
            message: "This email is already on the waitlist.",
          },
          { status: 200 },
        );
      }
      return NextResponse.json({ ok: true, duplicate: false }, { status: 201 });
    }

    const result = await updateWaitlistEntry(input);
    if (result.status === "not_found") {
      return NextResponse.json(
        { ok: false, message: "Join the waitlist first." },
        { status: 404 },
      );
    }
    return NextResponse.json({ ok: true });
  } catch (error) {
    if (error instanceof ZodError) {
      return NextResponse.json(
        {
          ok: false,
          message: "Check the form and try again.",
          issues: error.flatten().fieldErrors,
        },
        { status: 400 },
      );
    }

    if (error instanceof WaitlistConfigurationError) {
      return NextResponse.json(
        {
          ok: false,
          message:
            "The waitlist is temporarily unavailable. Please try again later.",
        },
        { status: 503 },
      );
    }

    console.error("[waitlist] Submission failed", error);
    return NextResponse.json(
      {
        ok: false,
        message: "We could not save your response. Please try again.",
      },
      { status: 500 },
    );
  }
}
