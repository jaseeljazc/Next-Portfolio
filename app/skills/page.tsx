'use client'

import { motion } from "framer-motion";

import SkillCom from "@/components/SkillCom";

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-20 px-6 bg-linear-to-b from-violet-900/40 to-black"
    >
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
              <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
          className="mb-20"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">
            My Skills
          </h1>
          <div className="w-16 h-0.5 bg-violet-600"></div>
        </motion.div>

          <SkillCom />
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
