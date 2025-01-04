import Image from 'next/image'

export default function AboutUs() {
  return (
    <section className="w-full py-16 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center">Who We Are</h2>
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2">
            <p className="text-lg mb-4">
              Parigoriá is a virtual haven for mental health support, offering education and professional therapy to people of all ages. We embrace everyone—every background, every story—because mental health knows no boundaries.
            </p>
            <p className="text-lg">
              Here, we stand together as resilient warriors, breaking barriers, championing mental wellness, and fostering compassion and understanding.
            </p>
          </div>
          <div className="md:w-1/2">
            <Image src="/placeholder.svg" alt="Diverse individuals supporting each other" width={500} height={300} className="rounded-lg" />
          </div>
        </div>
      </div>
    </section>
  )
}

