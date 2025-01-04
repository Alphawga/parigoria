'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useTheme } from 'next-themes'
import { ThemeToggle } from './ui/ThemeToggle'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { theme } = useTheme()

  const menuItems = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About Us' },
    { href: '/community', label: 'Our Community' },
    // { href: '/team', label: 'Our Team' },
    // { href: '/blog', label: 'Blog' },
    { href: '/services', label: 'Services' },
    // { href: '/contact', label: 'Contact Us' },
  ]

  return (
    <header className="w-full px-4 py-3 flex items-center justify-between bg-white dark:bg-gray-900 shadow-md sticky top-0 z-50">
      <Link href="/" className="flex items-center relative h-16 w-32">
        <Image 
          src={theme === 'dark' ? "/parigoria-logo-white.png" : "/parigoria-logo.png"}
          alt="Parigoriá Logo" 
          width={200}
          height={200}
          className="object-contain"
          priority
        />
      </Link>
      
      {/* Desktop Navigation */}
      <div className="flex items-center gap-4 flex-1 justify-end">
        <nav className="hidden md:flex space-x-6 mx-8">
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-gray-600 hover:text-purple-600 dark:text-gray-300 dark:hover:text-purple-400 transition-colors text-sm font-medium"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <ThemeToggle />

        <Link
          href="http://eepurl.com/i6RKUs"
          className="hidden md:block bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition-colors"
        >
          Subscribe to Newsletter
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-gray-600 dark:text-gray-300"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white dark:bg-gray-900 shadow-lg md:hidden"
          >
            <nav className="flex flex-col p-4">
              {menuItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="py-2 text-gray-600 hover:text-purple-600 dark:text-gray-300 dark:hover:text-purple-400 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="http://eepurl.com/i6RKUs"
                className="mt-4 bg-purple-600 text-white px-4 py-2 rounded text-center hover:bg-purple-700 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Subscribe to Newsletter
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

