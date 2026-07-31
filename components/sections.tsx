import { WaitlistForm } from "./waitlist-form";

const workCategories = [
  ["Meetings", "Zoom · Meet · Calendar"],
  ["Communication", "Email · WhatsApp · Telegram"],
  ["Documents", "Notion · Docs · Local files"],
  ["Projects", "GitHub · Tasks · Proposals"],
  ["Communities", "Groups · Events · Partners"],
  ["Publishing", "LinkedIn · X · Instagram"],
  ["AI agents", "CLI agents · Coding assistants"],
  ["Ideas", "The thought you had between calls"],
];

const problems = [
  [
    "Fragmented context",
    "Important information is scattered across conversations, files, applications, and agents.",
  ],
  [
    "Constant switching",
    "Every small task requires another tool, the right thread, and a fresh start.",
  ],
  [
    "Cloud exposure",
    "Useful AI often means sending sensitive work and personal context to external servers.",
  ],
  [
    "Typing everything",
    "Your thoughts move faster than your ability to capture, organise, and act on them.",
  ],
];

const modules = [
  [
    "Voice interface",
    "Early access",
    ["Push-to-talk first", "Spoken + visual responses", "Fast idea capture"],
  ],
  [
    "On-device intelligence",
    "In development",
    ["Local language model", "Offline basic tasks", "Local retrieval"],
  ],
  [
    "Personal memory",
    "In development",
    ["Preferences + projects", "Editable memory", "Forget controls"],
  ],
  [
    "Work context",
    "Exploring",
    ["Local files + notes", "Project folders", "CLI agent context"],
  ],
  [
    "Communication + content",
    "Planned",
    ["Email and social drafts", "Meeting summaries", "Follow-up messages"],
  ],
  [
    "Actions + reminders",
    "Planned",
    ["Tasks and reminders", "Meeting briefs", "Daily focus"],
  ],
  [
    "Privacy controls",
    "In development",
    [
      "Permission dashboard",
      "Processing labels",
      "Sensitive-action confirmation",
    ],
  ],
];

const voiceExamples = [
  "Prepare me for my next meeting.",
  "Find the proposal we discussed last week.",
  "Summarise the unread updates from this project.",
  "Draft a LinkedIn update in my usual style.",
  "Capture this idea and connect it to the developer program.",
  "Remind me to follow up if they do not reply tomorrow.",
  "What should I focus on today?",
  "Turn these meeting notes into tasks and follow-ups.",
  "Create a short Telegram update from this document.",
];

function SectionHeading({
  eyebrow,
  title,
  copy,
}: {
  eyebrow: string;
  title: string;
  copy?: string;
}) {
  return (
    <div className="section-heading">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {copy ? <p>{copy}</p> : null}
    </div>
  );
}

export function WorkdaySection() {
  return (
    <section className="section workday-section">
      <div className="container">
        <SectionHeading
          eyebrow="Built around a real workday"
          title="Your work does not live in one app."
          copy="Meetings happen on Zoom and Meet. Plans live in Notion and Docs. Updates arrive through email, Telegram, and WhatsApp. Ideas appear while you are doing something else."
        />
        <div className="context-grid">
          {workCategories.map(([title, detail]) => (
            <article className="context-item" key={title}>
              <span className="context-icon" aria-hidden="true">
                {title.slice(0, 1)}
              </span>
              <div>
                <h3>{title}</h3>
                <p>{detail}</p>
              </div>
            </article>
          ))}
        </div>
        <p className="section-statement">
          Sanjay is designed around this fragmented reality.
        </p>
      </div>
    </section>
  );
}

