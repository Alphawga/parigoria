'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

export default function AboutUs() {
  return (
    <section className="w-full py-16 px-4 bg-background">
      <div className="max-w-4xl mx-auto">
        <motion.h2 
          className="text-3xl font-bold mb-6 text-center text-gray-900 dark:text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Who We Are
        </motion.h2>
        <div className="flex flex-col md:flex-row items-center gap-8">
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-lg mb-4 text-gray-700 dark:text-gray-300">
              Parigoriá is a virtual haven for mental health support, offering education and professional therapy to people of all ages. We embrace everyone—every background, every story—because mental health knows no boundaries.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              Here, we stand together as resilient warriors, breaking barriers, championing mental wellness, and fostering compassion and understanding.
            </p>
          </motion.div>
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="relative rounded-lg overflow-hidden shadow-xl hover:shadow-purple-500/20 transition-shadow duration-300">
              <Image 
                src="/plant.jpg" 
                alt="Diverse individuals supporting each other" 
                width={500} 
                height={300} 
                className="rounded-lg hover:scale-105 transition-transform duration-300" 
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

