'use client'

import Link from 'next/link'
import { Instagram, Twitter, Linkedin } from 'lucide-react'
import { useEffect, useState } from 'react'

export default function Footer() {
  const [currentYear, setCurrentYear] = useState('')

  useEffect(() => {
    setCurrentYear(new Date().getFullYear().toString())
  }, [])

  return (
    <footer className="w-full bg-background border-t border-gray-100 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="inline-block mb-4">
              <h3 className="text-2xl font-crimson-pro font-bold text-gray-900 dark:text-white">Parigoriá</h3>
            </Link>
            <p className="text-gray-600 dark:text-gray-300 mb-6 font-crimson-pro">
              A virtual haven for mental health support, offering education and professional therapy to people of all ages.
            </p>
            <div className="flex space-x-4">
              {[
                { href: "https://www.instagram.com/officialparigoria?igsh=NnJ2NmVobDU4ajVo", Icon: Instagram },
                { href: "https://x.com/parigoria_?s=21&t=K3Gog5cgwTs_8ksm3iV7cQ", Icon: Twitter },
                { href: "https://www.linkedin.com/company/parigoria/", Icon: Linkedin }
              ].map(({ href, Icon }) => (
                <Link 
                  key={href}
                  href={href}
                  className="text-gray-600 hover:text-purple-600 dark:text-gray-400 dark:hover:text-purple-400 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit our ${Icon.name}`}
                >
                  <Icon className="w-5 h-5" />
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-crimson-pro font-semibold mb-4 text-gray-900 dark:text-white">Quick Links</h3>
            <ul className="space-y-2">
              {['About Us', 'Our Community', 'Our Team', 'Blog', 'Services'].map((item) => (
                <li key={item}>
                  <Link 
                    href={`/${item.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-gray-600 hover:text-purple-600 dark:text-gray-400 dark:hover:text-purple-400 transition-colors font-crimson-pro"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-crimson-pro font-semibold mb-4 text-gray-900 dark:text-white">Stay Connected</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4 font-crimson-pro">
              Get tips and sincere conversations to support your mental well-being.
            </p>
            <Link 
              href="http://eepurl.com/i6RKUs"
              className="inline-block bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg transition-colors font-crimson-pro"
            >
              Subscribe to Newsletter
            </Link>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-100 dark:border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-600 dark:text-gray-400 text-sm font-crimson-pro">
              © {currentYear} Parigoriá. All rights reserved.
            </p>
            <div className="flex space-x-6">
              {['Privacy Policy', 'Terms of Service', 'Contact'].map((item) => (
                <Link
                  key={item}
                  href={`/${item.toLowerCase().replace(/\s+/g, '-')}`}
                  className="text-gray-600 hover:text-purple-600 dark:text-gray-400 dark:hover:text-purple-400 transition-colors text-sm font-crimson-pro"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

