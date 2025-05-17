import './globals.scss'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import Image from 'next/image'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'BuildMyPC - Custom PC Building Solutions',
  description: 'Professional custom PC building service for gaming, work, and creative needs',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="site-header">
          <div className="container">
            <Link href="/" className="logo">
              <Image
                src="/logo.svg"
                alt="BuildMyPC Logo"
                width={150}
                height={50}
                priority
              />
            </Link>

            <nav className="main-nav">
              <Link href="/">Home</Link>
              <Link href="/builds">Our Builds</Link>
              <Link href="/services">Services</Link>
              <Link href="/about">About Us</Link>
              <Link href="/contact" className="cta-button">Get Started</Link>
            </nav>
          </div>
        </header>

        {children}

        <footer className="site-footer">
          <div className="container">
            <div className="footer-content">
              <div className="footer-logo">
                <Image
                  src="/logo.svg"
                  alt="BuildMyPC Logo"
                  width={120}
                  height={40}
                />
                <p>Custom PC building solutions for every need</p>
              </div>
              <div className="footer-links">
                <div className="link-column">
                  <h4>Services</h4>
                  <Link href="/builds/gaming">Gaming PCs</Link>
                  <Link href="/builds/workstation">Workstations</Link>
                  <Link href="/services/repair">Repairs & Upgrades</Link>
                </div>
                <div className="link-column">
                  <h4>Company</h4>
                  <Link href="/about">About Us</Link>
                  <Link href="/blog">Blog</Link>
                  <Link href="/contact">Contact</Link>
                </div>
                <div className="link-column">
                  <h4>Support</h4>
                  <Link href="/faq">FAQs</Link>
                  <Link href="/warranty">Warranty</Link>
                  <Link href="/shipping">Shipping</Link>
                </div>
              </div>
            </div>
            <div className="footer-bottom">
              <p>© {new Date().getFullYear()} BuildMyPC. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}