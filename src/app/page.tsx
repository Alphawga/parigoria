import Header from '@/components/Header'
import Hero from '@/components/Hero'
import AboutUs from '@/components/AboutUs'
import OurCommunity from '@/components/OurCommunity'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Header />
      <Hero />
      <AboutUs />
      <OurCommunity />
      <Footer />
    </main>
  )
}

