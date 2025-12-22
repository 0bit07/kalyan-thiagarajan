import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, Award, Calendar, MapPin } from 'lucide-react';

export function EducationSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const certifications = [
    { name: "Amazon S3", provider: "Coursera", icon: "☁️" },
    { name: "Machine Learning", provider: "Coursera", icon: "🤖" },
    { name: "PCAP (Python Certified Associate Programmer)", provider: "Official", icon: "🐍" }
  ];

  return (
    <section id="education" className="relative overflow-hidden bg-[#030213] py-20 lg:py-32">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] opacity-20" />
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.3, 0.2] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          className="absolute left-[20%] top-[10%] h-[500px] w-[500px] rounded-full bg-cyan-600/30 blur-[120px]"
        />
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.2, 0.3, 0.2] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
          className="absolute right-[20%] bottom-[10%] h-[500px] w-[500px] rounded-full bg-pink-600/30 blur-[120px]"
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
            Academic Background
          </div>
          <h2 className="mb-4 text-center text-white">
            Education & Certifications
          </h2>
          <p className="mx-auto mb-16 max-w-2xl text-center text-slate-400">
            Strong academic foundation backed by industry-recognized certifications
          </p>

          <div className="grid gap-8 lg:grid-cols-2">
            {/* Education */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all hover:border-white/20 hover:bg-white/10"
            >
              {/* Neon Glow Effect */}
              <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-gradient-to-br from-blue-500/30 to-cyan-500/30 blur-3xl" />

              <div className="relative">
                <div className="mb-6 inline-flex rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 p-4 shadow-lg shadow-blue-500/50">
                  <GraduationCap className="h-8 w-8 text-white" />
                </div>

                <h3 className="mb-4 text-white">
                  Bachelor of Engineering
                </h3>
                <p className="mb-3 text-slate-300">
                  Computer Science
                </p>

                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-slate-400">
                    <MapPin className="h-4 w-4" />
                    <span>Sri Krishna College of Technology, Coimbatore</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-400">
                    <Calendar className="h-4 w-4" />
                    <span>2024</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Certifications */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all hover:border-white/20 hover:bg-white/10"
            >
              {/* Neon Glow Effect */}
              <div className="absolute -left-8 -bottom-8 h-32 w-32 rounded-full bg-gradient-to-br from-purple-500/30 to-pink-500/30 blur-3xl" />

              <div className="relative">
                <div className="mb-6 inline-flex rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 p-4 shadow-lg shadow-purple-500/50">
                  <Award className="h-8 w-8 text-white" />
                </div>

                <h3 className="mb-6 text-white">
                  Professional Certifications
                </h3>

                <div className="space-y-4">
                  {certifications.map((cert, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={inView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 0.5 + index * 0.1, duration: 0.4 }}
                      className="flex items-start gap-3 rounded-lg border border-white/10 bg-white/5 p-4 backdrop-blur-sm transition-all hover:border-white/20 hover:bg-white/10 hover:shadow-lg"
                    >
                      <span className="text-2xl">{cert.icon}</span>
                      <div>
                        <div className="text-white">{cert.name}</div>
                        <div className="text-sm text-slate-400">{cert.provider}</div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
