import Link from 'next/link'

export default function Hero() {
  return (
    <section className="w-full h-[70vh] bg-gray-100 flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-4xl md:text-5xl font-bold mb-4">Spreading Love and Light Through Mental Health Support</h1>
      <p className="text-xl mb-8">Join a global community committed to mental health education, therapy, and advocacy.</p>
      <Link href="/about" className="bg-blue-500 text-white px-6 py-3 rounded-lg text-lg hover:bg-blue-600 transition-colors">
        Learn More
      </Link>
    </section>
  )
}

