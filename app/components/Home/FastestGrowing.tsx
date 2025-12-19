"use client"

import Image from 'next/image'
import Link from 'next/link'
import homeData from '../../../languages/padelhome.json'
import { motion } from 'framer-motion'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
}

const FastestGrowing = () => {
  return (
    <section className="py-20 px-8 md:px-16 lg:px-32">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 h-full items-start justify-between"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={itemVariants}>
            <Image
              src={homeData.fastestGrowing.image}
              alt="Padel court"
              width={450}
              height={450}
              className="w-full h-[450px] object-cover rounded-3xl"
            />
          </motion.div>

          <motion.div variants={itemVariants}>
            <h2 className="font-bison text-4xl md:text-5xl mb-2">
              {homeData.fastestGrowing.headline}
            </h2>
            <p className="font-inter text-base text-black/50 mb-8">
              {homeData.fastestGrowing.paragraph}
            </p>

            <div className="flex flex-end gap-4">
              <Link
                href={homeData.fastestGrowing.cta1Link}
                className="bg-[#009FF3] text-white px-6 py-3 font-inter font-medium hover:bg-[#0080cc] transition-colors uppercase"
              >
                {homeData.fastestGrowing.cta1Text}
              </Link>
              <Link
                href={homeData.fastestGrowing.cta2Link}
                className="bg-white text-black px-6 py-3 font-inter font-medium border border-gray-300 hover:bg-gray-50 transition-colors uppercase"
              >
                {homeData.fastestGrowing.cta2Text}
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default FastestGrowing