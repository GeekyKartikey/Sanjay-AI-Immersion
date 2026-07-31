import { TrackedLink } from "./tracked-link";
import { InteractiveSight } from "./interactive-sight";

export function Hero() {
  return (
    <section className="hero" id="product">
      <div className="hero-sightline" aria-hidden="true" />
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">
            In development · Private voice AI for your computer
          </p>
          <h1>
            One voice
            <br />
            for work that
            <br />
            <em>lives everywhere</em>
          </h1>
          <p className="hero-lede">
            Sanjay connects the context in your meetings, messages, files, and
            projects. Ask by voice to prepare, find, draft, remember, and follow
            up.
          </p>
          <p className="hero-support">
            It works on your device by default. Nothing reaches email, calendar,
            the web, or another tool without your permission.
          </p>
          <div className="hero-actions">
            <TrackedLink
              className="button button-primary"
              event="hero_waitlist_clicked"
              href="#waitlist"
            >
              <span aria-hidden="true" className="action-ring" />
              Join the private beta
            </TrackedLink>
            <TrackedLink
              className="button button-secondary"
              event="secondary_cta_clicked"
              href="#how-it-works"
            >
              See how Sanjay works <span aria-hidden="true">↓</span>
            </TrackedLink>
          </div>
          <ul className="trust-list" aria-label="Sanjay principles">
            <li>Local by default</li>
            <li>Permission before reach</li>
            <li>Memory you control</li>
          </ul>
        </div>
        <InteractiveSight />
      </div>
    </section>
  );
}
