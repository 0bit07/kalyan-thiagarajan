import { motion } from 'motion/react';
import { User, Code2, Cpu, Globe } from 'lucide-react';

export function AboutSection() {
  const stats = [
    { icon: Code2, label: 'Backend Dev', value: 'Professional' },
    { icon: Cpu, label: 'System Design', value: 'Proficient' },
    { icon: Globe, label: 'Remote', value: 'Available' },
  ];

  return (
    <section id="about" className="relative px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 flex items-center gap-4"
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
            <User className="h-6 w-6" />
          </div>
          <h2 className="text-3xl font-bold text-white">About Me</h2>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-3">
          {/* Main Content Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl lg:col-span-2"
          >
            <h3 className="mb-6 text-2xl font-semibold text-white">The Engineer's Journey</h3>
            <div className="space-y-4 text-slate-400">
              <p>
                I am a passionate software engineer with a deep love for <span className="text-blue-400">Java ecosystem</span> and distributed systems.
                My journey began with a curiosity about how large-scale applications handle millions of requests, leading me to specialize in
                backend architecture.
              </p>
              <p>
                Currently, I'm bridging the gap between traditional software engineering and modern AI.
                I build robust <span className="text-purple-400">RAG (Retrieval-Augmented Generation)</span> systems that make
                LLMs actually useful for enterprise data, ensuring reliability and scalability.
              </p>
            </div>
          </motion.div>

          {/* Stats Column */}
          <div className="space-y-4">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                viewport={{ once: true }}
                className="group flex items-center gap-4 rounded-2xl border border-white/5 bg-white/5 p-4 transition-colors hover:border-white/10 hover:bg-white/10"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-800 text-slate-300 group-hover:text-white">
                  <stat.icon className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-bold text-white">{stat.value}</div>
                  <div className="text-xs text-slate-500">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
