'use client'; // Needed if you're using Next.js App Router

import { motion } from 'framer-motion';
import { Instagram, Linkedin, GitHub } from 'react-feather';

export default function AboutSection(){

    return(
        <motion.section
            id="about"
            className="bg-white px-6 py-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
        >
            <div className="flex flex-col md:flex-row justify-between gap-10 max-w-7xl mx-auto items-center">
                {/* Personal Info on the left */}
                <div className="flex-1 space-y-4">
                    {/* Info */}
                    <div className="space-y-4">

                        <div className="flex justify-between border-b border-gray-300 pb-2">
                            <span className="text-black">Name:</span>
                            <span className="text-gray-500">Benedict Hong</span>
                        </div>

                        <div className="flex justify-between border-b border-gray-300 pb-2">
                            <span className="text-black">Age:</span>
                            <span className="text-gray-500">26</span>
                        </div>

                        <div className="flex justify-between border-b border-gray-300 pb-2">
                            <span className="text-black">Location:</span>
                            <span className="text-gray-500">Dallas, Texas</span>
                        </div>

                        <div className="flex justify-between border-b border-gray-300 pb-2">
                            <span className="text-black">School:</span>
                            <span className="text-gray-500">University of Michigan</span>
                        </div>

                    </div>

                    {/* Socials */}
                    <div className="flex space-x-6 text-gray-700 text-2xl">
                        <a href="https://www.instagram.com/_benhong/" target="_blank" rel="noopener noreferrer">
                            <Instagram className="hover:text-blue-300 " />
                        </a>
                        <a href="https://www.linkedin.com/in/benedict-hong-5396091a1/" target="_blank" rel="noopener noreferrer">
                            <Linkedin className="hover:text-blue-600" />
                        </a>
                        <a href="https://github.com/bhong928" target="_blank" rel="noopener noreferrer">
                            <GitHub className="hover:text-purple-600" />
                        </a>
                    </div>
                </div>

                {/* Right: Bio + Resume */}
                <div className="flex-1 space-y-6">
                <div className="text-gray-500">
                    <h2 className="text-xl font-semibold mb-2">A little bit about me...</h2>
                    <p className="mb-4">
                    I am a recent Software Engineering graduate from the University of Michigan with a passion for building clean, user-friendly web applications. I enjoy solving real world problems through code and have experience with technologies like React, Next.js, Tailwind CSS, Python, and Firebase. 
                    </p>
                    
                    <p className="mb-4">
                    Previously, I worked as an Applications Engineer Intern at Veoneer, where I contributed to the development and testing of airbag modules and sensors for major OEMs. That expereience taught me the importance of percision, collaboration, and building systems that prioritize safety and reliability.
                    </p>

                    <p className="mb-4">
                    Outside of coding, I am a Musician, Mix/Mastering Engineer, and creative thinker who enjoys collaborating with others to bring ideas to life! 
                    </p>
                </div>

                <a 
                    href='/BenedictHong_Resume.pdf'
                    download
                    className="border text-gray-500 px-6 py-3 hover:bg-blue-200 transition cursor-pointer"
                >
                    Download Resume
                </a>
                </div>
            </div>
        </motion.section>
    )
}