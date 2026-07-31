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
        <aside className="today-note" aria-label="Example daily briefing">
          <div className="note-topline">
            <span>Tuesday · 9:10 AM</span>
            <span>Example</span>
          </div>
          <p className="note-prompt">“What needs my attention today?”</p>
          <div className="note-answer">
            <p>You have a partner call at 3 PM.</p>
            <p>Riya is waiting for feedback on the launch draft.</p>
            <p>You promised to send Arjun the revised proposal yesterday.</p>
          </div>
          <p className="note-foot">One answer, using context you approved.</p>
        </aside>
      </div>
    </section>
  );
}
