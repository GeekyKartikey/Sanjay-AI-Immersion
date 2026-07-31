import { TrackedLink } from "./tracked-link";

export function Hero() {
  return (
    <section className="hero" id="product">
      <div className="container hero-layout">
        <div className="hero-copy">
          <p className="status-line">
            <span aria-hidden="true" /> In development · Private beta
          </p>
          <h1>Your daily work, remembered and ready when you need it.</h1>
          <p className="hero-lede">
            Sanjay is a voice-first personal AI assistant that connects your
            meetings, messages, files, tasks, and follow-ups—so you can ask what
            needs attention instead of searching across every tool.
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
            <span>Product concept · On-device</span>
          </div>
          <div className="voice-request">
            <span className="voice-button" aria-hidden="true">●</span>
            <div>
              <small>You said</small>
              <p>“Prepare me for the 3 PM partner call.”</p>
            </div>
          </div>
          <div className="context-strip">
            <small>Context found with your permission</small>
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
            your approval.
          </p>
        </aside>
      </div>
    </section>
  );
}
