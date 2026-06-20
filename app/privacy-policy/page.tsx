import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy — Expo QR',
  description: 'Privacy Policy for the Expo QR Scanner & Generator app.',
}

export default function PrivacyPolicy() {
  return (
    <>
      <Nav />
      <main className="legal-page">
        <Link href="/" className="legal-back">← Back to home</Link>
        <h1>Privacy Policy</h1>
        <p className="legal-meta">Last updated: June 2026 &nbsp;·&nbsp; Effective date: June 2026</p>

        <div className="legal-section">
          <h2>1. Scope, Responsible Entity, Legal Basis &amp; Retention Period</h2>

          <h3>Privacy Policy Scope</h3>
          <p>
            This privacy policy explains the nature, purpose and scope of the collection and processing of personal data for the following barcode scanner application:
          </p>
          <p>
            <strong>Expo QR:</strong> <a href="https://play.google.com/store/apps/details?id=com.expo.qr.scanner" target="_blank" rel="noopener noreferrer">https://play.google.com/store/apps/details?id=com.expo.qr.scanner</a>
          </p>

          <h3>Name and Address of Responsible Entity</h3>
          <p>
            The responsible entity within the meaning of the General Data Protection Regulation and other national data protection laws is:
          </p>
          <p>
            <strong>Expo QR App Development Team</strong><br />
            Email: <a href="mailto:ganeshglive@gmail.com">ganeshglive@gmail.com</a><br />
          </p>

          <h3>Scope of Data Processing</h3>
          <p>
            We collect and use personal information of our users to the extent necessary to provide high-quality applications and to perform our services, including the display of product and price information related to scanned barcodes.
          </p>
          <p>
            Our services are provided free of charge (with optional premium in-app features), and our application does not display any advertisements.
          </p>

          <h3>Legal Basis</h3>
          <p>
            When processing personal data that is required to fulfill a contract with the user, point (b) of paragraph 1 of article 6 of the GDPR serves as the legal basis.
          </p>
          <p>
            If the processing is necessary to account for the legitimate interests of our development team or a third party and if these interests are not overridden by interests of the user, the legal basis is provided by point (f) of paragraph 1 of article 6 of the GDPR.
          </p>

          <h3>Retention Period</h3>
          <p>
            The personal data of the user will be deleted as soon as the underlying purpose for the collection has been fulfilled. The information on the retention period is given individually for each data processing operation.
          </p>
        </div>

        <div className="legal-section">
          <h2>2. Data Storage &amp; Processing Operations</h2>

          <h3>Local Data Storage (SQLite Database)</h3>
          <p>
            All application data, including your scan history and generated QR codes, is stored locally and securely on your device in an SQLite database. We do not collect, upload, or transmit any of this data to our systems, servers, or any third party. Your data remains entirely under your control. You can permanently delete this local data at any time by clearing the application cache/data from your device settings or by uninstalling the app.
          </p>

          <h3>Firebase Analytics</h3>
          <p>
            We use Firebase Analytics, a service provided by Google, to collect anonymous usage statistics and diagnostic info. This helps us understand how the app is used and how to improve its performance. Firebase Analytics may collect device identifiers, user interactions with the app, and general location information (country/city level), but does not collect any personally identifiable information (such as your name, email, or scanned QR code content). For more information, please see <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">https://policies.google.com/privacy</a>.
          </p>

          <h3>RevenueCat (In-App Purchases)</h3>
          <p>
            We use RevenueCat to process and manage in-app subscriptions and purchases. RevenueCat may process transactional information, in-app purchases details, device identifiers, and anonymous subscriber IDs to verify subscription status. For more information, please see <a href="https://www.revenuecat.com/privacy" target="_blank" rel="noopener noreferrer">https://www.revenuecat.com/privacy</a>.
          </p>

          <h3>Links to Websites</h3>
          <p>
            When scanning product barcodes with the EAN or UPC format our barcode scanner apps may show links to external websites which can be used to obtain product and price information related to the scanned barcodes.
          </p>
          <p>
            When following these links, the barcode number and the user's IP address and browser/device information will be transmitted to and may be stored by the respective websites.
          </p>

          <h3>Email Contact</h3>
          <p>
            Users may send us an email either directly or using forms within the apps. Personal data transmitted by email will be stored. In this context, data will not be disclosed with third parties. The data is used exclusively for processing the conversation.
          </p>
          <p>
            The data will be deleted, if the purpose of its collection has been fulfilled. This is the case when the conversation with the user has come to an end or it can be seen from the conversation that the subject has been clarified.
          </p>
        </div>
      </main>
      <Footer />
    </>
  )
}
