import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import SupportClient from './SupportClient'

export const metadata: Metadata = {
  title: 'Support & FAQ — Expo QR',
  description: 'Frequently asked questions and support details for the Expo QR app.',
}

export default function SupportPage() {
  return (
    <>
      <Nav />
      <SupportClient />
      <Footer />
    </>
  )
}
