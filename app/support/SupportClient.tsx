'use client'

import { useState } from 'react'
import Link from 'next/link'

interface FAQItem {
  question: string;
  answer: string;
  category: 'general' | 'scanner' | 'generator' | 'premium';
}

const faqs: FAQItem[] = [
  {
    question: 'Is Expo QR free to use?',
    answer: 'Yes, Expo QR is completely free to scan and generate basic QR codes. We offer an optional, lifetime/subscription premium upgrade to unlock advanced custom styling, high-resolution SVG exporting, and infinite scan history backup.',
    category: 'general'
  },
  {
    question: 'Does the app collect or share my scan data?',
    answer: 'No, privacy is our top priority. All your scan history and generated QR codes are stored locally on your device in a secure SQLite database. We do not upload or share your scans with any external servers.',
    category: 'general'
  },
  {
    question: 'Can I use the app offline?',
    answer: 'Yes! The core scanning and generation logic works 100% offline. You only need internet connectivity for external web lookups (such as searching a barcode online) or for verifying premium purchases.',
    category: 'general'
  },
  {
    question: 'How do I export my custom QR codes?',
    answer: 'Once you generate a QR code, tap the export icon to save it directly to your device\'s gallery or share it to other apps. Premium users can also export in vector SVG format for high-quality printing.',
    category: 'generator'
  },
  {
    question: 'How do I restore my premium purchase?',
    answer: 'If you reinstalled the app or switched devices, you can tap "Restore Purchases" on the premium subscription screen. Since we process payments via RevenueCat, your purchase will automatically sync if you are logged into the same Google Play or App Store account.',
    category: 'premium'
  },
  {
    question: 'I\'m having trouble scanning a QR code. What should I do?',
    answer: 'Ensure you have adequate lighting and your camera lens is clean. Hold the camera steady about 6-12 inches away. If it\'s a very small QR code, you can use the zoom slider or toggle the flashlight using the inline camera controls.',
    category: 'scanner'
  }
];

const categories = [
  { id: 'all', label: 'All Questions' },
  { id: 'general', label: 'General' },
  { id: 'scanner', label: 'Scanning' },
  { id: 'generator', label: 'Generation' },
  { id: 'premium', label: 'Premium' },
] as const;

export default function SupportClient() {
  const [activeCategory, setActiveCategory] = useState<string>('all')
  const [expandedItems, setExpandedItems] = useState<Record<number, boolean>>({})

  const toggleExpand = (index: number) => {
    setExpandedItems(prev => ({
      ...prev,
      [index]: !prev[index]
    }))
  }

  const filteredFaqs = faqs.filter(
    faq => activeCategory === 'all' || faq.category === activeCategory
  )

  return (
    <main className="support-page">
      <Link href="/" className="legal-back">← Back to home</Link>
      
      <div className="support-header">
        <h1>Support &amp; FAQ</h1>
        <p>Have questions about Expo QR? Find answers here or contact our support team directly.</p>
      </div>

      <div className="faq-filters">
        {categories.map(cat => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`faq-filter-btn ${activeCategory === cat.id ? 'active' : ''}`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      <div className="faq-list">
        {filteredFaqs.map((faq, idx) => {
          // Use absolute index in the original list for state tracking
          const originalIndex = faqs.findIndex(f => f.question === faq.question)
          const isExpanded = !!expandedItems[originalIndex]

          return (
            <div
              key={originalIndex}
              className={`faq-item ${isExpanded ? 'expanded' : ''}`}
            >
              <button
                className="faq-question-btn"
                onClick={() => toggleExpand(originalIndex)}
                aria-expanded={isExpanded}
              >
                <span>{faq.question}</span>
                <svg
                  className="faq-icon-chevron"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div
                className="faq-answer"
                style={{
                  maxHeight: isExpanded ? '250px' : '0px',
                  paddingBottom: isExpanded ? '1.5rem' : '0px',
                }}
              >
                <p>{faq.answer}</p>
              </div>
            </div>
          )
        })}
      </div>

      <div className="contact-card">
        <h2>Still need help?</h2>
        <p>
          Can&apos;t find what you are looking for? Email us at{' '}
          <a href="mailto:ganeshglive@gmail.com?subject=Expo%20QR%20Support%20Request" style={{ color: 'var(--accent-light)', textDecoration: 'underline' }}>
            ganeshglive@gmail.com
          </a>{' '}
          and we will get back to you as soon as possible.
        </p>
        <a href="mailto:ganeshglive@gmail.com?subject=Expo%20QR%20Support%20Request" className="contact-btn">
          <svg
            width="18"
            height="18"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            style={{ marginRight: '6px', display: 'inline-block', verticalAlign: 'middle' }}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          <span style={{ verticalAlign: 'middle' }}>Contact Support</span>
        </a>
      </div>
    </main>
  )
}
