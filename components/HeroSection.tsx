import { motion } from 'motion/react';
import { MapPin, Github, Linkedin, ArrowDown } from 'lucide-react';

export function HeroSection() {
  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#030213] text-white">
      {/* Background Gradients & Noise */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -left-[10%] top-[20%] h-[500px] w-[500px] rounded-full bg-blue-600/20 blur-[120px]"
        />
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute -right-[10%] bottom-[20%] h-[500px] w-[500px] rounded-full bg-purple-600/20 blur-[120px]"
        />
      </div>

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-6 py-20 lg:flex-row lg:justify-between lg:gap-16">

        {/* Left Content */}
        <div className="flex max-w-2xl flex-col items-center text-center lg:items-start lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm font-medium backdrop-blur-md"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
            </span>
            <span className="text-slate-300">Available for new projects</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-6 text-5xl font-bold leading-tight tracking-tight lg:text-7xl"
          >
            Building <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Intelligent</span> Backend Systems.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mb-8 text-lg text-slate-400 lg:text-xl font-light max-w-xl"
          >
            Software Engineer specializing in <span className="text-white font-medium">Java</span>, reliable architecture, and <span className="text-white font-medium">AI-powered</span> intelligence layers (RAG).
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap justify-center gap-4 lg:justify-start"
          >
            <a
              href="https://github.com/0bit07"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-white px-8 py-3 font-semibold text-slate-900 transition-all hover:bg-slate-200"
            >
              <Github className="h-5 w-5 transition-transform group-hover:scale-110" />
              <span>GitHub</span>
            </a>

            <a
              href="https://www.linkedin.com/in/kalyan-thiagarajan-m"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-8 py-3 font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/10"
            >
              <Linkedin className="h-5 w-5 transition-transform group-hover:scale-110" />
              <span>LinkedIn</span>
            </a>
          </motion.div>
        </div>

        {/* Right Image - Glass Card Effect */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="relative mt-16 lg:mt-0"
        >
          <div className="relative z-10 w-[300px] h-[400px] lg:w-[400px] lg:h-[500px] rounded-3xl p-3 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-2xl border border-white/10 shadow-2xl skew-y-0 hover:skew-y-1 transition-all duration-500 ease-out">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-3xl blur-xl -z-10" />
            <div className="h-full w-full overflow-hidden rounded-2xl">
              <img
                src="/IMG_7435.jpeg"
                alt="Kalyan Thiagarajan"
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-110"
              />
            </div>

            {/* Glass Badge */}
            <div className="absolute -bottom-6 -left-6 rounded-2xl border border-white/10 bg-slate-900/80 p-4 backdrop-blur-md shadow-xl">
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center h-10 w-10 rounded-full bg-blue-500/20 text-blue-400">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs text-slate-400">Located in</p>
                  <p className="font-semibold text-white">Coimbatore, IN</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <button onClick={scrollToAbout} className="flex flex-col items-center gap-2 text-slate-500 hover:text-white transition-colors">
          <span className="text-xs uppercase tracking-widest">Explore</span>
          <ArrowDown className="animate-bounce h-5 w-5" />
        </button>
      </motion.div>
    </section>
  );
}
