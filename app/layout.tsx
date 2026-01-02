import type React from 'react'
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ['latin'] })
const _geistMono = Geist_Mono({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Zambian Power Initiative - Powering the Nation',
  description:
    "Innovative power production solutions addressing Zambia's energy crisis",
  icons: {
    icon: [
      {
        url: '/HDS_logo.png',
        type: 'image/png',
      },
    ],
    apple: '/HDS_logo.png',
  },
  openGraph: {
    title: 'Zambian Power Initiative - Powering the Nation',
    description:
      "Innovative power production solutions addressing Zambia's energy crisis",
    url: 'https://zpi.zm', // Update with your actual domain
    siteName: 'Zambian Power Initiative',
    images: [
      {
        url: '/apple-icon.png', // This is the image that appears when shared
        width: 1200,
        height: 630,
        alt: 'Zambian Power Initiative - Powering Zambia Forward',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zambian Power Initiative - Powering the Nation',
    description:
      "Innovative power production solutions addressing Zambia's energy crisis",
    images: ['/apple-icon.png'], // Twitter also uses this image
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
