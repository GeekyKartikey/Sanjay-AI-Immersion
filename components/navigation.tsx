"use client";

import { useRef } from "react";

export function Navigation() {
  const mobileNavRef = useRef<HTMLDetailsElement>(null);

  function closeMobileNav() {
    mobileNavRef.current?.removeAttribute("open");
  }

  return (
    <header className="site-header">
      <nav className="container nav" aria-label="Main navigation">
        <a className="wordmark" href="#main-content" aria-label="Sanjay home">
          <span>Sanjay</span>
          <small>Private intelligence</small>
        </a>
        <div className="nav-links">
          <a href="#product">Product</a>
          <a href="#how-it-works">How it works</a>
          <a href="#privacy">Privacy</a>
          <a href="#use-cases">Use cases</a>
        </div>
        <details className="mobile-nav" ref={mobileNavRef}>
          <summary>
            <span>Index</span>
            <i aria-hidden="true" />
          </summary>
          <div>
            <a href="#product" onClick={closeMobileNav}>
              Product
            </a>
            <a href="#how-it-works" onClick={closeMobileNav}>
              How it works
            </a>
            <a href="#privacy" onClick={closeMobileNav}>
              Privacy
            </a>
            <a href="#use-cases" onClick={closeMobileNav}>
              Use cases
            </a>
          </div>
        </details>
        <a className="button button-compact" href="#waitlist">
          <span aria-hidden="true" className="action-ring" />
          Join the private beta
        </a>
      </nav>
    </header>
  );
}
