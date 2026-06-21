import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

const features = [
  { icon: '⚡', title: 'Instant Scanning', desc: 'Point your camera at any QR code. Recognition happens in under 200ms — no lag, no fumbling.' },
  { icon: '🎨', title: 'Custom QR Generator', desc: 'Generate QR codes with your colors, logo, and style. Looks great printed or on screen.' },
  { icon: '🔒', title: 'Fully Offline', desc: 'No account required. All scanning and generation runs on your device — your data stays yours.' },
  { icon: '📋', title: 'Scan History', desc: 'Every scan is saved locally. Search, copy, or share any past result in one tap.' },
  { icon: '🌐', title: '15+ QR Types', desc: 'URLs, WiFi, vCard, email, SMS, phone, location, events, and more — all supported.' },
  { icon: '📤', title: 'Easy Export', desc: 'Export generated QR codes as PNG or SVG. Ready for print, web, or sharing.' },
]

const steps = [
  { n: '01', title: 'Open the app', desc: 'Launch Expo QR — no sign-in, no onboarding screens. Camera is ready instantly.' },
  { n: '02', title: 'Scan or create', desc: 'Point at a QR code to scan it, or tap Generate to create one from your data.' },
  { n: '03', title: 'Act on the result', desc: 'Open a link, connect to WiFi, save a contact — right from the scan result screen.' },
  { n: '04', title: 'Save & share', desc: 'Generated QR codes are saved to your gallery. Share to any app in seconds.' },
]

const qrTypes = [
  { icon: '🔗', label: 'URL' },
  { icon: '📶', label: 'WiFi' },
  { icon: '👤', label: 'vCard' },
  { icon: '✉️', label: 'Email' },
  { icon: '💬', label: 'SMS' },
  { icon: '📍', label: 'Location' },
  { icon: '📅', label: 'Event' },
  { icon: '📞', label: 'Phone' },
  { icon: '📝', label: 'Plain Text' },
  { icon: '💳', label: 'Payment' },
  { icon: '📦', label: 'Product' },
  { icon: '🎵', label: 'Music' },
]

// Simple QR-like visual pattern
const qrPattern = [
  [1,1,1,0,1,1,1],
  [1,0,1,0,1,0,1],
  [1,1,1,0,1,1,1],
  [0,0,0,0,0,1,0],
  [1,1,1,0,1,0,1],
  [1,0,0,0,0,0,1],
  [1,1,1,0,1,1,1],
]

export default function Home() {
  return (
    <>
      <Nav />

      {/* HERO */}
      <section className="hero">
        <div className="hero-glow" />
        <div className="hero-badge">
          <span /> Available on Android & iOS
        </div>
        <h1>
          Scan anything.<br />
          Generate <em>everything</em>.
        </h1>
        <p className="hero-sub">
          Expo QR is the cleanest QR scanner and generator for Android & iOS.
          Offline-first, instant, and completely free.
        </p>
        <div className="hero-actions">
          <a href="#download" className="btn-primary">
            ↓ Download Free
          </a>
          <a href="#features" className="btn-secondary">
            See features →
          </a>
        </div>

        <div className="qr-preview">
          <div className="qr-card">
            <div className="qr-grid">
              {qrPattern.flat().map((cell, i) => (
                <div
                  key={i}
                  className={`qr-cell ${cell ? (i === 0 || i === 2 || i === 14 || i === 42 || i === 44 || i === 48 ? 'corner' : 'on') : ''}`}
                />
              ))}
            </div>
            <p className="qr-label">expoqr.app</p>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="section" id="features">
        <p className="section-eyebrow">Features</p>
        <h2 className="section-title">Everything a QR app<br />should do</h2>
        <p className="section-body">
          Built for speed and simplicity. No ads buried in the scan flow, no fake premium gates — just a tool that works.
        </p>
        <div className="features-grid">
          {features.map(f => (
            <div className="feature-card" key={f.title}>
              <div className="feature-icon">{f.icon}</div>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <hr className="divider" />

      {/* HOW IT WORKS */}
      <section className="section" id="how-it-works">
        <p className="section-eyebrow">How it works</p>
        <h2 className="section-title">Zero friction,<br />start to finish</h2>
        <div className="how-grid">
          {steps.map(s => (
            <div className="how-step" key={s.n}>
              <div className="step-number">{s.n}</div>
              <div className="step-line" />
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <hr className="divider" />

      {/* QR TYPES */}
      <section className="section" id="qr-types">
        <p className="section-eyebrow">QR Types</p>
        <h2 className="section-title">Generate any kind<br />of QR code</h2>
        <p className="section-body">
          From personal contact cards to event check-ins — Expo QR supports 15+ data types out of the box.
        </p>
        <div className="types-grid">
          {qrTypes.map(t => (
            <div className="type-pill" key={t.label}>
              <span className="type-pill-icon">{t.icon}</span>
              {t.label}
            </div>
          ))}
        </div>
      </section>

      <hr className="divider" />

      {/* CTA / DOWNLOAD */}
      <section className="section" id="download">
        <div className="cta-banner">
          <h2>Ready to scan smarter?</h2>
          <p>Download Expo QR free on Android & iOS — no ads, no subscription, no nonsense.</p>
          <div className="store-badges">
            <a
              href="https://play.google.com/store"
              className="store-badge"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="store-badge-icon">▶</span>
              <div>
                <div style={{ fontSize: '11px', opacity: 0.6 }}>GET IT ON</div>
                <div>Google Play</div>
              </div>
            </a>
            <a
              href="https://apps.apple.com"
              className="store-badge"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                viewBox="0 0 384 512"
                width="20"
                height="20"
                fill="currentColor"
                style={{ marginRight: '2px', display: 'block' }}
              >
                <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-48.7-22.9-84.5-22.2-46.9.7-90.2 28-114.3 70-49 85.2-12.6 211.6 34.6 279.7 23.1 33.3 50.1 70.3 86 69 34.6-1.4 47.8-22.3 89.6-22.3 41.9 0 54 22.3 89.9 21.5 36.6-.7 60.4-33.3 83.2-66.9 26.3-38.5 37.1-75.8 37.6-77.8-.8-.4-72.7-27.9-73.4-110.8zM290.5 73.1c15.8-19.3 26.5-46.1 23.5-73.1-23.2 1-51.5 15.5-68.2 35-14.2 16.5-26.7 43.6-23.3 70.2 25.8 2 52.4-12.8 68-32.1z" />
              </svg>
              <div>
                <div style={{ fontSize: '11px', opacity: 0.6 }}>DOWNLOAD ON THE</div>
                <div>App Store</div>
              </div>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
