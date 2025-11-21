import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function About() {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0.85]);
  const scale = useTransform(scrollYProgress, [0, 0.3], [1, 0.98]);

  const techStack = ['MongoDB', 'Express.js', 'React', 'Node.js'];

  // Optimized animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.4, 0.25, 1] as const
      }
    }
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: (delay = 0) => ({
      opacity: 1,
      transition: {
        duration: 0.4,
        delay,
        ease: 'easeOut' as const
      }
    })
  };

  return (
    <div className="min-h-screen bg-linear-to-b from-black to-violet-900/40 px-4 py-16">
      <motion.div 
        className="max-w-3xl mx-auto"
        style={{ opacity, scale }}
      >
        
        <motion.div 
          className="mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px", amount: 0.3 }}
          variants={fadeInUp}
        >
    <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
          className="mb-20"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">
           About Me
          </h1>
          <div className="w-16 h-0.5 bg-violet-600"></div>
        </motion.div>          
          <div className="text-gray-300 space-y-4 text-lg leading-relaxed">
            <p>
              Hey! I'm a MERN stack developer who loves building web applications from the ground up. 
              Currently working as an intern at Zoople Technologies in Kochi, where I'm getting hands-on experience 
              building scalable web applications.
            </p>
            
            <p>
              I recently graduated from ISS Arts and Science College in Perinthalmanna, and I'm based 
              in Malappuram. Right now, I'm focused on sharpening my skills and working on projects 
              that actually solve problems.
            </p>
          </div>
        </motion.div>

        <motion.div 
          className="mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px", amount: 0.3 }}
          variants={fadeInUp}
        >
<h2 className="text-2xl font-semibold bg-linear-to-r from-violet-400 to-purple-950 bg-clip-text text-transparent mb-4">
  What I Work With
</h2>
          <p className="text-gray-300 text-lg mb-4">
            I specialize in the MERN stack with a strong focus on frontend development:
          </p>
          <div className="flex flex-wrap gap-3">
            {techStack.map((tech, index) => (
              <motion.span
                key={tech}
                className="px-4 py-2 bg-white/10 rounded text-gray-200 cursor-default"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ 
                  delay: index * 0.08, 
                  duration: 0.3,
                  ease: 'easeOut'
                }}
                whileHover={{ 
                  scale: 1.05, 
                  backgroundColor: 'rgba(255, 255, 255, 0.15)',
                  transition: { duration: 0.2 }
                }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>

        <motion.div 
          className="mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px", amount: 0.3 }}
          variants={fadeInUp}
        >
          <h2 className="text-2xl font-semibold bg-linear-to-r from-violet-400 to-purple-950 bg-clip-text text-transparent mb-4">Background</h2>
          <div className="text-gray-300 text-lg space-y-2">
            <motion.p
              variants={fadeIn}
              custom={0.1}
            >
              <span className="bg-linear-to-r from-violet-100 to-purple-400 bg-clip-text text-transparent">Education:</span> ISS Arts and Science College, Perinthalmanna
            </motion.p>
            <motion.p
              variants={fadeIn}
              custom={0.15}
            >
              <span className="bg-linear-to-r from-violet-100 to-purple-400 bg-clip-text text-transparent">Current:</span> Intern at Zoople Technologies, Kochi
            </motion.p>
            <motion.p
              variants={fadeIn}
              custom={0.2}
            >
              <span className="bg-linear-to-r from-violet-100 to-purple-400 bg-clip-text text-transparent">Location:</span> Malappuram, Perinthalmanna
            </motion.p>
          </div>
        </motion.div>

        <motion.div 
          className="border-l-4 border-violet-500 pl-6 py-2"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px", amount: 0.3 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          whileHover={{ 
            x: 8,
            transition: { duration: 0.3, ease: 'easeOut' }
          }}
        >
          <h2 className="text-2xl font-semibold bg-linear-to-r from-violet-400 to-purple-950 bg-clip-text text-transparent mb-3">What I'm Looking For</h2>
          <p className="text-gray-300 text-lg">
            I'm actively looking for full-time opportunities or internships where I can contribute 
            to meaningful projects, collaborate with experienced developers, and continue growing 
            my skills. I want to work on products that people actually use and be part of a team 
            that values clean code and good design.
          </p>
        </motion.div>

      </motion.div>
    </div>
  );
}