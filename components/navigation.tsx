export function Navigation() {
  return (
    <header className="site-header">
      <nav className="container nav" aria-label="Main navigation">
        <a className="wordmark" href="#main-content" aria-label="Sanjay home">
          Sanjay
        </a>
        <div className="nav-links">
          <a href="#example">Example</a>
          <a href="#privacy">Privacy</a>
          <a className="nav-cta" href="#waitlist">
            Join the beta
          </a>
        </div>
      </nav>
    </header>
  );
}
