'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useState, useEffect, FormEvent } from 'react'
import { Menu, X, Send } from 'lucide-react'
import { useTheme } from 'next-themes'
import { ThemeToggle } from './ui/ThemeToggle'

export default function Hero() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const { theme } = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      const formUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSe10KMGKDczWoI7En_BECLpzveoCV6unuVVF0OFtK9IvHwlcg/formResponse'
      const formData = new FormData()
      formData.append('entry.1481393907', email)

      await fetch(formUrl, {
        method: 'POST',
        body: formData,
        mode: 'no-cors'
      })

      setSubmitStatus('success')
      setEmail('')
    } catch (error) {
      setSubmitStatus('error')
      console.error('Error submitting form:', error)
    } finally {
      setIsSubmitting(false)
      setTimeout(() => setSubmitStatus('idle'), 3000)
    }
  }

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
    <section className="relative w-full h-screen">
      {/* Transparent Header */}
      <header 
        className={`w-full px-4 py-3 flex items-center justify-between fixed top-0 z-50 transition-all duration-300 
          ${isScrolled ? 'bg-background/80 backdrop-blur-md shadow-md' : ''}`}
      >
        <Link href="/" className="flex items-center relative h-16 w-32">
          <Image 
            src={isScrolled ? (theme === 'dark' ? "/parigoria-logo-white.png" : "/parigoria-logo.png")
              : "/parigoria-logo-white.png"}
            alt="Parigoriá Logo" 
            width={200}
            height={200}
            className="object-contain"
            priority
          />
        </Link>
        
        <div className="flex items-center gap-4 flex-1 justify-end">
          <nav className="hidden md:flex space-x-6 mx-8">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`font-crimson-pro text-base hover:text-purple-400 transition-colors
                  ${isScrolled ? 'text-gray-600 dark:text-gray-300' : 'text-white'}`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <ThemeToggle />

          <Link
            href="http://eepurl.com/i6RKUs"
            className="hidden md:block bg-purple-600/80 hover:bg-purple-700 text-white px-4 py-2 rounded backdrop-blur-sm transition-colors"
          >
            Sign Up!
          </Link>

          <button
            className={`md:hidden p-2 ${isScrolled ? 'text-gray-600 dark:text-gray-300' : 'text-white'}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-background/80 backdrop-blur-md shadow-lg md:hidden">
            <nav className="flex flex-col p-4">
              {menuItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="py-2 text-gray-600 hover:text-purple-600 dark:text-gray-300 dark:hover:text-purple-400 transition-colors font-crimson-pro"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="http://eepurl.com/i6RKUs"
                className="mt-4 bg-purple-600/80 text-white px-4 py-2 rounded text-center hover:bg-purple-700 transition-colors backdrop-blur-sm"
                onClick={() => setIsMenuOpen(false)}
              >
                Sign Up!
              </Link>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Content */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/healing-video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
        <motion.h1 
          className="font-crimson-pro text-5xl md:text-6xl font-bold mb-6 text-white leading-tight max-w-4xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Spreading Love and Light Through Mental Health Support
        </motion.h1>
        <motion.p 
          className="text-xl md:text-2xl mb-8 text-gray-200 font-lora"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Join our community and receive weekly insights on mental health and well-being.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="w-full max-w-md"
        >
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="w-full px-4 py-3 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 font-crimson-pro"
              />
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-6 py-3 bg-purple-600/80 hover:bg-purple-700 text-white rounded-lg backdrop-blur-sm transition-all duration-200 flex items-center justify-center gap-2 font-crimson-pro disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                'Subscribing...'
              ) : (
                <>
                  Subscribe <Send className="w-4 h-4" />
                </>
              )}
            </button>
          </form>
          
          {submitStatus === 'success' && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-4 text-green-400 font-crimson-pro"
            >
              Thank you for subscribing!
            </motion.p>
          )}
          
          {submitStatus === 'error' && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-4 text-red-400 font-crimson-pro"
            >
              Oops! Something went wrong. Please try again later.
            </motion.p>
          )}
        </motion.div>
      </div>
    </section>
  )
}

