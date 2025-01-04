import Image from 'next/image'

export default function TeamPage() {
  return (
    <section className="w-full py-16 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center">Our Team</h2>
        <p className="text-lg mb-8 text-center">
          Meet the dedicated professionals working to make mental health support accessible to all.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Team member cards will go here */}
          <div className="text-center">
            <div className="relative w-48 h-48 mx-auto mb-4">
              <Image 
                src="/placeholder.svg" 
                alt="Team Member"
                fill
                className="rounded-full object-cover"
              />
            </div>
            <h3 className="text-xl font-semibold">Team Member Name</h3>
            <p className="text-gray-600">Position</p>
          </div>
        </div>
      </div>
    </section>
  )
} 