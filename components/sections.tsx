import { WaitlistForm } from "./waitlist-form";

export function DailyExampleSection() {
  return (
    <section className="page-section example-section" id="example">
      <div className="container section-layout">
        <div className="section-intro">
          <p className="section-label">One ordinary workday</p>
          <h2>Less searching. Fewer dropped threads.</h2>
          <p>
            Sanjay is being built for the small moments where work usually
            falls through the gaps.
          </p>
        </div>
        <div className="workday-example">
          <div className="workday-row">
            <time>2:45 PM</time>
            <div>
              <strong>You ask</strong>
              <p>“Prepare me for the partner call.”</p>
            </div>
          </div>
          <div className="workday-row response-row">
            <time>2:45 PM</time>
            <div>
              <strong>Sanjay brings together</strong>
              <ul>
                <li>The last meeting notes</li>
                <li>The latest proposal</li>
                <li>Two unanswered questions from email</li>
              </ul>
            </div>
          </div>
          <div className="workday-row">
            <time>4:10 PM</time>
            <div>
              <strong>After the call</strong>
              <p>
                You ask Sanjay to draft the follow-up and remember the next
                step.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function BenefitsSection() {
  const benefits = [
    {
      title: "Remember what matters",
      copy: "Keep decisions, commitments, and useful context connected to the work they belong to.",
    },
    {
      title: "Prepare without the hunt",
      copy: "Bring the right notes, messages, files, and open questions together before a meeting or task.",
    },
    {
      title: "Follow through",
      copy: "Turn conversations into drafts, reminders, and next steps before they disappear into another busy day.",
    },
  ];

  return (
    <section className="page-section benefits-section" id="benefits">
      <div className="container">
        <div className="section-intro compact-intro">
          <p className="section-label">What it helps with</p>
          <h2>One assistant across the work you already do.</h2>
        </div>
        <div className="benefit-list">
          {benefits.map((benefit) => (
            <article key={benefit.title}>
              <span aria-hidden="true">●</span>
              <h3>{benefit.title}</h3>
              <p>{benefit.copy}</p>
            </article>
          ))}
        </div>
        <p className="honesty-note">
          Sanjay is in development. The first workflows will be shaped with
          early users rather than presented as finished features today.
        </p>
      </div>
    </section>
  );
}

export function PrivacySection() {
  return (
    <section className="page-section privacy-section" id="privacy">
      <div className="container privacy-layout">
        <div className="section-intro">
          <p className="section-label">Privacy is part of the product</p>
          <h2>Your work context should remain yours.</h2>
          <p>
            Sanjay is being designed to process personal context on your device
            by default and ask before reaching an outside service.
          </p>
        </div>
        <ul className="privacy-points">
          <li>
            <strong>Local by default</strong>
            <span>Keep personal memory and approved context on your device.</span>
          </li>
          <li>
            <strong>Permission before action</strong>
            <span>Know when email, calendar, the web, or another tool is used.</span>
          </li>
          <li>
            <strong>Memory you control</strong>
            <span>See, correct, and remove what the assistant remembers.</span>
          </li>
        </ul>
      </div>
    </section>
  );
}

export function WaitlistSection() {
  return (
    <section className="page-section waitlist-section" id="waitlist">
      <div className="container waitlist-layout">
        <div className="section-intro">
          <p className="section-label">Private beta</p>
          <h2>Help shape how Sanjay handles a real workday.</h2>
          <p>
            Join the early list and tell us where context gets lost in your
            daily work. The first group will stay small while we build the core
            workflows.
          </p>
        </div>
        <div className="form-panel">
          <WaitlistForm />
        </div>
      </div>
    </section>
  );
}
