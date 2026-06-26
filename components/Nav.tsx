'use client'
import Link from 'next/link'

export default function Nav() {
  return (
    <nav>
      <Link href="/" className="nav-logo">
        <div className="logo-dot" />
        Expo QR
      </Link>
      <ul className="nav-links">
        <li><Link href="/#features">Features</Link></li>
        <li><Link href="/#how-it-works">How it works</Link></li>
        <li><Link href="/#qr-types">QR Types</Link></li>
        <li><Link href="/support">Support</Link></li>
        <li><Link href="/#download" className="nav-cta">Download Free</Link></li>
      </ul>
    </nav>
  )
}
