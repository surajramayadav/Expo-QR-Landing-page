import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms & Conditions — Expo QR',
  description: 'Terms and Conditions for the Expo QR Scanner & Generator app.',
}

export default function TermsAndConditions() {
  return (
    <>
      <Nav />
      <main className="legal-page">
        <Link href="/" className="legal-back">← Back to home</Link>
        <h1>Terms &amp; Conditions</h1>
        <p className="legal-meta">Last updated: June 2025 &nbsp;·&nbsp; Effective date: June 2025</p>

        <div className="legal-section">
          <h2>1. Acceptance of terms</h2>
          <p>
            By downloading, installing, or using the Expo QR application ("App"), you agree to be bound
            by these Terms and Conditions ("Terms"). If you do not agree to these Terms, please do not
            use the App. These Terms apply to all users of the App worldwide.
          </p>
        </div>

        <div className="legal-section">
          <h2>2. Description of the App</h2>
          <p>
            Expo QR is a free application for Android and iOS that allows users to scan QR codes using their device
            camera and generate custom QR codes from various data types including URLs, contact
            information, WiFi credentials, email addresses, and more. The App operates primarily
            offline and requires no user account.
          </p>
        </div>

        <div className="legal-section">
          <h2>3. License to use</h2>
          <p>
            We grant you a limited, non-exclusive, non-transferable, revocable license to install and
            use the App on a device you own or control, solely for your personal, non-commercial use
            and in accordance with these Terms. This license does not include:
          </p>
          <ul>
            <li>Modifying, adapting, or creating derivative works of the App</li>
            <li>Reverse engineering or decompiling any part of the App</li>
            <li>Using the App for any unlawful purpose</li>
            <li>Redistributing or reselling the App</li>
          </ul>
        </div>

        <div className="legal-section">
          <h2>4. Acceptable use</h2>
          <p>You agree to use Expo QR only for lawful purposes. You must not use the App to:</p>
          <ul>
            <li>Generate QR codes that link to malicious, fraudulent, or illegal content</li>
            <li>Impersonate another person or organization via QR-encoded contact data</li>
            <li>Distribute QR codes intended to deceive or harm others</li>
            <li>Circumvent security measures of third-party services via QR codes</li>
            <li>Violate any applicable local, national, or international law or regulation</li>
          </ul>
        </div>

        <div className="legal-section">
          <h2>5. Intellectual property</h2>
          <p>
            All content within the App, including but not limited to the design, graphics, interface,
            and source code, is owned by or licensed to Expo QR and is protected by applicable
            intellectual property laws. You retain ownership of any QR codes you generate using the App.
            By using the App, you do not acquire any ownership rights in our intellectual property.
          </p>
        </div>

        <div className="legal-section">
          <h2>6. QR code content responsibility</h2>
          <p>
            Expo QR is a neutral tool. We have no control over the content encoded in QR codes you scan
            or generate. You are solely responsible for:
          </p>
          <ul>
            <li>The content of any QR codes you generate and distribute</li>
            <li>Verifying the safety and legitimacy of any QR codes you choose to scan</li>
            <li>Any interactions with third-party websites or services accessed via scanned QR codes</li>
          </ul>
          <p>
            We strongly advise caution when scanning QR codes from unknown sources.
          </p>
        </div>

        <div className="legal-section">
          <h2>7. Disclaimer of warranties</h2>
          <p>
            The App is provided "as is" and "as available" without warranties of any kind, either
            express or implied, including but not limited to implied warranties of merchantability,
            fitness for a particular purpose, or non-infringement. We do not warrant that the App will
            be error-free, uninterrupted, or free from viruses or other harmful components.
          </p>
        </div>

        <div className="legal-section">
          <h2>8. Limitation of liability</h2>
          <p>
            To the fullest extent permitted by law, Expo QR and its developers shall not be liable for
            any indirect, incidental, special, consequential, or punitive damages — including loss of
            data, revenue, or profits — arising from your use of or inability to use the App, even if
            we have been advised of the possibility of such damages. Our total liability to you for any
            claim arising from these Terms or the App shall not exceed the amount you paid for the App
            (which is zero, as the App is free).
          </p>
        </div>

        <div className="legal-section">
          <h2>9. Updates and changes to the App</h2>
          <p>
            We may release updates to the App from time to time to add features, fix bugs, or improve
            performance. We reserve the right to modify or discontinue the App at any time without
            notice. We are not obligated to provide updates or maintain the App indefinitely.
          </p>
        </div>

        <div className="legal-section">
          <h2>10. Changes to these Terms</h2>
          <p>
            We reserve the right to update these Terms at any time. Changes will be posted on this
            page with an updated effective date. Your continued use of the App following any changes
            constitutes acceptance of the revised Terms. We recommend reviewing this page periodically.
          </p>
        </div>

        <div className="legal-section">
          <h2>11. Governing law</h2>
          <p>
            These Terms are governed by and construed in accordance with the laws of India, without
            regard to its conflict of law provisions. Any disputes arising from these Terms or your
            use of the App shall be subject to the exclusive jurisdiction of the courts located in
            Mumbai, Maharashtra, India.
          </p>
        </div>

        <div className="legal-section">
          <h2>12. Contact us</h2>
          <p>
            If you have any questions about these Terms, please reach out:
          </p>
          <p>
            <strong>Email:</strong> ganeshglive@gmail.com<br />
            <strong>Website:</strong> https://expoqr.app
          </p>
        </div>
      </main>
      <Footer />
    </>
  )
}
