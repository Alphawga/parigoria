'use client'

import { usePathname } from 'next/navigation'
import Header from './Header'
import Footer from './Footer'

export function RootLayoutContent({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const isHomePage = pathname === '/'

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {!isHomePage && <Header />}
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  )
} 