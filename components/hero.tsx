import { TrackedLink } from "./tracked-link";

const sources = ["Meet", "Mail", "Calendar", "Docs", "GitHub"];

export function Hero() {
  return (
    <section className="hero" id="product">
      <div className="hero-drishti-line" aria-hidden="true" />
      <div className="container hero-layout">
        <div className="hero-copy">
          <p className="status-line"><span /> In development · Private beta</p>
          <h1>Your daily work, remembered and ready when you speak.</h1>
          <p className="hero-lede">
            Sanjay is a private, voice-first personal AI designed to hold one
            view across the software you approve—then prepare, create, and
            coordinate work from one command.
          </p>
          <div className="hero-actions">
            <TrackedLink className="primary-button" event="hero_waitlist_clicked" href="#waitlist">
              Join the private beta
            </TrackedLink>
            <TrackedLink className="text-link" event="secondary_cta_clicked" href="#drishti">
              Why “Sanjay”? <span aria-hidden="true">↓</span>
            </TrackedLink>
          </div>
        </div>

        <div className="drishti-stage" aria-label="Concept showing one voice command working across approved software">
          <div className="stage-head">
            <span>Divya Drishti · Product concept</span>
            <span className="local-state"><i /> Private context</span>
          </div>
          <div className="source-orbit" aria-hidden="true">
            {sources.map((source, index) => (
              <span className={`source-node source-${index + 1}`} key={source}>{source}</span>
            ))}
            <span className="orbit-ring ring-one" />
            <span className="orbit-ring ring-two" />
          </div>
          <div className="voice-core">
            <span className="voice-wave" aria-hidden="true"><i /><i /><i /><i /><i /></span>
            <small>Voice command</small>
            <strong>“Prepare me for the 3 PM partner call.”</strong>
          </div>
          <div className="stage-result">
            <small>Context aligned</small>
            <strong>Brief ready · 2 open questions · follow-up drafted</strong>
            <span>Waiting for your approval</span>
          </div>
        </div>
      </div>
    </section>
  );
}
