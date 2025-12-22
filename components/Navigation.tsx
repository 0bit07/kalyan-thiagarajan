import { motion } from 'motion/react';
import { User, Lightbulb, FolderKanban, GraduationCap, Mail, Sparkles } from 'lucide-react';
import { useEffect, useState } from 'react';

// Simplified Navigation Component - Centered Floating Dock
export function Navigation() {
  const [activeSection, setActiveSection] = useState('home');

  // Handle scroll spy
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    document.querySelectorAll('section[id]').forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const navItems = [
    { id: 'about', icon: User, label: 'About' },
    { id: 'expertise', icon: Lightbulb, label: 'Expertise' },
    { id: 'projects', icon: FolderKanban, label: 'Projects' },
    { id: 'skills', icon: Sparkles, label: 'Skills' },
    { id: 'education', icon: GraduationCap, label: 'Education' },
    { id: 'contact', icon: Mail, label: 'Contact' },
  ];

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  return (
    <div className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2">
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, type: 'spring', stiffness: 260, damping: 20 }}
        className="flex items-center gap-1 rounded-full border border-white/10 bg-[#030213]/80 p-2 backdrop-blur-xl shadow-2xl"
      >
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollTo(item.id)}
            className={`group relative flex h-10 w-10 items-center justify-center rounded-full transition-all duration-300 hover:bg-white/10 ${activeSection === item.id ? 'bg-white/20 text-white' : 'text-slate-400 hover:text-white'
              }`}
          >
            <item.icon className="h-5 w-5" />

            {/* Tooltip */}
            <span className="absolute -top-10 left-1/2 -translate-x-1/2 scale-0 rounded bg-white px-2 py-1 text-xs font-medium text-slate-900 opacity-0 transition-all group-hover:scale-100 group-hover:opacity-100">
              {item.label}
            </span>

            {/* Active Indicator */}
            {activeSection === item.id && (
              <motion.span
                layoutId="activeNav"
                className="absolute inset-0 rounded-full bg-white/10"
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
          </button>
        ))}
      </motion.div>
    </div>
  );
}
