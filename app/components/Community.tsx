"use client"

import Image from 'next/image'
import communityData from '../../languages/padelcommunity.json'
import { Hash, Instagram, Youtube, Twitch } from 'lucide-react'
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

export default function Community() {
  return (
    <section className="py-24 px-8 md:px-16 lg:px-32 overflow-visible">
      <motion.div
        className="max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >

        {/* Heading */}
        <motion.div
          className="w-full mx-auto grid place-items-center text-center mb-16"
          variants={itemVariants}
        >
          <h2 className="font-bison max-w-[500px] text-4xl md:text-6xl leading-tight">
            {communityData.headline}
          </h2>
        </motion.div>

        {/* Cards */}
        <motion.div
          className="relative w-full h-[40rem] mx-auto flex justify-center"
          variants={itemVariants}
        >
          <div
            className="absolute w-[22rem] h-[28rem] rounded-[2rem] overflow-hidden shadow-lg"
            style={{
              transform: 'translate(-20rem, 7.3rem) rotate(-28deg) scale(0.7756)',
              zIndex: 1,
            }}
          >
            <Image
              src={communityData.images[0].image}
              alt={communityData.images[0].alt}
              width={300}
              height={500}
              className="w-full h-full object-cover"
            />
          </div>
          <div
            className="absolute w-[22rem] h-[28rem] rounded-[2rem] overflow-hidden shadow-lg"
            style={{
              transform: 'translate(-11rem, 4rem) rotate(-14deg) scale(0.8498)',
              zIndex: 2,
            }}
          >
            <Image
              src={communityData.images[1].image}
              alt={communityData.images[1].alt}
              width={300}
              height={500}
              className="w-full h-full object-cover"
            />
          </div>
          <div
            className="absolute w-[22rem] h-[28rem] rounded-[2rem] overflow-hidden shadow-lg"
            style={{
              transform: 'translate(0rem, 0rem) scale(0.98)',
              zIndex: 20,
            }}
          >
            <Image
              src={communityData.images[2].image}
              alt={communityData.images[2].alt}
              width={300}
              height={500}
              className="w-full h-full object-cover"
            />
          </div>
          <div
            className="absolute w-[22rem] h-[28rem] rounded-[2rem] overflow-hidden shadow-lg"
            style={{
              transform: 'translate(20rem, 7.3rem) rotate(28deg) scale(0.7756)',
              zIndex: 1,
            }}
          >
            <Image
              src={communityData.images[3].image}
              alt={communityData.images[3].alt}
              width={300}
              height={500}
              className="w-full h-full object-cover"
            />
          </div>
          <div
            className="absolute w-[22rem] h-[28rem] rounded-[2rem] overflow-hidden shadow-lg"
            style={{
              transform: 'translate(11rem, 4rem) rotate(14deg) scale(0.8498)',
              zIndex: 2,
            }}
          >
            <Image
              src={communityData.images[5].image}
              alt={communityData.images[5].alt}
              width={300}
              height={500}
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        {/* Intro */}
        <motion.p
          className="text-center mt-0 mb-0 font-inter text-base"
          variants={itemVariants}
        >
          Follow us on social media
        </motion.p>

        {/* Links */}
        <motion.div
          className="flex justify-center gap-8"
          variants={itemVariants}
        >
          {[
            { label: 'tiktok', href: 'https://www.tiktok.com/@padel', icon: Hash },
            { label: 'instagram', href: 'https://www.instagram.com/padel', icon: Instagram },
            { label: 'youtube', href: 'https://www.youtube.com/padel', icon: Youtube },
            { label: 'twitch', href: 'https://www.twitch.tv/padel', icon: Twitch },
          ].map(link => {
            const Icon = link.icon
            return (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-[#009FF3] transition-colors"
              >
                <Icon className="w-6 h-6" />
              </a>
            )
          })}
        </motion.div>

      </motion.div>
    </section>
  )
}