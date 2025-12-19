"use client"

import { useState } from 'react'
import { ChevronLeftIcon, ChevronRightIcon, StarIcon } from '@heroicons/react/24/solid'
import reviewsData from '../../languages/padelreviews.json'
import { motion } from 'framer-motion'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
}

const Reviews = () => {

  const [currentIndex, setCurrentIndex] = useState(0)

  const nextReview = () => {
    setCurrentIndex((prev) => (prev + 1) % reviewsData.length)
  }

  const prevReview = () => {
    setCurrentIndex((prev) => (prev - 1 + reviewsData.length) % reviewsData.length)
  }

  const currentReview = reviewsData[currentIndex]

  return (
    <section className="py-20 px-8 md:px-16 lg:px-32">
      <motion.div
        className="max-w-7xl mx-auto space-y-0 relative"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Left Chevron */}
        <motion.div
          onClick={prevReview}
          className="absolute left-8 top-1/2 -translate-y-1/2 z-10 transition-colors"
          variants={itemVariants}
        >
          <ChevronLeftIcon className="w-6 h-6 text-white" />
        </motion.div>

        {/* Review Container */}
        <motion.div
          key={currentIndex}
          className="bg-black rounded-[30px] p-16 md:py-24 text-white text-center relative overflow-hidden min-h-[400px] flex flex-col justify-center"
          variants={itemVariants}
        >
          {/* Stars */}
          <div className="flex justify-center gap-x-1 mb-6">
            {[...Array(5)].map((_, i) => (
              <StarIcon key={i} className="size-9 text-white" />
            ))}
          </div>

          {/* Heading */}
          <h3 className="font-bison text-4xl mb-6 max-w-[450px] mx-auto leading-tight">{currentReview.heading}</h3>

          {/* Message */}
          <p className="font-inter text-white text-base md:text-xl mb-10 max-w-3xl mx-auto">{currentReview.message}</p>

          {/* Name */}
          <p className="font-inter text-base md:text-xl font-medium">{currentReview.name}</p>
        </motion.div>

        {/* Right Chevron */}
        <motion.div
          onClick={nextReview}
          className="absolute right-8 top-1/2 -translate-y-1/2 z-10 transition-colors"
          variants={itemVariants}
        >
          <ChevronRightIcon className="w-6 h-6 text-white" />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Reviews