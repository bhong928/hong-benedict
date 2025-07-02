'use client';

import { motion } from 'framer-motion';
import { Layout, GitHub } from 'react-feather';

export default function Projects() {
    const projects = [
        {
            title: "RateMyCourse",
            description: "RateMyCourse is a modern, full-stack web application that allows users to browse, review, and discover golf courses across the United States. Inspired by platforms like RateMyDorm, it features user authentication with Google and passwordless email login, a responsive UI, and dynamic data pulled from Firebase Firestore. Users can view popular states and courses, and leave or read reviews — with support for user dashboards and post management.",
            tags: ["React(Vite), Tailwind CSS, Firebase(Firestore & Auth), Vercel"],
            github: "https://github.com/bhong928/rate-my-course",
            project_site: "https://rate-my-course-green.vercel.app/",
        },
        {
            title: "EHTS Wrist Worn Bias Detector",
            description: "EHTS is a full-stack web application designed to help companies monitor employee health test data like heart rate and oxygenation levels to detect potential bias. Users can register, add employees, and view detailed test results via interactive charts.",
            tags: ["React(Vite), Tailwind CSS, Firebase(Firestore & Auth)"],
            github: "https://github.com/ehtsdeveloper/BiasDetector",
            project_site: "https://ehts-project.web.app/Login",
        },
        {
            title: "Green or Not",
            description: "Green or Not is a web application designed to assess the sustainability of products sold on Amazon. It works by scraping product detail from Amazon pages and calculating a sustainability score based on eco-friendly keywords and recognized certifications. A custom tree image visually reflects the products “green” score, helping users quickly gauge the environmental impact of a product.",
            tags: ["NextJS, Tailwind CSS, Axios, Cheerios"],
            github: "https://github.com/bhong928/green-or-not",
            project_site: "https://green-or-not.vercel.app/",
        }
    ];

    // Card Animation to Fade in
    const container = {
        hidden: {},
        show: {
            transition: {
                staggerChildren: 0.2, // Delay between each card
            },
        },
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
    };

  return (
    <section className="bg-gray-400 px-4 py-10 sm:px-10 sm:py-16 md:px-20 md:py-20" id="projects">
      <div className="max-w-6xl w-full mx-auto">
        <h2 className="text-white text-3xl font-bold mb-4">Projects</h2>

        <motion.div 
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{once: true, amount: 0.3}}
        >
          {projects.map((project, index) => (
            <motion.div 
                key={index} 
                className="bg-gray-700 text-white p-6 rounded-lg shadow hover:shadow-lg transition will-change-transform"
                variants={cardVariants}
            >
                <h3 className="text-xl font-semibold mb-4">{project.title}</h3>
                <p className="text-sm text-gray-300 mb-4 break-words">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag, idx) => (
                    <span key={idx} className="bg-gray-700 text-xs rounded-full font-extralight italic">{tag}</span>
                ))}
                </div>
                
                <div className='mb-2 flex space-x-4'>
                {/* Project Website Link (only if exists) */}
                    {project.project_site && (
                        <a 
                        href={project.project_site} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-block text-sm text-white hover:underline"
                        >
                            <Layout className="hover:text-blue-300 "/>
                        </a>
                    )}

                    {/* GitHub Link (only if exists) */}
                    {project.github && (
                        <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-block text-sm text-white hover:underline"
                        >
                            <GitHub className="hover:text-purple-600"/>
                        </a>
                    )}

                </div>
                
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}