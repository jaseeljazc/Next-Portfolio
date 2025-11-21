'use client'
import { motion } from 'framer-motion';
import {education} from '@/data/education'


const Education: React.FC = () => {
 
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.4, 0.25, 1] as const
      }
    }
  };

  return (
    <section className="min-h-screen bg-black py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
          className="mb-20"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">
            Education
          </h1>
          <div className="w-16 h-0.5 bg-violet-600"></div>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="space-y-12"
        >
          {education.map((edu, idx) => (
            <motion.article
              key={idx}
              variants={item}
              className="group relative"
            >
              <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-violet-600/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="pl-8 pb-8 border-b border-gray-800 last:border-0">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                  <div>
                    <h2 className="text-2xl font-semibold text-white mb-1">
                      {edu.degree}
                    </h2>
                    <p className="text-violet-600 font-medium">
                      {edu.institution}
                    </p>
                  </div>
                  <div className="flex flex-col sm:items-end gap-1">
                    <span className="text-sm text-gray-400">{edu.duration}</span>
                    <span className="text-sm text-gray-500">{edu.location}</span>
                  </div>
                </div>

                <ul className="space-y-2">
                  {edu.highlights.map((highlight, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ 
                        delay: 0.6 + (idx * 0.15) + (i * 0.1),
                        duration: 0.4,
                        ease: [0.25, 0.4, 0.25, 1]
                      }}
                      className="flex items-start gap-3 text-gray-400"
                    >
                      <span className="text-violet-600 mt-1.5 flex-shrink-0">•</span>
                      <span className="leading-relaxed">{highlight}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Education;