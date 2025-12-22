import { Helmet } from 'react-helmet';
import { useState, useEffect } from 'react';
import { Navigation } from './components/Navigation';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ExpertiseSection } from './components/ExpertiseSection';
import { ProjectsSection } from './components/ProjectsSection';
import { SkillsSection } from './components/SkillsSection';
import { EducationSection } from './components/EducationSection';
import { ContactSection } from './components/ContactSection';

export default function App() {
  const [darkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Kalyan Thiagarajan M",
    "jobTitle": "Software Engineer specializing in Java and AI-powered backend systems",
    "description": "Software Engineer with expertise in Java backend development and AI-assisted systems using Retrieval-Augmented Generation (RAG)",
    "url": typeof window !== 'undefined' ? window.location.origin : '',
    "email": "kalyanthiagarajanm@gmail.com",
    "sameAs": [
      "https://www.linkedin.com/in/kalyan-thiagarajan-m",
      "https://github.com/0bit07"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "IN",
      "addressLocality": "Coimbatore",
      "addressRegion": "Tamil Nadu"
    },
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": "Sri Krishna College of Technology"
    },
    "knowsAbout": [
      "Java",
      "Spring Boot",
      "Retrieval-Augmented Generation",
      "Backend Development",
      "AI Systems",
      "System Architecture",
      "Docker",
      "REST APIs",
      "RAG",
      "Enterprise Java"
    ]
  };

  return (
    <>
      <Helmet>
        <html lang="en" />
        <title>Software Engineer | Java & AI Backend Systems</title>
        <meta name="description" content="Software Engineer specializing in Java backend development and AI-assisted systems using RAG. Building scalable, enterprise-grade applications in India." />
        <link rel="canonical" href={typeof window !== 'undefined' ? window.location.href : ''} />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Software Engineer | Java & AI Backend Systems" />
        <meta property="og:description" content="Software Engineer specializing in Java backend development and AI-assisted systems using RAG. Building scalable, enterprise-grade applications in India." />
        <meta property="og:url" content={typeof window !== 'undefined' ? window.location.href : ''} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Software Engineer | Java & AI Backend Systems" />
        <meta name="twitter:description" content="Software Engineer specializing in Java backend development and AI-assisted systems using RAG." />

        <meta name="keywords" content="Java Software Engineer, Backend Engineer Java, AI Systems Engineer, RAG Engineer, Java Backend Developer, AI-assisted backend systems, Software Engineer India, Enterprise Java developer" />

        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <div className="min-h-screen bg-[#030213] text-slate-300 selection:bg-purple-500/30">
        <Navigation />

        <main className="space-y-24 pb-24">
          <HeroSection />
          <AboutSection />
          <ExpertiseSection />
          <ProjectsSection />
          <SkillsSection />
          <EducationSection />
          <ContactSection />
        </main>

        <footer className="border-t border-white/10 bg-black/20 py-8 backdrop-blur-sm">
          <div className="mx-auto max-w-6xl px-6 text-center text-slate-500">
            <p>© 2024 Kalyan Thiagarajan M. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </>
  );
}
