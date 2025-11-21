'use client'

import { motion } from "framer-motion";
import ProjectCom from "@/components/ProjectCom";

const Project = () => {
  return (
    <section id="projects" className="py-20 ">
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
           <span>{" "}</span> My Projects
          </h1>
          <div className="w-16 h-0.5 bg-violet-600"></div>
        </motion.div>

          {/* <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"> */}
          <ProjectCom />
        </motion.div>
      </div>
    </section>
  );
};

export default Project;
