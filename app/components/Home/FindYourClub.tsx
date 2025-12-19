"use client"

import { useState, useEffect } from 'react'
import { ChevronRightIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
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

const FindYourClub = () => {
  const clubs = [
    { name: 'Nottingham', image: '/locations/itspadel-mock-location-nottingham.webp' },
    { name: 'Birmingham', image: '/locations/itspadel-mock-location-birmingham.webp' },
    { name: 'Lightwater', image: '/locations/itspadel-mock-location-lightwater.webp' },
    { name: 'North Leeds', image: '/locations/itspadel-mock-location-lightwater.webp' },
    { name: 'Darlington', image: '/locations/itspadel-mock-location-nottingham.webp' }
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [slideWidth, setSlideWidth] = useState(33.33)

  useEffect(() => {
    const updateWidth = () => {
      setSlideWidth(window.innerWidth < 768 ? 100 : 33.33)
    }
    updateWidth()
    window.addEventListener('resize', updateWidth)
    return () => window.removeEventListener('resize', updateWidth)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % clubs.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [clubs.length])

  const handleClubClick = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  return (
    <section className="py-20 px-8 md:px-16 lg:px-32">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.h2
          className="font-bison text-4xl md:text-5xl text-center mb-12"
          variants={itemVariants}
        >
          Find your club
        </motion.h2>
        <motion.div
          className="relative overflow-hidden"
          variants={itemVariants}
        >
          <div
            className="flex"
            style={{ transform: `translateX(-${currentIndex * slideWidth}%)`, transition: 'transform 0.8s ease-in-out' }}
          >
            {[...clubs, ...clubs.slice(0, 3)].map((club, index) => (
              <div key={`${club.name}-${index}`} className="w-full md:w-1/3 flex-shrink-0 px-2">
                <div className="relative rounded-2xl overflow-hidden cursor-pointer h-80 md:h-96" onClick={handleClubClick}>
                  <Image src={club.image} alt={club.name} width={400} height={450} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 text-white">
                    <h3 className="font-bison text-2xl md:text-3xl mb-1">{club.name}</h3>
                    <p className="flex items-center font-inter text-base text-white">
                      View Club <ChevronRightIcon className="w-4 h-4 md:w-5 md:h-5 ml-2" />
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <div
            className="bg-white p-8 rounded-lg max-w-md mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="font-bison text-2xl mb-4">Coming Soon</h3>
            <p className="font-inter text-gray-600 mb-6">This club is coming soon. Stay tuned for updates!</p>
            <button
              onClick={closeModal}
              className="bg-[#009FF3] text-white px-6 py-2 font-inter font-medium hover:bg-[#0080cc] transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  )
}

export default FindYourClub