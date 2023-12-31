import "../styles/globals.css"
import { Inter } from 'next/font/google'
import Navbars from '../components/Navbars'
import Contactbar from '@/components/Contactbar'
import Script from "next/script"
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Pharmacad - Best Coaching Class for Pharmacy in Mumbai',
  description: 'India’s Best Coaching Class for M. Pharmacy, MBA entrance exams & Abroad Studies for Pharmacy students.',
  charset: 'utf-8',
  viewport: 'width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=6,user-scalable=yes',
  robots: 'all',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-P8WK1P9N3N" />
      <Script
        id='google-analytics'
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-P8WK1P9N3N', {
            page_path: window.location.pathname,
          });
        `,
        }}
      />
      <body className={inter.className}>
        <Contactbar />
        <Navbars />
        {children}

      </body>

    </html>
  )
}
