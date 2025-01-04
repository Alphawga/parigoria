import Link from 'next/link'
import { Instagram, Twitter, Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="w-full bg-gray-800 text-white py-8 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/community">Our Community</Link></li>
            <li><Link href="/team">Our Team</Link></li>
            <li><Link href="/blog">Blog</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/contact">Contact Us</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Support</h3>
          <ul className="space-y-2">
            <li><Link href="/faq">FAQs</Link></li>
            <li><Link href="/resources">Resources</Link></li>
            <li><Link href="/privacy">Privacy Policy</Link></li>
            <li><Link href="/terms">Terms of Service</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <p>Email: help@parigoria.com</p>
          <p>Address: Lagos, Nigeria</p>
          <div className="mt-4 flex space-x-4">
            <Link href="https://www.instagram.com/officialparigoria?igsh=NnJ2NmVobDU4ajVo" aria-label="Instagram">
              <Instagram />
            </Link>
            <Link href="https://x.com/parigoria_?s=21&t=K3Gog5cgwTs_8ksm3iV7cQ" aria-label="Twitter">
              <Twitter />
            </Link>
            <Link href="https://www.linkedin.com/company/parigoria/" aria-label="LinkedIn">
              <Linkedin />
            </Link>
          </div>
        </div>
      </div>
      <div className="mt-8 text-center">
        <h3 className="text-lg font-semibold mb-4">Sign Up to Our Newsletter</h3>
        <p className="mb-4">Get tips, tools, and sincere conversations to support your mental well-being in your inbox.</p>
        <Link href="http://eepurl.com/i6RKUs" className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition-colors">
          Subscribe
        </Link>
        <p className="mt-4 text-sm">
          By subscribing to our email newsletter, you agree to and acknowledge that you have read our Privacy Policy and Terms of Service.
        </p>
      </div>
      <div className="mt-8 text-center text-sm">
        © Parigoriá 2024
      </div>
    </footer>
  )
}

