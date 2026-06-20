import Link from 'next/link'

export default function Footer() {
  return (
    <>
      <hr className="divider" />
      <footer>
        <p className="footer-copy">© {new Date().getFullYear()} Expo QR. All rights reserved.</p>
        <ul className="footer-links">
          <li><Link href="/privacy-policy">Privacy Policy</Link></li>
          <li><Link href="/terms-and-conditions">Terms &amp; Conditions</Link></li>
        </ul>
      </footer>
    </>
  )
}
