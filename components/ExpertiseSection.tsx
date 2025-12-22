import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { Code2, Brain, Network, Building2 } from 'lucide-react';

export function ExpertiseSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const areas = [
    {
      icon: Code2,
      title: "Java Backend Engineering",
      color: "from-blue-500 to-cyan-500",
      skills: [
        "Core Java & Object-Oriented Programming",
        "Spring Boot backend services",
        "REST API design",
        "Java Reflection API",
        "Request/response transformation patterns",
        "Interceptor and middleware design",
        "Backend debugging and performance analysis"
      ]
    },
    {
      icon: Brain,
      title: "AI-Assisted Systems (RAG)",
      color: "from-purple-500 to-pink-500",
      skills: [
        "Retrieval-Augmented Generation (RAG) pipelines",
        "Secure document ingestion strategies",
        "Controlled AI integration patterns",
        "AI-assisted backend intelligence",
        "Prompt isolation and governance-aware AI usage",
        "Structured AI outputs for system consumption",
        "Cost-aware AI system design"
      ]
    },
    {
      icon: Network,
      title: "System Design & Architecture",
      color: "from-emerald-500 to-teal-500",
      skills: [
        "Backend service orchestration",
        "Docker-based containerized execution",
        "Asynchronous Java workflows",
        "API-first architecture design",
        "Security-focused system thinking",
        "Scalable backend design principles",
        "Maintainability and extensibility planning"
      ]
    },
    {
      icon: Building2,
      title: "Enterprise Engineering Practices",
      color: "from-orange-500 to-red-500",
      skills: [
        "Code modularity and reuse",
        "Version control with Git",
        "Structured logging and debugging",
        "Integration with legacy systems",
        "Production-readiness considerations"
      ]
    }
  ];

  return (
    <section id="expertise" className="relative overflow-hidden bg-[#030213] py-20 lg:py-32">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] opacity-30" />
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.25, 0.15] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -left-[20%] top-[10%] h-[600px] w-[600px] rounded-full bg-blue-600/30 blur-[120px]"
        />
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.15, 0.25, 0.15] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute -right-[20%] bottom-[10%] h-[600px] w-[600px] rounded-full bg-purple-600/30 blur-[120px]"
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
            Expertise
          </div>
          <h2 className="mb-4 text-center text-white">
            Areas of Expertise
          </h2>
          <p className="mx-auto mb-16 max-w-2xl text-center text-slate-400">
            Specialized skills across Java backend development, AI systems, and enterprise architecture
          </p>

          <div className="grid gap-8 md:grid-cols-2">
            {areas.map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all hover:border-white/20 hover:bg-white/10 hover:shadow-2xl hover:shadow-purple-500/20"
              >
                {/* Neon Glow on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${area.color} opacity-0 transition-opacity group-hover:opacity-10 blur-xl`} />

                <div className="relative">
                  <div className={`mb-6 inline-flex rounded-xl bg-gradient-to-br ${area.color} p-3 shadow-lg shadow-${area.color.split(' ')[1]}/50`}>
                    <area.icon className="h-7 w-7 text-white" />
                  </div>

                  <h3 className="mb-4 text-white">{area.title}</h3>

                  <ul className="space-y-3">
                    {area.skills.map((skill, skillIndex) => (
                      <motion.li
                        key={skillIndex}
                        initial={{ opacity: 0, x: -20 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: index * 0.1 + skillIndex * 0.05, duration: 0.4 }}
                        className="flex items-start gap-3 text-slate-300"
                      >
                        <div className={`mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gradient-to-r ${area.color}`} />
                        <span className="text-sm leading-relaxed">{skill}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
