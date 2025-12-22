import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { Mail, Linkedin, Github, MapPin, Briefcase, Send } from 'lucide-react';

export function ContactSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="contact" className="relative overflow-hidden bg-[#030213] py-20 lg:py-32">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] opacity-20" />
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.3, 0.2] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-[10%] top-[20%] h-[500px] w-[500px] rounded-full bg-blue-600/30 blur-[120px]"
        />
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.2, 0.3, 0.2] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute right-[10%] bottom-[20%] h-[500px] w-[500px] rounded-full bg-purple-600/30 blur-[120px]"
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
            Let's Connect
          </div>
          <h2 className="mb-4 text-center text-white">
            Get In Touch
          </h2>
          <p className="mx-auto mb-16 max-w-2xl text-center text-slate-400">
            Open to backend and AI-focused software engineering opportunities
          </p>

          <div className="grid gap-8 lg:grid-cols-2">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="space-y-6"
            >
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
                <h3 className="mb-6 text-white">Contact Information</h3>

                <div className="space-y-4">
                  <a
                    href="mailto:kalyanthiagarajanm@gmail.com"
                    className="group flex items-center gap-4 rounded-lg border border-white/10 bg-white/5 p-4 backdrop-blur-sm transition-all hover:border-blue-500/50 hover:bg-white/10 hover:shadow-lg hover:shadow-blue-500/20"
                  >
                    <div className="rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 p-3 shadow-lg shadow-blue-500/50">
                      <Mail className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <div className="text-sm text-slate-400">Email</div>
                      <div className="text-white">kalyanthiagarajanm@gmail.com</div>
                    </div>
                  </a>

                  <a
                    href="https://www.linkedin.com/in/kalyan-thiagarajan-m"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4 rounded-lg border border-white/10 bg-white/5 p-4 backdrop-blur-sm transition-all hover:border-purple-500/50 hover:bg-white/10 hover:shadow-lg hover:shadow-purple-500/20"
                  >
                    <div className="rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 p-3 shadow-lg shadow-purple-500/50">
                      <Linkedin className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <div className="text-sm text-slate-400">LinkedIn</div>
                      <div className="text-white">Kalyan Thiagarajan M</div>
                    </div>
                  </a>

                  <a
                    href="https://github.com/0bit07"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4 rounded-lg border border-white/10 bg-white/5 p-4 backdrop-blur-sm transition-all hover:border-emerald-500/50 hover:bg-white/10 hover:shadow-lg hover:shadow-emerald-500/20"
                  >
                    <div className="rounded-lg bg-gradient-to-br from-emerald-500 to-teal-500 p-3 shadow-lg shadow-emerald-500/50">
                      <Github className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <div className="text-sm text-slate-400">GitHub</div>
                      <div className="text-white">0bit07</div>
                    </div>
                  </a>
                </div>
              </div>

              {/* Availability */}
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
                <h3 className="mb-4 text-white">Availability</h3>

                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <MapPin className="mt-1 h-5 w-5 text-blue-400" />
                    <div>
                      <div className="text-white">India</div>
                      <div className="text-sm text-slate-400">
                        Open to remote, hybrid, and full-time opportunities
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Briefcase className="mt-1 h-5 w-5 text-purple-400" />
                    <div>
                      <div className="text-sm text-slate-300">
                        Seeking backend and AI-focused software engineering roles involving Java, system design, and AI-assisted architectures
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* CTA Card - Enhanced with Glass Overlay */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 p-[1px]"
            >
              {/* Glass overlay */}
              <div className="relative h-full overflow-hidden rounded-2xl bg-[#030213]/80 p-8 backdrop-blur-xl">
                <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
                <div className="absolute -bottom-16 -left-16 h-64 w-64 rounded-full bg-white/10 blur-3xl" />

                <div className="relative">
                  <Send className="mb-6 h-12 w-12 text-white" />

                  <h3 className="mb-4 text-white">Ready to collaborate?</h3>

                  <p className="mb-8 text-slate-300">
                    I'm always interested in discussing new projects, innovative ideas, and opportunities to create impactful backend systems with AI integration.
                  </p>

                  <a
                    href="mailto:kalyanthiagarajanm@gmail.com"
                    className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-slate-900 transition-all hover:scale-105 hover:shadow-xl hover:shadow-white/20"
                  >
                    <Mail className="h-5 w-5" />
                    <span className="font-semibold">Send me an email</span>
                  </a>

                  <div className="mt-8 space-y-3 border-t border-white/20 pt-8">
                    <div className="flex items-center gap-2 text-slate-300">
                      <div className="h-2 w-2 rounded-full bg-green-400" />
                      <span className="text-sm">Available for opportunities</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-300">
                      <div className="h-2 w-2 rounded-full bg-blue-400" />
                      <span className="text-sm">Response within 24-48 hours</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
