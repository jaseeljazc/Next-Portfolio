// import { motion } from "framer-motion";
// import {skills} from "@/data/skills"

// const SkillCom = () => {

//   return (
//         <div className="flex flex-wrap justify-center gap-6 ">

//             {skills.map((skill, index) => {
//               const IconComponent = skill.icon;
//               return (
//                 <motion.div
//                   key={skill.name}
//                   initial={{ opacity: 0, y: 30 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   transition={{ delay: index * 0.1, duration: 0.6 }}
//                   whileHover={{
//                     scale: 1.05,
//                     boxShadow: "0 10px 30px rgba(139, 92, 246, 0.3)",
//                   }}
//                   viewport={{ once: true }}
//                   className="group bg-linear-to-br from-violet-900/10 sm:w-60 w-50 h-40 sm:h-40 to-black border border-violet-900/30 rounded-xl p-6 text-center hover:border-violet-600/50 transition-all duration-300 hover:scale-105"
//                 >
//                   <motion.div
//                     className="flex justify-center mb-3"
//                     whileHover={{ scale: 1.1, rotate: 5 }}
//                     transition={{ type: "spring", stiffness: 300 }}
//                   >
//                     <IconComponent
//                       size={48}
//                       className="transition-all duration-300 filter drop-shadow-lg group-hover:brightness-110"
//                       style={{
//                         color: skill.color,
//                         filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.3))",
//                       }}
//                     />
//                   </motion.div>
//                   <h3 className="font-semibold text-white mb-2 group-hover:text-violet-300 transition-colors duration-300">
//                     {skill.name}
//                   </h3>
//                   <p className="text-sm text-violet-400 group-hover:text-violet-300 transition-colors duration-300">
//                     {skill.category}
//                   </p>
//                 </motion.div>
//               );
//             })}
//           </div>  )
// }

// export default SkillCom

import { motion } from "framer-motion";
import { skills } from "@/data/skills";

const SkillCom = () => {
  return (
    <div className="space-y-12">
      {skills.map((category, categoryIndex) => (
        <motion.div
          key={category.title}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: categoryIndex * 0.15, duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <div className="flex items-center gap-3 mb-10 px-15">
            <div className="h-1 w-12 bg-linear-to-r from-violet-600 to-violet-400 rounded-full"></div>
            <h3 className="text-2xl  sm:text-2xl  font-bold text-white tracking-tight">
              {category.title}
            </h3>
            <div className="h-1 flex-1 bg-linear-to-r from-violet-400 to-transparent rounded-full"></div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:px-25">
            {category.skills.map((skill, index) => {
              const IconComponent = skill.icon;
              return (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{
                    delay: index * 0.08,
                    duration: 0.4,
                    type: "spring",
                    stiffness: 200,
                  }}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 10px 30px rgba(139, 92, 246, 0.4)",
                  }}
                  viewport={{ once: true }}
                  className="group max-w-[200px] relative bg-linear-to-br from-violet-950/30 to-black border border-violet-900/30 rounded-xl p-5 text-center hover:border-violet-500/50 transition-all duration-300 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-linear-to-br from-violet-600/0 to-violet-600/0 group-hover:from-violet-600/10 group-hover:to-transparent transition-all duration-500"></div>

                  <motion.div
                    className="flex justify-center mb-3 relative z-10"
                    whileHover={{ scale: 1.15, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300, damping: 10 }}
                  >
                    <IconComponent
                      size={40}
                      className="transition-all duration-300 filter drop-shadow-lg group-hover:brightness-125"
                      style={{
                        color: skill.color,
                        filter: `drop-shadow(0 4px 12px ${skill.color}40)`,
                      }}
                    />
                  </motion.div>

                  <h3 className="font-semibold text-sm text-white/90 group-hover:text-white transition-colors duration-300 relative z-10">
                    {skill.name}
                  </h3>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default SkillCom;
