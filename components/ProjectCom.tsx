import { Github, ExternalLink, Code } from "lucide-react";
import Image from "next/image";
import { projects } from "@/data/projects";

const ProjectCom = () => {
  return (
    <div className=" flex flex-col flex-wrap lg:flex-row justify-center items-center  sm:mx-5 gap-8">
      {projects.map((project) => (
        <div
          key={project.id}
          className="min-w-75 sm:w-92 w-50 min-h-[420px] h-[450px] hover:scale-105 bg-linear-to-br from-violet-900/30 to-black border border-violet-900/30 rounded-xl overflow-hidden hover:border-violet-600/50 transition-all duration-300"
        >
          <div className="sm:h-51 min-h-[200px] relative flex items-center justify-center overflow-hidden">
            {project.image ? (
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-contain"
                style={{ imageRendering: "crisp-edges" }}
              />
            ) : (
              <Code className="w-16 h-16 text-violet-400" />
            )}
          </div>

          <div className="p-6">
            <h3 className="text-xl font-semibold mb-3 text-white">
              {project.title}
            </h3>
            <p className="text-gray-400 mb-4">{project.description}</p>
            <div className="flex flex-col self-end">
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-xs bg-violet-900/30 text-violet-300 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex gap-4 ">
                <a
                  href={project.github}
                  className="flex items-center gap-2 text-violet-400 hover:text-violet-300 transition-colors"
                >
                  <Github className="w-4 h-4" />
                  Code
                </a>
                <a
                  href={project.live}
                  className="flex items-center gap-2 text-violet-400 hover:text-violet-300 transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  Live
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectCom;
