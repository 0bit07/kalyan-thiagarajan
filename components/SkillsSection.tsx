import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';

export function SkillsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skillCategories = [
    {
      category: "Languages",
      items: ["Java", "Python", "JavaScript"],
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      category: "Frameworks & Libraries",
      items: ["Spring Boot", "REST APIs", "Servlets"],
      gradient: "from-purple-500 to-pink-500"
    },
    {
      category: "AI/ML Technologies",
      items: ["Retrieval-Augmented Generation (RAG)", "AI integration pipelines"],
      gradient: "from-emerald-500 to-teal-500"
    },
    {
      category: "Databases",
      items: ["MySQL"],
      gradient: "from-orange-500 to-red-500"
    },
    {
      category: "DevOps & Tools",
      items: ["Docker", "Git"],
      gradient: "from-pink-500 to-rose-500"
    },
    {
      category: "Core Concepts",
      items: ["Object-Oriented Design", "Reflection", "AOP principles", "Backend system design"],
      gradient: "from-indigo-500 to-purple-500"
    }
  ];

  return (
    <section id="skills" className="relative overflow-hidden bg-[#030213] py-20 lg:py-32">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] opacity-25" />
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.3, 0.2] }}
          transition={{ duration: 13, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-[15%] top-[15%] h-[550px] w-[550px] rounded-full bg-indigo-600/30 blur-[120px]"
        />
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.2, 0.3, 0.2] }}
          transition={{ duration: 17, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
          className="absolute right-[15%] bottom-[15%] h-[550px] w-[550px] rounded-full bg-rose-600/30 blur-[120px]"
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
            Technology Stack
          </div>
          <h2 className="mb-4 text-center text-white">
            Technical Skills
          </h2>
          <p className="mx-auto mb-16 max-w-2xl text-center text-slate-400">
            Comprehensive expertise across modern technologies and frameworks
          </p>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition-all hover:border-white/20 hover:bg-white/10 hover:shadow-xl hover:shadow-purple-500/10"
              >
                {/* Gradient Glow Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 transition-opacity group-hover:opacity-5 blur-xl`} />

                <div className="relative">
                  <div className={`mb-4 inline-block rounded-lg bg-gradient-to-r ${category.gradient} px-3 py-1 shadow-lg`}>
                    <h3 className="text-sm font-semibold text-white">{category.category}</h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {category.items.map((item, itemIndex) => (
                      <motion.span
                        key={itemIndex}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={inView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ delay: index * 0.1 + itemIndex * 0.05, duration: 0.3 }}
                        className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300 backdrop-blur-sm transition-all hover:scale-105 hover:border-white/20 hover:bg-white/10 hover:text-white"
                      >
                        {item}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Professional Philosophy - Premium Glass Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="relative mt-16 overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
          >
            {/* Gradient Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 blur-2xl" />

            <div className="relative">
              <div className="mb-3 text-center text-sm uppercase tracking-wider text-blue-400">
                Engineering Philosophy
              </div>
              <p className="text-center text-slate-300">
                I prioritize clarity, correctness, and long-term maintainability when designing systems. AI is most effective when used deliberately to enhance backend intelligence without compromising security, control, or reliability.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
