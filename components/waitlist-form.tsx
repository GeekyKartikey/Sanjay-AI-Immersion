"use client";

import { useRef, useState, type FormEvent } from "react";
import { trackEvent } from "@/lib/analytics";
import {
  interviewOptions,
  operatingSystemOptions,
  problemOptions,
  roleOptions,
  toolOptions,
  waitlistSignupSchema,
} from "@/lib/validation";

type Stage = "signup" | "success" | "qualification" | "complete";
type FieldErrors = Partial<
  Record<"first_name" | "email" | "privacy_acknowledged", string>
>;

async function postWaitlist(payload: Record<string, unknown>) {
  const response = await fetch("/api/waitlist", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  const data = (await response.json()) as {
    ok: boolean;
    duplicate?: boolean;
    message?: string;
  };
  if (!response.ok || !data.ok)
    throw new Error(data.message || "Unable to save your response.");
  return data;
}

function getReferralSource() {
  if (typeof window === "undefined") return "direct";
  const params = new URLSearchParams(window.location.search);
  return params.get("utm_source") || document.referrer || "direct";
}

export function WaitlistForm() {
  const [stage, setStage] = useState<Stage>("signup");
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [isPending, setIsPending] = useState(false);
  const [message, setMessage] = useState("");
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const started = useRef(false);

  function markStarted() {
    if (started.current) return;
    started.current = true;
    trackEvent("waitlist_started");
  }

  async function handleSignup(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage("");
    const form = new FormData(event.currentTarget);
    const candidate = {
      action: "signup" as const,
      first_name: String(form.get("first_name") || ""),
      email: String(form.get("email") || ""),
      referral_source: getReferralSource(),
      privacy_acknowledged: form.get("privacy_acknowledged") === "on",
    };
    const parsed = waitlistSignupSchema.safeParse(candidate);

    if (!parsed.success) {
      const errors = parsed.error.flatten().fieldErrors;
      setFieldErrors({
        first_name: errors.first_name?.[0],
        email: errors.email?.[0],
        privacy_acknowledged: errors.privacy_acknowledged?.[0],
      });
      return;
    }

    setFieldErrors({});
    setIsPending(true);
    try {
      const result = await postWaitlist(parsed.data);
      setEmail(parsed.data.email);
      setFirstName(parsed.data.first_name);
      setMessage(
        result.duplicate
          ? "You were already on the list—your place is saved."
          : "",
      );
      setStage("success");
      trackEvent("waitlist_submitted", {
        duplicate: Boolean(result.duplicate),
      });
    } catch (error) {
      setMessage(
        error instanceof Error ? error.message : "Unable to join right now.",
      );
      trackEvent("waitlist_submission_failed");
    } finally {
      setIsPending(false);
    }
  }

  async function handleQualification(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage("");
    setIsPending(true);
    const form = new FormData(event.currentTarget);
    try {
      await postWaitlist({
        action: "qualify",
        email,
        role: form.get("role") || undefined,
        operating_system: form.get("operating_system") || undefined,
        biggest_problem: form.get("biggest_problem") || undefined,
        tools: form.getAll("tools"),
        interview_interest: form.get("interview_interest") || undefined,
        desired_first_task: String(form.get("desired_first_task") || ""),
      });
      setStage("complete");
      trackEvent("qualification_completed");
    } catch (error) {
      setMessage(
        error instanceof Error
          ? error.message
          : "Unable to save your workflow.",
      );
      trackEvent("waitlist_submission_failed", { step: "qualification" });
    } finally {
      setIsPending(false);
    }
  }

  if (stage === "complete") {
    return (
      <div className="form-success" role="status" tabIndex={-1}>
        <span className="success-mark" aria-hidden="true">
          ✓
        </span>
        <p className="eyebrow">Workflow received</p>
        <h3>Thank you, {firstName}.</h3>
        <p>Your input will help decide what Sanjay learns to do first.</p>
      </div>
    );
  }

  if (stage === "success") {
    return (
      <div className="form-success" role="status">
        <span className="success-mark" aria-hidden="true">
          ✓
        </span>
        <p className="eyebrow">Private beta</p>
        <h3>You’re on the Sanjay waitlist.</h3>
        <p>
          We are building the first version with a small group of early users.
          Tell us about your workflow to improve your chances of getting early
          access.
        </p>
        {message ? <p className="form-note">{message}</p> : null}
        <div className="form-actions">
          <button
            className="button button-primary"
            type="button"
            onClick={() => {
              setStage("qualification");
              trackEvent("qualification_started");
            }}
          >
            Share My Workflow
          </button>
          <button
            className="text-button"
            type="button"
            onClick={() => {
              setStage("complete");
              trackEvent("qualification_skipped");
            }}
          >
            Skip for now
          </button>
        </div>
      </div>
    );
  }

  if (stage === "qualification") {
    return (
      <form className="qualification-form" onSubmit={handleQualification}>
        <div className="form-heading">
          <p className="eyebrow">Optional · about 2 minutes</p>
          <h3>What should Sanjay solve first?</h3>
          <p>
            Your waitlist place is already saved. Every question below is
            optional.
          </p>
        </div>
        <div className="form-grid two-columns">
          <label>
            Your role
            <select name="role" defaultValue="">
              <option value="">Choose one</option>
              {roleOptions.map((option) => (
                <option key={option}>{option}</option>
              ))}
            </select>
          </label>
          <label>
            Primary operating system
            <select name="operating_system" defaultValue="">
              <option value="">Choose one</option>
              {operatingSystemOptions.map((option) => (
                <option key={option}>{option}</option>
              ))}
            </select>
          </label>
        </div>
        <label>
          Biggest problem today
          <select name="biggest_problem" defaultValue="">
            <option value="">Choose one</option>
            {problemOptions.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
        </label>
        <fieldset>
          <legend>Tools you use most</legend>
          <div className="choice-grid">
            {toolOptions.map((tool) => (
              <label className="choice" key={tool}>
                <input type="checkbox" name="tools" value={tool} />
                <span>{tool}</span>
              </label>
            ))}
          </div>
        </fieldset>
        <fieldset>
          <legend>Open to a 20-minute product interview?</legend>
          <div className="radio-row">
            {interviewOptions.map((option) => (
              <label className="choice" key={option}>
                <input type="radio" name="interview_interest" value={option} />
                <span>{option}</span>
              </label>
            ))}
          </div>
        </fieldset>
        <label>
          First task you would want Sanjay to perform
          <textarea
            name="desired_first_task"
            rows={4}
            maxLength={500}
            placeholder="For example: prepare me for every meeting using my notes and recent messages."
          />
        </label>
        {message ? (
          <p className="form-error" role="alert">
            {message}
          </p>
        ) : null}
        <div className="form-actions">
          <button
            className="button button-primary"
            disabled={isPending}
            type="submit"
          >
            {isPending ? "Saving…" : "Share My Workflow"}
          </button>
          <button
            className="text-button"
            type="button"
            onClick={() => {
              setStage("complete");
              trackEvent("qualification_skipped");
            }}
          >
            Skip for now
          </button>
        </div>
      </form>
    );
  }

  return (
    <form
      className="signup-form"
      onSubmit={handleSignup}
      onFocus={markStarted}
      noValidate
    >
      <div className="form-grid two-columns">
        <label>
          First name
          <input
            aria-describedby={
              fieldErrors.first_name ? "first-name-error" : undefined
            }
            aria-invalid={Boolean(fieldErrors.first_name)}
            autoComplete="given-name"
            name="first_name"
            onChange={(event) => setFirstName(event.target.value)}
            placeholder="Your first name"
            value={firstName}
          />
          {fieldErrors.first_name ? (
            <span className="field-error" id="first-name-error">
              {fieldErrors.first_name}
            </span>
          ) : null}
        </label>
        <label>
          Email address
          <input
            aria-describedby={fieldErrors.email ? "email-error" : undefined}
            aria-invalid={Boolean(fieldErrors.email)}
            autoComplete="email"
            inputMode="email"
            name="email"
            onChange={(event) => setEmail(event.target.value)}
            placeholder="you@company.com"
            type="email"
            value={email}
          />
          {fieldErrors.email ? (
            <span className="field-error" id="email-error">
              {fieldErrors.email}
            </span>
          ) : null}
        </label>
      </div>
      <label className="privacy-check">
        <input
          type="checkbox"
          name="privacy_acknowledged"
          aria-describedby="privacy-note"
        />
        <span id="privacy-note">
          I understand Sanjay will use these details only for early-access
          communication and product research.
        </span>
      </label>
      {fieldErrors.privacy_acknowledged ? (
        <p className="field-error">{fieldErrors.privacy_acknowledged}</p>
      ) : null}
      {message ? (
        <p className="form-error" role="alert">
          {message}
        </p>
      ) : null}
      <button
        className="button button-primary form-submit"
        disabled={isPending}
        type="submit"
      >
        {isPending ? "Requesting…" : "Request early access"}
      </button>
      <div className="form-fine-print">
        <span>No spam.</span>
        <span>Access is limited.</span>
        <span>Your details stay private.</span>
      </div>
    </form>
  );
}
