import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  return (
    <header className="w-full px-4 py-2 flex items-center justify-between bg-white shadow-md">
      <Link href="/" className="flex items-center">
        <Image src="/placeholder.svg" alt="Parigoriá Logo" width={50} height={50} />
      </Link>
      <nav className="hidden md:flex space-x-4">
        <Link href="/" className="text-gray-600 hover:text-gray-900">Home</Link>
        <Link href="/about" className="text-gray-600 hover:text-gray-900">About Us</Link>
        <Link href="/community" className="text-gray-600 hover:text-gray-900">Our Community</Link>
        <Link href="/team" className="text-gray-600 hover:text-gray-900">Our Team</Link>
        <Link href="/blog" className="text-gray-600 hover:text-gray-900">Blog</Link>
        <Link href="/services" className="text-gray-600 hover:text-gray-900">Services</Link>
        <Link href="/contact" className="text-gray-600 hover:text-gray-900">Contact Us</Link>
      </nav>
      <Link href="http://eepurl.com/i6RKUs" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">
        Sign Up!
      </Link>
    </header>
  )
}

