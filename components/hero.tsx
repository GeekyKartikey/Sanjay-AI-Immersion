import { TrackedLink } from "./tracked-link";

export function Hero() {
  return (
    <section className="hero" id="product">
      <div className="container hero-layout">
        <div className="hero-copy">
          <p className="status-line">
            <span aria-hidden="true" /> In development · Private beta
          </p>
          <h1>Your daily work, remembered and ready when you speak.</h1>
          <p className="hero-lede">
            Inspired by Sanjay&apos;s Divya Drishti, Sanjay is a private,
            voice-first personal AI designed to understand context across the
            software you approve—and coordinate work across them from one voice
            command.
          </p>
          <div className="hero-actions">
            <TrackedLink
              className="primary-button"
              event="hero_waitlist_clicked"
              href="#waitlist"
            >
              Join the private beta
            </TrackedLink>
            <TrackedLink
              className="text-link"
              event="secondary_cta_clicked"
              href="#example"
            >
              See a real example <span aria-hidden="true">↓</span>
            </TrackedLink>
          </div>
        </div>
        <aside className="product-preview" aria-label="Sanjay product concept">
          <div className="preview-topline">
            <strong>Sanjay</strong>
            <span>Divya Drishti view · Product concept</span>
          </div>
          <div className="voice-request">
            <span className="voice-button" aria-hidden="true">●</span>
            <div>
              <small>You said</small>
              <p>“Prepare me for the 3 PM partner call.”</p>
            </div>
          </div>
          <div className="context-strip">
            <small>One view across your approved software</small>
            <div>
              <span>Meet notes</span>
              <span>Email thread</span>
              <span>Proposal.pdf</span>
              <span>Calendar</span>
            </div>
          </div>
          <div className="preview-answer">
            <small>Your brief</small>
            <p>
              Last time, you agreed to revise the launch timeline. The new
              proposal is ready, but two pricing questions remain unanswered.
            </p>
          </div>
          <div className="preview-actions">
            <button type="button">Draft follow-up</button>
            <button type="button">Remember next step</button>
          </div>
          <p className="permission-note">
            <span aria-hidden="true">✓</span> Nothing is sent or changed without
            your approval. Designed for voice access while running in the
            background.
          </p>
        </aside>
      </div>
    </section>
  );
}
