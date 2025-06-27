'use client';

import { motion } from 'framer-motion';

export default function Projects() {
    const projects = [
        {
            title: "EHTS Wrist Worn Bias Detector",
            description: "Description of what my project does",
            tags: ["React, Firebase"],
        },
        {
            title: "Another Project",
            description: "Description",
            tags: ["Tech"],
        }
    ];

    // Card Animation to Fade in
    const container = {
        hidden: {},
        show: {
            transition: {
                staggerChildren: 0.3, // Delay between each card
            },
        },
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 30 },
        show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
    };

  return (
    <section className="bg-gray-400 px-4 py-10 sm:px-10 sm:py-16 md:px-20 md:py-20" id="projects">
      <div className="max-w-6xl">
        <h2 className="text-white text-3xl font-bold mb-4">Projects</h2>
        <p className="text-sm text-white mb-10">Click on any project to learn more</p>

        <motion.div 
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{amount: 0.8}}
        >
          {projects.map((project, index) => (
            <motion.div 
                key={index} 
                className="bg-gray-700 text-white p-6 rounded-lg shadow hover:shadow-lg transition"
                variants={cardVariants}
            >
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-sm text-gray-300 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, idx) => (
                  <span key={idx} className="bg-gray-700 text-xs rounded-full font-extralight italic">{tag}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}