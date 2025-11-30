
import { skills } from "@/data/skills";

const SkillCom = () => {
  return (
    <div className="space-y-12">
      {skills.map((category) => (
        <div
          key={category.title}
          className="space-y-6"
        >
          <div className="flex items-center gap-3 mb-10 px-15">
            <div className="h-1 w-12 bg-linear-to-r from-violet-600 to-violet-400 rounded-full"></div>
            <h3 className="text-2xl sm:text-2xl font-bold text-white tracking-tight">
              {category.title}
            </h3>
            <div className="h-1 flex-1 bg-linear-to-r from-violet-400 to-transparent rounded-full"></div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:px-25">
            {category.skills.map((skill) => {
              const IconComponent = skill.icon;
              return (
                <div
                  key={skill.name}
                  className="group max-w-[200px] relative bg-linear-to-br from-violet-950/30 to-black border border-violet-900/30 rounded-xl p-5 text-center hover:border-violet-500/50 transition-all duration-300 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-linear-to-br from-violet-600/0 to-violet-600/0 group-hover:from-violet-600/10 group-hover:to-transparent transition-all duration-500"></div>

                  <div className="flex justify-center mb-3 relative z-10">
                    <IconComponent
                      size={40}
                      className="transition-all duration-300 filter drop-shadow-lg group-hover:brightness-125"
                      style={{
                        color: skill.color,
                        filter: `drop-shadow(0 4px 12px ${skill.color}40)`,
                      }}
                    />
                  </div>

                  <h3 className="font-semibold text-sm text-white/90 group-hover:text-white transition-colors duration-300 relative z-10">
                    {skill.name}
                  </h3>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillCom;
