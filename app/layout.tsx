import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { VT323 } from 'next/font/google'
import './globals.css'

const vt323 = VT323({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-vt323',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://notyourjewels.vercel.app'),
  title: 'NOT YOUR JEWELS',
  description: 'Plataforma innovadora para la hackathon de Stellar. Empoderando la seguridad, trazabilidad y autenticidad de tus joyas con blockchain.',
  generator: 'Hackathon Stellar 2025',
  openGraph: {
    title: 'NOT YOUR JEWELS',
    description: 'Plataforma innovadora para la hackathon de Stellar.',
    url: 'https://notyourjewels.vercel.app',
    siteName: 'NOT YOUR JEWELS',
    images: [
      {
        url: '/diamante.jpg', 
        width: 1200,
        height: 630,
      },
    ],
    locale: 'es_ES',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <style>{`
html {
  font-family: ${vt323.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
  --font-vt323: ${vt323.variable};
}
        `}</style>
      </head>
      <body className={`${vt323.variable} font-vt323`}>{children}</body>
    </html>
  )
}
