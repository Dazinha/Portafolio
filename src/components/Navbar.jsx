import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('');
  const { language, toggleLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['perfil', 'stack', 'proyectos', 'contacto'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Llama a handleScroll una vez al montar para inicializar
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-slate-950/60 backdrop-blur-xl border-b border-slate-800"
    >
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a
            href="#"
            className="flex items-center group transition-transform hover:scale-105"
          >
            <span className="font-display font-bold text-xl text-slate-100 tracking-tight transition-colors group-hover:text-indigo-400">
              Pablo<span className="text-cyan-400">.</span>
            </span>
          </a>

          <ul className="hidden md:flex items-center gap-8">
            <li>
              <a
                href="#stack"
                className={`font-body transition-colors ${activeSection === 'stack' ? 'text-indigo-400 font-medium' : 'text-slate-400 hover:text-slate-100'}`}
              >
                {t.navbar.stack}
              </a>
            </li>
            <li>
              <a
                href="#proyectos"
                className={`font-body transition-colors ${activeSection === 'proyectos' ? 'text-indigo-400 font-medium' : 'text-slate-400 hover:text-slate-100'}`}
              >
                {t.navbar.projects}
              </a>
            </li>
          </ul>

          <div className="flex items-center gap-3">
            <a
              href="https://linkedin.com/in/pablo-daza-garrido-bbb996393/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-2 rounded-full text-slate-400 hover:text-indigo-400 hover:bg-slate-800 transition-all"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
            <a
              href="https://github.com/Dazinha"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-2 rounded-full text-slate-400 hover:text-cyan-400 hover:bg-slate-800 transition-all"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 8 18v4" />
                <path d="M9 18c-4.51 2-5-2-7-2" />
              </svg>
            </a>

            <div className="flex items-center bg-slate-800/60 p-1 rounded-full border border-slate-700/50 backdrop-blur-sm mx-1 cursor-pointer">
              <button
                onClick={() => language !== 'es' && toggleLanguage()}
                aria-label="Cambiar a Español"
                className={`relative z-10 px-2.5 py-1 text-xs font-bold font-mono rounded-full transition-colors cursor-pointer ${language === 'es' ? 'text-white' : 'text-slate-400 hover:text-slate-200'}`}
              >
                ES
                {language === 'es' && (
                  <motion.div
                    layoutId="lang-indicator"
                    className="absolute inset-0 bg-indigo-500 rounded-full -z-10 shadow-[0_0_7.5px_rgba(99,102,241,0.5)]"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </button>
              <button
                onClick={() => language !== 'en' && toggleLanguage()}
                aria-label="Switch to English"
                className={`relative z-10 px-2.5 py-1 text-xs font-bold font-mono rounded-full transition-colors cursor-pointer ${language === 'en' ? 'text-white' : 'text-slate-400 hover:text-slate-200'}`}
              >
                EN
                {language === 'en' && (
                  <motion.div
                    layoutId="lang-indicator"
                    className="absolute inset-0 bg-indigo-500 rounded-full -z-10 shadow-[0_0_7.5px_rgba(99,102,241,0.5)]"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </button>
            </div>

            <a
              href="#contacto"
              className="font-body font-medium text-white px-5 py-2 rounded-full bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-500 hover:to-indigo-400 transition-all shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/40"
            >
              {t.navbar.contact}
            </a>
          </div>
        </div>
      </div>
    </motion.nav>
  )
}

export default Navbar