export function ProblemSection() {
  return (
    <section className="section" id="problems">
      <div className="container">
        <SectionHeading
          eyebrow="The real problem"
          title={"You are not short on tools.\nYou are short on continuity."}
        />
        <div className="problem-grid">
          {problems.map(([title, copy], index) => (
            <article className="problem-card" key={title}>
              <span className="card-index">0{index + 1}</span>
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ProductFlowSection() {
  const inputs = [
    "Meetings",
    "Emails",
    "Chats",
    "Documents",
    "Projects",
    "Tasks",
    "Social",
    "AI agents",
  ];
  const intelligence = [
    "Local model",
    "Personal memory",
    "Preferences",
    "Local retrieval",
    "Permissions",
    "Knowledge graph",
  ];
  const actions = [
    "Summarise",
    "Draft",
    "Search",
    "Schedule",
    "Capture",
    "Follow up",
    "Prepare",
    "Remind",
  ];
  return (
    <section className="section flow-section" id="how-it-works">
      <div className="container">
        <SectionHeading
          eyebrow="How it works"
          title="One voice interface for your working day."
          copy="Context comes together on your device. Online services are contacted only when an approved action needs them."
        />
        <div className="flow-diagram">
          <div className="flow-column">
            <span className="utility-label">Work inputs</span>
            {inputs.map((item) => (
              <i key={item}>{item}</i>
            ))}
          </div>
          <span className="flow-arrow" aria-hidden="true">
            →
          </span>
          <div className="flow-core">
            <span className="voice-glyph" aria-hidden="true">
              <i />
              <i />
              <i />
              <i />
              <i />
            </span>
            <strong>Sanjay</strong>
            <small>Voice interface</small>
          </div>
          <span className="flow-arrow" aria-hidden="true">
            →
          </span>
          <div className="flow-column local-column">
            <span className="utility-label">Local intelligence</span>
            {intelligence.map((item) => (
              <i key={item}>{item}</i>
            ))}
          </div>
          <span className="flow-arrow" aria-hidden="true">
            →
          </span>
          <div className="flow-column">
            <span className="utility-label">Possible actions</span>
            {actions.map((item) => (
              <i key={item}>{item}</i>
            ))}
          </div>
        </div>
        <div className="optional-access">
          <span>
            <i className="status-dot" /> On-device by default
          </span>
          <span className="dashed-line" aria-hidden="true" />
          <span>Permission required</span>
          <span className="dashed-line" aria-hidden="true" />
          <span>Web · Calendar · Email · GitHub</span>
        </div>
      </div>
    </section>
  );
}

export function DifferentiatorsSection() {
  const items = [
    [
      "Voice",
      "Always ready for your voice",
      "Capture an idea, retrieve context, or start an action without stopping everything to type.",
      "Available whenever your device is active.",
    ],
    [
      "Local",
      "Private by architecture",
      "Your model, memory, preferences, and personal context remain on your device by default.",
      "Online only when needed.",
    ],
    [
      "Yours",
      "Personal from day one",
      "Start with context from the tools and agents you approve, then improve through every correction and decision.",
      "It learns how you work.",
    ],
  ];
  return (
    <section className="section differentiators">
      <div className="container">
        <SectionHeading
          eyebrow="Three decisions that matter"
          title="Built differently from cloud-first assistants."
        />
        <div className="differentiator-grid">
          {items.map(([label, title, copy, note]) => (
            <article className="differentiator-card" key={title}>
              <span className="diagram-orb">{label}</span>
              <h3>{title}</h3>
              <p>{copy}</p>
              <small>
                <i className="status-dot" /> {note}
              </small>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function MvpSection() {
  return (
    <section className="section" id="mvp">
      <div className="container">
        <SectionHeading
          eyebrow="A focused first version"
          title="What we are building first"
          copy="Not a finished Jarvis. A useful laptop-first assistant, built with early users and expanded only after the core workflows work."
        />
        <div className="module-grid">
          {modules.map(([title, status, details], index) => (
            <article className="module-card" key={title as string}>
              <div>
                <span className="card-index">0{index + 1}</span>
                <span className="status-label">{status as string}</span>
              </div>
              <h3>{title as string}</h3>
              <ul>
                {(details as string[]).map((detail) => (
                  <li key={detail}>{detail}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function UseCasesSection() {
  return (
    <section className="section use-cases-section" id="use-cases">
      <div className="container">
        <SectionHeading
          eyebrow="Speak the thought, keep the context"
          title="Built for the moments between your tools."
          copy="The first workflows start with the requests that currently interrupt your focus."
        />
        <div className="conversation-shell">
          <div className="conversation-header">
            <span>
              <i className="status-dot" /> Listening when invited
            </span>
            <span>Example interactions</span>
          </div>
          <div className="conversation-grid">
            {voiceExamples.map((example, index) => (
              <article
                className={
                  index === 0 || index === 4
                    ? "voice-card featured"
                    : "voice-card"
                }
                key={example}
              >
                <span className="mini-wave" aria-hidden="true">
                  <i />
                  <i />
                  <i />
                </span>
                <p>“{example}”</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function PersonalisationSection() {
  return (
    <section className="section">
      <div className="container personalisation-grid">
        <SectionHeading
          eyebrow="Personal from the beginning"
          title="An assistant that begins with context."
          copy="With your approval, Sanjay can learn from local files, selected projects, previous AI instructions, CLI agents, and writing samples—then improve through your corrections and routines."
        />
        <div className="timeline-panel">
          <article>
            <span>Day one</span>
            <h3>Build your private starting profile</h3>
            <ul>
              <li>Import approved context</li>
              <li>Learn writing style</li>
              <li>Identify active projects</li>
              <li>Capture preferences</li>
            </ul>
          </article>
          <span className="timeline-line" aria-hidden="true">
            <i />
          </span>
          <article>
            <span>Over time</span>
            <h3>Need fewer repeated instructions</h3>
            <ul>
              <li>Learn corrections</li>
              <li>Recognise routines</li>
              <li>Prioritise better</li>
              <li>Adapt responses</li>
            </ul>
          </article>
        </div>
        <p className="control-statement">
          You decide what it learns, remembers, and forgets.
        </p>
      </div>
    </section>
  );
}

export function PrivacySection() {
  return (
    <section className="section privacy-section" id="privacy">
      <div className="container privacy-grid">
        <div>
          <SectionHeading
            eyebrow="Private by architecture"
            title="Your assistant should work for you, not learn from you for someone else."
          />
          <ul className="privacy-list">
            {[
              "Local processing by default",
              "User-owned memory",
              "Explicit permissions",
              "Selective web access",
              "Transparent external requests",
              "Editable and deletable context",
              "No silent uploads",
            ].map((item) => (
              <li key={item}>
                <span>✓</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="privacy-diagram">
          <div className="device-boundary">
            <span className="utility-label">On your device</span>
            <strong>Model</strong>
            <strong>Memory</strong>
            <strong>Files</strong>
            <strong>Preferences</strong>
            <small>
              <i className="status-dot" /> Default boundary
            </small>
          </div>
          <div className="permission-gate">
            <span>Only with permission</span>
            <i aria-hidden="true">→</i>
          </div>
          <div className="external-box">
            <span className="utility-label">Optional external access</span>
            <strong>Live web information</strong>
            <strong>Approved integrations</strong>
          </div>
        </div>
      </div>
    </section>
  );
}

export function WaitlistSection() {
  return (
    <section className="section waitlist-section" id="waitlist">
      <div className="container transmission-ledger">
        <div className="ledger-header">
          <span>Private transmission ledger · Access by invitation</span>
          <span>Entry 001</span>
        </div>
        <div className="waitlist-grid">
          <div className="waitlist-intro">
            <p className="eyebrow">The first circle is small by design</p>
            <h2>Help shape Sanjay before the edges harden.</h2>
            <p>
              We are starting with developers, DevRel professionals, program
              managers, founders, and other multi-role operators who manage work
              across many tools.
            </p>
            <ul className="waitlist-benefits">
              <li>Get early access</li>
              <li>Share your workflows</li>
              <li>Influence the MVP</li>
              <li>Join product interviews</li>
              <li>Become a design partner</li>
            </ul>
          </div>
          <div className="form-panel">
            <WaitlistForm />
          </div>
        </div>
      </div>
    </section>
  );
}

export function FinalCtaSection() {
  return (
    <section className="section final-cta">
      <div className="container final-cta-inner">
        <span className="mini-wave large" aria-hidden="true">
          <i />
          <i />
          <i />
          <i />
          <i />
        </span>
        <h2>
          Stop adapting your work
          <br />
          to every tool.
        </h2>
        <p>
          Build one assistant that understands your context, respects your data,
          and works through your voice.
        </p>
        <a className="button button-primary" href="#waitlist">
          Join the private beta <span aria-hidden="true">↗</span>
        </a>
      </div>
    </section>
  );
}
