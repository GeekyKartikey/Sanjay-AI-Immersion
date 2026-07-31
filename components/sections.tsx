import { WaitlistForm } from "./waitlist-form";

function SectionMarker({ label }: { label: string }) {
  return <p className="section-marker"><span aria-hidden="true" />{label}</p>;
}

export function DivyaDrishtiSection() {
  return (
    <section className="system-section origin-section" id="drishti">
      <div className="drishti-spine" aria-hidden="true" />
      <div className="container origin-layout">
        <div>
          <SectionMarker label="The idea behind the name" />
          <h2>Sanjay could see the whole field without standing inside it.</h2>
        </div>
        <div className="origin-copy">
          <p>
            In the Mahabharata, Sanjay was given Divya Drishti—the ability to
            witness events beyond his physical location and describe what was
            happening as one connected story.
          </p>
          <p>
            That is the product idea here: not another isolated assistant, but
            one private view across your approved work context, available
            through voice.
          </p>
          <div className="translation-line">
            <span>Then</span><strong>See the whole field</strong>
            <i aria-hidden="true">→</i>
            <span>Now</span><strong>Understand work across software</strong>
          </div>
        </div>
      </div>
    </section>
  );
}

export function OrchestrationSection() {
  return (
    <section className="system-section orchestration-section" id="orchestration">
      <div className="drishti-spine" aria-hidden="true" />
      <div className="container">
        <div className="orchestration-heading">
          <div>
            <SectionMarker label="One command, several systems" />
            <h2>Speak once. Sanjay follows the context.</h2>
          </div>
          <p>
            Instead of opening five tools and rebuilding the story yourself,
            Sanjay is designed to trace the work across them and return one
            useful next move.
          </p>
        </div>
        <div className="orchestration-canvas">
          <div className="command-column">
            <span className="column-label">01 · You speak</span>
            <div className="spoken-command">
              <span className="mini-voice" aria-hidden="true"><i /><i /><i /></span>
              <p>“Prepare me for the partner call and draft the follow-up.”</p>
            </div>
          </div>
          <div className="context-column">
            <span className="column-label">02 · Divya Drishti gathers</span>
            <ul>
              <li><span>Meet</span>Last conversation and decisions</li>
              <li><span>Mail</span>Unanswered pricing questions</li>
              <li><span>Docs</span>Latest proposal version</li>
              <li><span>Calendar</span>Attendees and meeting time</li>
            </ul>
          </div>
          <div className="action-column">
            <span className="column-label">03 · Sanjay prepares</span>
            <div className="prepared-output">
              <p><strong>Meeting brief</strong><span>Ready</span></p>
              <p><strong>Open questions</strong><span>2 found</span></p>
              <p><strong>Follow-up draft</strong><span>Needs approval</span></p>
            </div>
          </div>
        </div>
        <p className="availability-note">
          Designed to stay available by voice while running in the background
          and your device is awake.
        </p>
      </div>
    </section>
  );
}

export function TasteLearningSection() {
  return (
    <section className="system-section taste-section" id="taste">
      <div className="drishti-spine" aria-hidden="true" />
      <div className="container taste-layout">
        <div className="taste-copy">
          <SectionMarker label="Taste learning · Your work twin" />
          <h2>It learns how you work, not just what you work on.</h2>
          <p>
            With your approval, Sanjay is designed to learn from your edits,
            decisions, preferred formats, and repeated routines. Over time, it
            becomes a digital work twin—an assistant that prepares work more
            like you would.
          </p>
          <p className="twin-note">
            Not a copy of your identity. A private working model you can
            inspect, correct, or reset.
          </p>
        </div>

        <div className="taste-console" aria-label="Example of Sanjay learning your work preferences">
          <div className="taste-head">
            <strong>How your work twin learns</strong>
            <span>Concept</span>
          </div>
          <div className="learning-row">
            <span><small>You do</small>Shorten a project update</span>
            <i aria-hidden="true">→</i>
            <strong><small>Sanjay learns</small>Direct, compact writing</strong>
          </div>
          <div className="learning-row">
            <span><small>You do</small>Move deep work to mornings</span>
            <i aria-hidden="true">→</i>
            <strong><small>Sanjay learns</small>Protect focus before noon</strong>
          </div>
          <div className="learning-row">
            <span><small>You do</small>Ask for risks before details</span>
            <i aria-hidden="true">→</i>
            <strong><small>Sanjay learns</small>Surface risks first</strong>
          </div>
          <div className="adapted-output">
            <div>
              <small>Next time · Prepared in your style</small>
              <p>
                Partner call at 3 PM. Two decisions are blocked. Review the
                pricing risk first; the short follow-up is ready.
              </p>
            </div>
            <span>Review before use</span>
          </div>
          <p className="taste-control"><i /> Editable · forgettable · private</p>
        </div>
      </div>
    </section>
  );
}

export function PrivacySection() {
  return (
    <section className="system-section privacy-section" id="privacy">
      <div className="drishti-spine" aria-hidden="true" />
      <div className="container privacy-layout">
        <div>
          <SectionMarker label="Power needs a boundary" />
          <h2>It can see only what you allow. It acts only when you approve.</h2>
          <p>
            Divya Drishti in Sanjay is not silent access. The product is being
            designed around an explicit permission boundary.
          </p>
        </div>
        <div className="permission-console">
          <div className="console-head"><strong>Permission boundary</strong><span>Concept</span></div>
          <div className="console-row"><span>Local files and memory</span><strong>On device</strong></div>
          <div className="console-row"><span>Read approved work context</span><strong>Allowed</strong></div>
          <div className="console-row warning"><span>Send email follow-up</span><strong>Ask every time</strong></div>
          <div className="console-row warning"><span>Change calendar or task</span><strong>Ask every time</strong></div>
          <div className="console-foot"><i /> No silent uploads · Memory can be corrected or removed</div>
        </div>
      </div>
    </section>
  );
}

export function WaitlistSection() {
  return (
    <section className="system-section waitlist-section" id="waitlist">
      <div className="drishti-spine" aria-hidden="true" />
      <div className="container waitlist-layout">
        <div>
          <SectionMarker label="Private beta" />
          <h2>What should Sanjay learn to see across your workday?</h2>
          <p>
            Join the first group and share the software, context, and repeated
            work you want one voice command to bring together.
          </p>
          <ul className="beta-signals">
            <li>Shape the first connected workflows</li>
            <li>Test the permission model</li>
            <li>Get early product access</li>
          </ul>
        </div>
        <div className="form-panel"><WaitlistForm /></div>
      </div>
    </section>
  );
}
