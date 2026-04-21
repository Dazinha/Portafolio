import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const Hero = () => {
  const { t } = useLanguage();
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section id="perfil" className="min-h-screen flex items-center justify-center pt-20 pb-10 overflow-hidden relative">
      <motion.div
        className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Columna Izquierda: Textos */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-1 relative z-20">
          {/* Nombre y título */}
          <motion.h1
            className="font-display mb-8"
            variants={itemVariants}
          >
            <span className="block font-body text-sm md:text-base font-medium text-slate-400 uppercase tracking-[0.2em] mb-3">
              {t.hero.greeting}
            </span>
            <span className="block font-bold text-5xl md:text-7xl lg:text-[4.5rem] xl:text-[5.5rem] leading-[1.1] lg:leading-none tracking-tight pb-2">
              <span className="text-indigo-400 block">Pablo</span>
              <span className="text-cyan-400 block pb-1 lg:pb-0">Daza Garrido</span>
            </span>
          </motion.h1>

          {/* Descripción */}
          <motion.p
            className="font-body text-lg md:text-xl text-slate-400 max-w-xl mb-10 leading-relaxed"
            variants={itemVariants}
            dangerouslySetInnerHTML={{ __html: t.hero.role }}
          />

          {/* Botón Descargar CV */}
          <motion.div variants={itemVariants}>
            <a
              href={t.hero.cvHref}
              download
              className="inline-flex items-center gap-3 font-body text-lg font-medium text-white px-10 py-4 rounded-full bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-500 hover:to-indigo-400 transition-all shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/50 hover:-translate-y-1 z-10"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" x2="12" y1="15" y2="3" />
              </svg>
              {t.hero.downloadCV}
            </a>
          </motion.div>
        </div>

        {/* Columna Derecha: Avatar Órbita (Tamaño reducido y posicionado a la derecha) */}
        {/* lg:translate-x-12 xl:translate-x-20 empuja toda la estructura a la derecha */}
        <motion.div className="relative flex justify-center items-center h-[400px] lg:h-[600px] order-1 lg:order-2 z-10 lg:translate-x-12 xl:translate-x-24" variants={itemVariants}>
           {/* Resplandor de fondo (reducido) */}
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] h-[250px] lg:w-[350px] lg:h-[350px] bg-gradient-to-tr from-indigo-600/20 to-cyan-500/20 blur-[80px] rounded-full pointer-events-none" />
           
           {/* Avatar (Reducido a 20rem / 320px aprox en desktop) */}
           <motion.div 
             className="relative z-10 w-48 h-48 lg:w-[20rem] lg:h-[20rem] rounded-full overflow-hidden shadow-[0_0_60px_rgba(99,102,241,0.2)] border-2 border-slate-700/50"
             animate={{ y: [-15, 15, -15] }}
             transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
           >
              <img src="/avatar.png" alt="Avatar de Pablo Daza" className="w-full h-full object-cover scale-[1.03] hover:scale-110 transition-transform duration-700" />
           </motion.div>

           {/* Sistema Solar de Iconos (Órbita Interior Reducida) */}
           <motion.div 
              className="absolute top-1/2 left-1/2 w-[280px] h-[280px] lg:w-[420px] lg:h-[420px] border border-slate-700/30 rounded-full pointer-events-none"
              style={{ x: "-50%", y: "-50%" }}
              animate={{ rotate: 360 }}
              transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
           >
              {/* React (12 o'clock) */}
              <motion.div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 p-2 lg:p-3 bg-slate-900 border border-slate-700 rounded-xl shadow-xl flex items-center justify-center" animate={{ rotate: -360 }} transition={{ duration: 35, repeat: Infinity, ease: "linear" }}>
                 <img src="https://cdn.simpleicons.org/react/61DAFB" alt="React" className="w-5 h-5 lg:w-6 lg:h-6" />
              </motion.div>
              {/* JS (3 o'clock) */}
              <motion.div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 p-2 lg:p-3 bg-slate-900 border border-slate-700 rounded-xl shadow-xl flex items-center justify-center" animate={{ rotate: -360 }} transition={{ duration: 35, repeat: Infinity, ease: "linear" }}>
                 <img src="https://cdn.simpleicons.org/javascript/F7DF1E" alt="JavaScript" className="w-5 h-5 lg:w-6 lg:h-6" />
              </motion.div>
              {/* Node (6 o'clock) */}
              <motion.div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 p-2 lg:p-3 bg-slate-900 border border-slate-700 rounded-xl shadow-xl flex items-center justify-center" animate={{ rotate: -360 }} transition={{ duration: 35, repeat: Infinity, ease: "linear" }}>
                 <img src="https://cdn.simpleicons.org/nodedotjs/339933" alt="Node.js" className="w-5 h-5 lg:w-6 lg:h-6" />
              </motion.div>
              {/* CSS (9 o'clock) */}
              <motion.div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 p-2 lg:p-3 bg-slate-900 border border-slate-700 rounded-xl shadow-xl flex items-center justify-center" animate={{ rotate: -360 }} transition={{ duration: 35, repeat: Infinity, ease: "linear" }}>
                 <img src="https://cdn.simpleicons.org/css/1572B6" alt="CSS" className="w-5 h-5 lg:w-6 lg:h-6" />
              </motion.div>
           </motion.div>

           {/* Órbita Exterior Reducida */}
           <motion.div 
              className="absolute top-1/2 left-1/2 w-[340px] h-[340px] lg:w-[540px] lg:h-[540px] border border-slate-800/60 border-dashed rounded-full pointer-events-none"
              style={{ x: "-50%", y: "-50%" }}
              animate={{ rotate: -360 }}
              transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
           >
              {/* HTML (Matemáticamente a los 45 grados arriba/derecha) */}
              <motion.div className="absolute top-[14.6%] right-[14.6%] translate-x-1/2 -translate-y-1/2 p-1.5 lg:p-2 bg-slate-900 border border-slate-700 rounded-full shadow-xl flex items-center justify-center" animate={{ rotate: 360 }} transition={{ duration: 50, repeat: Infinity, ease: "linear" }}>
                 <img src="https://cdn.simpleicons.org/html5/E34F26" alt="HTML" className="w-4 h-4 lg:w-5 lg:h-5" />
              </motion.div>
              {/* Tailwind (Matemáticamente a los 225 grados abajo/izquierda) */}
              <motion.div className="absolute bottom-[14.6%] left-[14.6%] -translate-x-1/2 translate-y-1/2 p-1.5 lg:p-2 bg-slate-900 border border-slate-700 rounded-full shadow-xl flex items-center justify-center" animate={{ rotate: 360 }} transition={{ duration: 50, repeat: Infinity, ease: "linear" }}>
                 <img src="https://cdn.simpleicons.org/tailwindcss/06B6D4" alt="Tailwind CSS" className="w-4 h-4 lg:w-5 lg:h-5" />
              </motion.div>
           </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero