export default function ServicesPage() {
  return (
    <section className="w-full py-16 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-6 bg-gray-50 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Mental Health Education</h3>
            <p className="text-gray-600">
              Access resources, workshops, and educational content designed to enhance your understanding of mental health.
            </p>
          </div>
          <div className="p-6 bg-gray-50 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Community Support</h3>
            <p className="text-gray-600">
              Join our supportive community of individuals on similar journeys toward mental wellness.
            </p>
          </div>
          <div className="p-6 bg-gray-50 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Professional Therapy</h3>
            <p className="text-gray-600">
              Connect with licensed therapists who can provide professional support and guidance.
            </p>
          </div>
          <div className="p-6 bg-gray-50 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Advocacy Programs</h3>
            <p className="text-gray-600">
              Participate in initiatives aimed at breaking stigmas and promoting mental health awareness.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
} 