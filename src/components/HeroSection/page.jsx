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
      className="md:bg-[#F1F0EA] relative w-full overflow-hidden h-auto md:h-[60vh]
                text-white md:text-[#2c2c2c]
                bg-cover bg-center bg-no-repeat 
                bg-[url('/images/me.jpg')] md:bg-none filter grayscale md:grayscale-0 md:filter-none"
      >
      <div className='w-full h-full flex flex-col md:flex-row md:items-center md:justify-between md:p-4'>
        <div className='flex flex-col md:w-1/2'>
          {/* NAME */}
          <div className='text-center'>
            <motion.h1 
              className='text-[10vw] font-black uppercase md:text-[5vw]'
              {...fadeRight}
            >
              BENEDICT
            </motion.h1>
            <motion.h1
              className="text-[10vw] md:text-[5vw] font-black uppercase"
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
            <p className='text-[2vw] md:text-[1vw] uppercase tracking-widest'>
              Software Developer / <br /> Creative Technologist
            </p>
            <a
              href="#contact"
              className="mt-4 mb-4 inline-block border border-white md:border-black text-[2vw] md:text-[1vw] px-2 py-1 tracking-widest uppercase text-white md:text-[#2c2c2c] hover:bg-black hover:text-white transition rounded-sm"
            >
              Get in Touch
            </a>
          </motion.div>
        </div>

        {/* Image */}
        <motion.div 
          className='relative hidden md:block w-full md:w-[50vw] md:h-[50vh] md:aspect-[4/5] border rounded-sm'
          style={{y}}
          {...fadeIn}
        >
          <Image
            src="/images/me.jpg"
            alt="Picture of Benedict"
            fill
            priority
            className="grayscale contrast-110 object-cover  "
          />
        </motion.div>  
      </div>
    </section>
  );
}