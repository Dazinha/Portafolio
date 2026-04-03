import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const Stack = () => {
  const { t } = useLanguage();
  const education = t.stack.educationList;

  const frontend = [
    { name: "React", icon: "https://cdn.simpleicons.org/react/61DAFB" },
    { name: "Angular", icon: "https://cdn.simpleicons.org/angular/DD0031" },
    { name: "TypeScript", icon: "https://cdn.simpleicons.org/typescript/3178C6" },
    { name: "JavaScript", icon: "https://cdn.simpleicons.org/javascript/F7DF1E" },
    { name: "Tailwind CSS", icon: "https://cdn.simpleicons.org/tailwindcss/06B6D4" },
    { name: "HTML5", icon: "https://cdn.simpleicons.org/html5/E34F26" }
  ];

  const backend = [
    { name: "Node.js", icon: "https://cdn.simpleicons.org/nodedotjs/339933" },
    { name: "Python", icon: "https://cdn.simpleicons.org/python/3776AB" },
    { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" },
    { name: "C", icon: "https://cdn.simpleicons.org/c/A8B9CC" },
    { name: "Supabase", icon: "https://cdn.simpleicons.org/supabase/3ECF8E" },
    { name: "MySQL", icon: "https://cdn.simpleicons.org/mysql/4479A1" }
  ];

  const tools = [
    { name: "Git/GitHub", icon: "https://cdn.simpleicons.org/github/FFFFFF" },
    { name: "Figma", icon: "https://cdn.simpleicons.org/figma/F24E1E" },
    { name: "Draw.io", icon: "https://cdn.simpleicons.org/diagramsdotnet/F08705" },
    { name: "MercadoPago", icon: "https://cdn.simpleicons.org/mercadopago/00B1EA" },
    { name: "Lovable", icon: "/logos/lovable.png" },
    { name: "Antigravity", icon: "/logos/antigravity.png" }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const TechPill = ({ name, icon }) => (
    <div className="flex items-center gap-3 font-mono text-base text-slate-200 bg-slate-900 border border-slate-700 px-5 py-3 rounded-xl hover:border-indigo-500/50 hover:bg-slate-800 hover:shadow-lg hover:shadow-indigo-500/10 hover:-translate-y-1 transition-all duration-300 cursor-default group">
      {icon ? (
        <img src={icon} alt={name} className="w-6 h-6 group-hover:scale-110 transition-transform" />
      ) : (
        <div className="w-5 h-5 rounded bg-slate-800 flex items-center justify-center text-[7.5px] text-slate-500 group-hover:text-indigo-400">❖</div>
      )}
      <span>{name}</span>
    </div>
  );

  return (
    <section id="stack" className="py-24 px-6 bg-slate-900/40 border-t border-b border-slate-800/50">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-16">

          {/* Columna Izquierda: Educación & Experiencia */}
          <motion.div
            className="lg:col-span-6 lg:pt-24"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-75px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-10">
              <h2 className="font-display font-bold text-5xl text-slate-100">
                <span className="text-indigo-400">{t.stack.educationTitle}</span>
              </h2>
            </div>

            <div className="space-y-12 relative before:absolute before:top-[46px] before:bottom-0 before:left-8 before:w-px before:bg-slate-800 lg:-mr-12">
              {education.map((item, idx) => (
                <div key={idx} className="relative pl-24 sm:pl-28 group">
                  {item.logo ? (
                    <div className="absolute left-8 -translate-x-1/2 top-[4px] w-24 h-24 rounded-full bg-slate-900 border-4 border-slate-800 overflow-hidden group-hover:border-indigo-500 group-hover:shadow-[0_0_20px_rgba(99,102,241,0.4)] transition-all duration-300 z-10 flex items-center justify-center">
                      <img src={item.logo} alt={item.institution} className="w-full h-full object-contain p-2" />
                    </div>
                  ) : (
                    <div className="absolute left-8 -translate-x-1/2 top-2 w-2 h-2 rounded-full bg-slate-600 group-hover:bg-indigo-400 group-hover:shadow-[0_0_7.5px_rgba(99,102,241,0.5)] transition-all duration-300 z-10"></div>
                  )}
                  <span className="inline-block px-3 py-1 mb-2 font-mono text-sm text-indigo-300 bg-indigo-500/10 rounded-md border border-indigo-500/20">
                    {item.years}
                  </span>
                  <h3 className="font-display font-bold text-xl text-slate-200 group-hover:text-cyan-400 transition-colors whitespace-nowrap">
                    {item.title}
                  </h3>
                  <p className="flex items-center gap-2 font-body text-indigo-300/70 group-hover:text-indigo-200 text-base mt-2 transition-all duration-300">
                    <svg className="w-4 h-4 text-indigo-400/50 group-hover:text-cyan-400 transition-colors duration-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    <span className="group-hover:translate-x-1 transition-transform duration-300">{item.institution}</span>
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Columna Derecha: Stack Tecnológico */}
          <motion.div
            className="lg:col-span-12 lg:col-start-12"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-75px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-12">
              <h2 className="font-display font-bold text-5xl text-slate-100">
                {t.stack.techTitlePrefix}<span className="text-cyan-400">{t.stack.techTitleHighlight}</span>
              </h2>
            </div>

            <motion.div
              className="space-y-12"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {/* Frontend */}
              <motion.div variants={itemVariants}>
                <h3 className="font-display font-bold text-2xl text-slate-200 mb-6 inline-block border-b border-slate-700 pb-2 pr-12">
                  {t.stack.frontend}
                </h3>
                <div className="flex flex-wrap gap-4 mt-2">
                  {frontend.map(tech => <TechPill key={tech.name} {...tech} />)}
                </div>
              </motion.div>

              {/* Backend */}
              <motion.div variants={itemVariants}>
                <h3 className="font-display font-bold text-2xl text-slate-200 mb-6 inline-block border-b border-slate-700 pb-2 pr-12">
                  {t.stack.backend}
                </h3>
                <div className="flex flex-wrap gap-4 mt-2">
                  {backend.map(tech => <TechPill key={tech.name} {...tech} />)}
                </div>
              </motion.div>

              {/* Herramientas */}
              <motion.div variants={itemVariants}>
                <h3 className="font-display font-bold text-2xl text-slate-200 mb-6 inline-block border-b border-slate-700 pb-2 pr-12">
                  {t.stack.tools}
                </h3>
                <div className="flex flex-wrap gap-4 mt-2">
                  {tools.map(tech => <TechPill key={tech.name} {...tech} />)}
                </div>
              </motion.div>
            </motion.div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Stack;
