import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { Shield, Workflow, Car, BookOpen, ExternalLink } from 'lucide-react';

export function ProjectsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      icon: Shield,
      title: "AI-Assisted Security Analysis Engine",
      description: "Designed and implemented a Java-based backend system that executes application builds in isolated container environments. Integrated a Retrieval-Augmented Generation (RAG) layer to analyze vulnerabilities and produce structured insights while maintaining strict separation between system logic and AI interaction.",
      technologies: ["Java", "Docker", "RAG pipelines", "REST APIs"],
      gradient: "from-blue-500 to-cyan-500",
      link: null
    },
    {
      icon: Workflow,
      title: "Java Content Transformation Engine",
      description: "Developed backend components to transform and enrich request and response payloads using Java reflection and interceptor-style patterns. Focused on maintainability, compatibility, and efficient data processing for enterprise workflows.",
      technologies: ["Java", "JSON/XML processing", "backend APIs"],
      gradient: "from-purple-500 to-pink-500",
      link: null
    },
    {
      icon: Car,
      title: "Car Rental Management System",
      description: "Built a Java-based backend system to manage user authentication, car catalogs, booking workflows, and reservation tracking. Emphasized clean object-oriented design and modular architecture.",
      technologies: ["Java", "MySQL", "Git"],
      gradient: "from-emerald-500 to-teal-500",
      link: "https://github.com/0bit07"
    },
    {
      icon: BookOpen,
      title: "Online Bookstore Management System",
      description: "Developed a backend web application handling user registration, book catalogs, and order processing with database-backed persistence.",
      technologies: ["Java", "Servlets", "MySQL"],
      gradient: "from-orange-500 to-red-500",
      link: null
    }
  ];

  return (
    <section id="projects" className="relative overflow-hidden bg-[#030213] py-20 lg:py-32">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] opacity-20" />
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.2, 0.3, 0.2] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute left-[10%] top-[20%] h-[500px] w-[500px] rounded-full bg-emerald-600/30 blur-[120px]"
        />
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.3, 0.2] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
          className="absolute right-[10%] bottom-[20%] h-[500px] w-[500px] rounded-full bg-pink-600/30 blur-[120px]"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-4 text-center text-sm uppercase tracking-wider text-blue-400">
            Portfolio
          </div>
          <h2 className="mb-4 text-center text-white">
            Selected Projects
          </h2>
          <p className="mx-auto mb-16 max-w-2xl text-center text-slate-400">
            Real-world applications showcasing backend engineering and AI integration expertise
          </p>

          <div className="grid gap-8 md:grid-cols-2">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl transition-all hover:scale-[1.02] hover:border-white/20 hover:bg-white/10 hover:shadow-2xl"
              >
                {/* Neon Gradient Border */}
                <div className={`h-1 bg-gradient-to-r ${project.gradient}`} />

                {/* Glow Effect on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 transition-opacity group-hover:opacity-5 blur-2xl`} />

                <div className="relative p-8">
                  <div className={`mb-4 inline-flex rounded-xl bg-gradient-to-br ${project.gradient} p-3 shadow-lg`}>
                    <project.icon className="h-6 w-6 text-white" />
                  </div>

                  <h3 className="mb-3 text-white">
                    {project.title}
                  </h3>

                  <p className="mb-6 leading-relaxed text-slate-300">
                    {project.description}
                  </p>

                  <div className="mb-6 flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300 backdrop-blur-sm transition-all hover:border-white/20 hover:bg-white/10"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-2 bg-gradient-to-r ${project.gradient} bg-clip-text font-semibold text-transparent transition-all hover:gap-3`}
                    >
                      <span>View Project</span>
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
