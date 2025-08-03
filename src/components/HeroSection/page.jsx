'use client';

import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function HeroSection() {
  const ref = useRef(null);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 600], [0, 250]); // Adjust values as needed
  const fadeRight = {
    initial: { opacity: 0, x:-50 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 1 },
  }
  const fadeLeft = {
    initial: { opacity: 0, x: 50 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 1 },
    
  }
  const fadeIn = {
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 1, ease: 'easeOut' }
  }

  return (
    <section
      ref={ref}
      className="relative w-full overflow-hidden text-white md:text-[#2c2c2c] md:bg-[#F1F0EA] min-h-[auto] md:min-h-[60vh] md:px-20 md:py-20 "
    >
      {/* BG Image */}
      <motion.div
        style = {{y}}
        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-[url('/images/me.jpg')] filter grayscale md:hidden z-0"
      />

      <div className="relative w-full flex flex-col items-center justify-center md:flex-row md:items-center md:justify-center md:p-4 min-h-[auto] md:min-h-[60vh]">
        <div className='flex flex-col md:w-[50vw] md:h-[50vh] md:aspect-[4/5] justify-center'>
          {/* NAME */}
          <div className='text-center'>
            <motion.h1 
              className='text-[15vw] font-black uppercase md:text-7xl'
              {...fadeRight}
            >
              BENEDICT
            </motion.h1>
            <motion.h1
              className="text-[15vw] md:text-7xl font-black uppercase"
              {...fadeLeft}
            >
              HONG
            </motion.h1>
          </div>

          {/* Details */}
          <motion.div 
            className='px-4 mt-8 text-center'
            {...fadeRight}
          >
            <p className='text-[4vw] md:text-3xl uppercase tracking-widest'>
              Software Developer / <br /> Creative Technologist
            </p>
            <a
              href="#contact"
              className="mt-4 mb-4 inline-block border border-white md:border-black text-[4vw] md:text-3xl px-2 py-1 tracking-widest uppercase text-white md:text-[#2c2c2c] hover:bg-black hover:text-white transition rounded-sm"
            >
              Get in Touch
            </a>
          </motion.div>
        </div>
        <div>
          {/* Image */}
          <motion.div 
            className='relative hidden md:flex m:items-center md:justify-center md:w-[50vw] md:h-[50vh] border rounded-sm'
            {...fadeIn}
          >
            <Image
              src="/images/me.jpg"
              alt="Picture of Benedict"
              fill
              priority
              className="grayscale contrast-110 object-cover"
              style={{y}}
            />
          </motion.div>  
        </div>
      </div>
    </section>
  );
}