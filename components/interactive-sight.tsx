"use client";

import { useState } from "react";

const sightSignals = [
  {
    label: "Meeting",
    command: "Prepare me for the 3 PM partner call.",
    result: "Brief assembled from calendar, notes, and the last email thread.",
  },
  {
    label: "Draft",
    command: "Continue the launch note in my voice.",
    result:
      "Draft opened with your recent edits and preferred tone in context.",
  },
  {
    label: "Project",
    command: "What changed while I was away?",
    result:
      "Three decisions and one blocked task surfaced from approved tools.",
  },
  {
    label: "Reminder",
    command: "Bring this back when the reply arrives.",
    result:
      "A private trigger is ready on this device. Nothing leaves silently.",
  },
  {
    label: "Message",
    command: "Turn today’s decisions into a short update.",
    result:
      "A concise update is ready for your review before anything is sent.",
  },
] as const;

export function InteractiveSight() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selected = sightSignals[selectedIndex];

  return (
    <div
      className="sight-field"
      aria-label="Choose a work signal to see how Sanjay resolves it"
    >
      <div className="sight-intro">
        <span>Interactive product example</span>
        <strong>Choose a work signal.</strong>
        <p>See how Sanjay turns scattered context into one useful next step.</p>
      </div>
      <div className="sight-noise" aria-hidden="true">
        {Array.from({ length: 28 }, (_, index) => (
          <i key={index} />
        ))}
      </div>
      <div className="sight-arcs" aria-hidden="true">
        <i />
        <i />
        <i />
        <i />
      </div>
      <div className="sight-labels" aria-label="Work signals">
        {sightSignals.map((signal, index) => (
          <button
            aria-pressed={selectedIndex === index}
            key={signal.label}
            onClick={() => setSelectedIndex(index)}
            type="button"
          >
            {signal.label}
          </button>
        ))}
      </div>
      <div className="sight-axis" aria-hidden="true">
        <span key={selectedIndex} />
      </div>
      <div className="sight-focus" aria-hidden="true">
        <i />
      </div>
      <div className="sight-readout" aria-live="polite">
        <span>{selected.label} in focus</span>
        <strong>“{selected.command}”</strong>
        <p>{selected.result}</p>
      </div>
      <small>Processing stays local by default</small>
    </div>
  );
}
