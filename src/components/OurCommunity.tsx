'use client'

import { motion } from 'framer-motion'

export default function OurCommunity() {
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
          Our Community
        </motion.h2>
        <motion.p 
          className="text-lg mb-6 text-gray-700 dark:text-gray-300"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Mental health is just as important as physical health. At Parigoriá, we&apos;re building a global network committed to spreading love and light. We are:
        </motion.p>
        <motion.ul 
          className="list-disc pl-6 mb-6 text-lg text-gray-700 dark:text-gray-300 space-y-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <li className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">A tribe of learners embracing imperfections.</li>
          <li className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">A village of healers offering therapy and education.</li>
          <li className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">Butterflies learning to thrive in a world of challenges.</li>
        </motion.ul>
        <motion.p 
          className="text-lg text-gray-700 dark:text-gray-300"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Together, we empower people to become the best versions of themselves.
        </motion.p>
        <motion.div 
          className="mt-8 text-sm text-gray-500 dark:text-gray-400 p-4 border border-purple-200 dark:border-purple-800 rounded-lg bg-purple-50 dark:bg-purple-900/20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <p>
            Disclaimer: Parigoriá is a support community and does not provide or prescribe medications, nor should our services be considered a substitute for professional medical advice or treatment. For medical concerns, please consult a licensed healthcare provider.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
  
  