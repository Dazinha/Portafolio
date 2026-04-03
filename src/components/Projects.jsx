import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const ProjectCard = ({ project, index, itemVariants, t }) => {
  const images = project.images || (project.image ? [project.image] : []);
  const [imgIndex, setImgIndex] = useState(0);
  const [isFullScreen, setIsFullScreen] = useState(false);

  const nextImg = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (images.length > 1) {
      setImgIndex((prev) => (prev + 1) % images.length);
    }
  };

  const prevImg = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (images.length > 1) {
      setImgIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    }
  };

  return (
    <motion.div
      variants={itemVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={`group relative bg-slate-900 border border-slate-800 hover:border-indigo-500/50 rounded-3xl overflow-hidden shadow-xl shadow-black/50 hover:shadow-indigo-500/20 transition-all duration-500 flex flex-col ${index % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-stretch h-full`}
    >
      {/* Imagen Principal */}
      <div className="relative w-full lg:w-[45%] flex-shrink-0 bg-slate-800 overflow-hidden h-[250px] sm:h-[300px] lg:h-auto lg:min-h-full">
        {images.length > 0 ? (
          <div
            className="w-full h-full relative"
            style={{
              transform: project.imageScale ? `scale(${project.imageScale})` : 'none',
              transformOrigin: project.imageTransformOrigin || 'center'
            }}
          >
            <AnimatePresence mode="popLayout">
              <motion.img
                key={imgIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                src={images[imgIndex]}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 absolute inset-0"
                style={{ objectPosition: project.imagePosition || 'center' }}
              />
            </AnimatePresence>
          </div>
        ) : (
          <div className="w-full h-full flex items-center justify-center text-slate-500">
            Sin Imagen
          </div>
        )}

        {/* Carousel Controls */}
        {images.length > 1 && (
          <>
            <button
              onClick={prevImg}
              className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-indigo-500 border border-white/10 text-white rounded-full p-2 opacity-100 lg:opacity-0 group-hover:opacity-100 transition-all duration-300 z-20 backdrop-blur-sm shadow-lg hover:shadow-indigo-500/40 hover:scale-110"
              aria-label="Previous image"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6" /></svg>
            </button>
            <button
              onClick={nextImg}
              className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-indigo-500 border border-white/10 text-white rounded-full p-2 opacity-100 lg:opacity-0 group-hover:opacity-100 transition-all duration-300 z-20 backdrop-blur-sm shadow-lg hover:shadow-indigo-500/40 hover:scale-110"
              aria-label="Next image"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
            </button>

            {/* Dots */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-20 bg-black/30 px-2 py-1.5 rounded-full backdrop-blur-md border border-white/5 opacity-100 lg:opacity-0 group-hover:opacity-100 transition-opacity">
              {images.map((_, i) => (
                <div
                  key={i}
                  className={`h-1.5 rounded-full transition-all duration-300 ${i === imgIndex ? 'w-4 bg-indigo-400' : 'w-1.5 bg-white/40'}`}
                />
              ))}
            </div>
          </>
        )}

        {/* Botón de expandir (centro) */}
        {images.length > 0 && (
          <button
            onClick={(e) => { e.preventDefault(); e.stopPropagation(); setIsFullScreen(true); }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-black/40 hover:bg-indigo-500 border border-white/20 text-white rounded-full flex items-center justify-center opacity-100 lg:opacity-0 group-hover:opacity-100 transition-all duration-300 z-30 shadow-xl backdrop-blur-md hover:scale-110"
            aria-label="View full screen"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" /></svg>
          </button>
        )}

        {/* Overlay sutil para transicionar al contenido */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent pointer-events-none"></div>
      </div>

      {/* Contenido (siempre visible) */}
      <div className="p-8 lg:p-12 flex flex-col flex-grow z-10 w-full lg:w-[55%] justify-center">

        <div className="flex justify-between items-start mb-4">
          <div className="flex flex-wrap gap-2">
            {(project.badges || [project.badge]).filter(Boolean).map((badge, idx) => (
              <span key={idx} className={`inline-block font-mono text-[11px] font-semibold uppercase tracking-wider px-3 py-1.5 rounded-full border ${badge === 'Proyecto Destacado' || badge === 'Featured Project' ? 'text-indigo-300 bg-indigo-500/10 border-indigo-500/30' : 'text-cyan-300 bg-cyan-500/10 border-cyan-500/30'}`}>
                {badge}
              </span>
            ))}
          </div>

          <div className="flex gap-2 flex-shrink-0 flex-wrap justify-end">
            {images.length > 0 && (
              <button
                onClick={(e) => { e.preventDefault(); setIsFullScreen(true); }}
                className="flex lg:hidden items-center flex-shrink-0 whitespace-nowrap gap-2 px-4 py-1.5 rounded-full bg-slate-800/80 text-cyan-400 hover:bg-slate-700 hover:text-cyan-300 border border-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300 font-medium text-sm shadow-[0_0_10px_rgba(34,211,238,0.05)]"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2" /><circle cx="8.5" cy="8.5" r="1.5" /><polyline points="21 15 16 10 5 21" /></svg>
                <span>{t.projects.viewImages || 'Ver Imágenes'}</span>
              </button>
            )}
            {project.demo && (
              <a href={project.demo} target="_blank" rel="noopener noreferrer" aria-label="Live Demo" className="flex items-center flex-shrink-0 whitespace-nowrap gap-2 px-4 py-1.5 rounded-full bg-indigo-500/10 text-indigo-400 hover:bg-indigo-500 hover:text-white border border-indigo-500/20 hover:border-indigo-500 transition-all duration-300 font-medium text-sm group/btn shadow-[0_0_15px_rgba(99,102,241,0.1)] hover:shadow-[0_0_20px_rgba(99,102,241,0.3)]">
                <span>{t.projects.visitPage}</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" x2="21" y1="14" y2="3" /></svg>
              </a>
            )}
          </div>
        </div>

        <h3 className="font-display font-bold text-2xl text-slate-100 mb-3 group-hover:text-cyan-400 transition-colors">
          {project.title}
        </h3>

        <p className="font-body text-slate-400 text-[15px] leading-relaxed mb-6">
          {project.description}
        </p>

        {project.achievement && (
          <div className="mb-6 bg-slate-800/30 border border-slate-700/50 rounded-xl p-4">
            <div className="flex gap-3 items-start">
              <svg className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 15V3" /><path d="m7 8 5-5 5 5" /><path d="M20 21H4" /></svg>
              <p className="font-body text-sm text-slate-300 leading-relaxed">
                <strong className="text-indigo-400 font-medium mr-1">{t.projects.achievementPrefix}:</strong>
                {project.achievement}
              </p>
            </div>
          </div>
        )}

        {/* Stack de tecnologías alineado siempre al fondo */}
        <div className="mt-auto">
          <div className="flex flex-wrap gap-2 pt-5 border-t border-slate-800/80">
            {project.stack.map(tech => (
              <span key={tech} className="font-mono text-[10px] sm:text-[11px] font-medium text-slate-400 bg-slate-800/60 border border-slate-700/40 px-2.5 py-1 rounded-md transition-colors hover:text-slate-200 hover:bg-slate-700">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Modal - Pantalla Completa */}
      <AnimatePresence>
        {isFullScreen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/95 backdrop-blur-sm p-4 sm:p-8"
            onClick={() => setIsFullScreen(false)}
          >
            <button
              className="absolute top-6 right-6 text-slate-400 hover:text-white bg-slate-800/50 hover:bg-slate-700/50 rounded-full p-2 transition-colors z-50"
              onClick={() => setIsFullScreen(false)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>
            <motion.img
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              src={images[imgIndex]}
              alt={project.title}
              className="max-w-full max-h-[90vh] object-contain rounded-xl shadow-2xl shadow-indigo-500/20 border border-slate-800"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const Projects = () => {
  const { t } = useLanguage();
  const projectsList = t.projects.items;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="proyectos" className="py-24 px-6 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-75px" }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="font-display font-bold text-5xl text-slate-100 mb-6">
          {t.projects.titlePrefix}<span className="text-indigo-400">{t.projects.titleHighlight}</span>
        </h2>
        <p className="font-body text-slate-400 text-lg max-w-3xl mx-auto">
          {t.projects.description}
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-37.5px" }}
        className="flex flex-col gap-12 md:gap-16 lg:gap-24"
      >
        {projectsList.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} itemVariants={itemVariants} t={t} />
        ))}
      </motion.div>
    </section>
  );
};

export default Projects;
