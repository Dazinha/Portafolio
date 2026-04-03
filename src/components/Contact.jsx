import { motion } from 'framer-motion';
import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

// Íconos SVG para evitar problemas de dependencia en build
const MailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
);
const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 8 18v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
);
const LinkedinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
);
const SendIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m22 2-7 20-4-9-9-4Z" /><path d="M22 2 11 13" /></svg>
);
const CheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
);
const LoaderIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="animate-spin"><path d="M21 12a9 9 0 1 1-6.219-8.56" /></svg>
);

// TODO: Reemplaza con tu endpoint de Formspree
// 1. Ve a https://formspree.io y crea una cuenta gratuita
// 2. Crea un nuevo formulario
// 3. Copia el ID del formulario (ej: xyzabc123)
// 4. Reemplaza TU_FORM_ID abajo
const FORMSPREE_ENDPOINT = "https://formspree.io/f/mgopeken";

const Contact = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({ nombre: '', email: '', mensaje: '' });
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!formData.nombre.trim()) newErrors.nombre = t.contact.labels.name;
    if (!formData.email.trim()) {
      newErrors.email = t.contact.labels.email;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Email inválido / Invalid email';
    }
    if (!formData.mensaje.trim()) newErrors.mensaje = t.contact.labels.message;
    return newErrors;
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
    if (errors[id]) setErrors(prev => ({ ...prev, [id]: null }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setStatus('loading');
    setErrors({});

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ nombre: '', email: '', mensaje: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contacto" className="py-20 px-6 relative overflow-hidden bg-slate-950">
      <div className="max-w-7xl mx-auto relative z-10">

        {/* Título Principal */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-75px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="font-display font-bold text-4xl md:text-6xl lg:text-[4.5rem] text-slate-100 leading-tight tracking-tight">
            {t.contact.titlePrefix}<span className="text-indigo-400">{t.contact.titleHighlight1}</span>?
            <span className="block text-cyan-400 mt-6 md:mt-12">{t.contact.titleHighlight2}</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-0 items-start">

          {/* Columna Izquierda - Info */}
          <motion.div
            className="lg:col-span-4"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-75px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="font-body text-slate-400 text-lg md:text-xl leading-relaxed mb-12">
              {t.contact.description}
            </p>

            <div className="space-y-5">
              <a href="mailto:pablo.dazag8@gmail.com" className="flex items-center gap-6 p-5 rounded-2xl bg-[#111622] hover:bg-[#161c2a] transition-colors group">
                <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-[#1c2236] text-indigo-400 group-hover:scale-105 transition-transform">
                  <MailIcon />
                </div>
                <div>
                  <p className="font-mono text-sm text-slate-500 mb-1">Email</p>
                  <p className="font-body font-medium text-lg text-slate-200">pablo.dazag8@gmail.com</p>
                </div>
              </a>

              <a href="https://github.com/Dazinha" target="_blank" rel="noopener noreferrer" className="flex items-center gap-6 p-5 rounded-2xl bg-[#111622] hover:bg-[#161c2a] transition-colors group">
                <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-[#132a38] text-cyan-400 group-hover:scale-105 transition-transform">
                  <GithubIcon />
                </div>
                <div>
                  <p className="font-mono text-sm text-slate-500 mb-1">GitHub</p>
                  <p className="font-body font-medium text-lg text-slate-200">Dazinha</p>
                </div>
              </a>

              <a href="https://linkedin.com/in/pablo-daza-garrido-bbb996393/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-6 p-5 rounded-2xl bg-[#111622] hover:bg-[#161c2a] transition-colors group">
                <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-[#1a233e] text-indigo-400 group-hover:scale-105 transition-transform">
                  <LinkedinIcon />
                </div>
                <div>
                  <p className="font-mono text-sm text-slate-500 mb-1">LinkedIn</p>
                  <p className="font-body font-medium text-lg text-slate-200">Pablo Daza Garrido</p>
                </div>
              </a>
            </div>
          </motion.div>

          {/* Columna Derecha - Formulario */}
          <motion.div
            className="lg:col-span-5 lg:col-start-8 bg-[#111622] rounded-3xl p-8 lg:p-12 shadow-xl"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-75px" }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {status === 'success' ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-green-500/20 flex items-center justify-center">
                  <CheckIcon />
                </div>
                <h3 className="font-display text-2xl text-slate-100 mb-2">{t.contact.successTitle}</h3>
                <p className="font-body text-slate-400">{t.contact.successDesc}</p>
                <button
                  onClick={() => setStatus('idle')}
                  className="mt-6 font-body text-indigo-400 hover:text-indigo-300 transition-colors"
                >
                  {t.contact.sendAnother}
                </button>
              </div>
            ) : (
              <form className="space-y-8" onSubmit={handleSubmit}>
                <div className="space-y-3">
                  <label htmlFor="nombre" className="block font-mono text-sm text-slate-500 lowercase">
                    {t.contact.labels.name}
                  </label>
                  <input
                    type="text"
                    id="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    placeholder={t.contact.placeholders.name}
                    className={`w-full bg-[#080b12] border ${errors.nombre ? 'border-red-500' : 'border-transparent'} rounded-xl px-5 py-4 text-slate-200 text-lg font-body focus:outline-none focus:border-indigo-500 transition-colors placeholder:text-slate-700`}
                  />
                  {errors.nombre && <p className="font-mono text-sm text-red-400">{errors.nombre}</p>}
                </div>

                <div className="space-y-3">
                  <label htmlFor="email" className="block font-mono text-sm text-slate-500 lowercase">
                    {t.contact.labels.email}
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder={t.contact.placeholders.email}
                    className={`w-full bg-[#080b12] border ${errors.email ? 'border-red-500' : 'border-transparent'} rounded-xl px-5 py-4 text-slate-200 text-lg font-body focus:outline-none focus:border-cyan-500 transition-colors placeholder:text-slate-700`}
                  />
                  {errors.email && <p className="font-mono text-sm text-red-400">{errors.email}</p>}
                </div>

                <div className="space-y-3">
                  <label htmlFor="mensaje" className="block font-mono text-sm text-slate-500 lowercase">
                    {t.contact.labels.message}
                  </label>
                  <textarea
                    id="mensaje"
                    rows="4"
                    value={formData.mensaje}
                    onChange={handleChange}
                    placeholder={t.contact.placeholders.message}
                    className={`w-full bg-[#080b12] border ${errors.mensaje ? 'border-red-500' : 'border-transparent'} rounded-xl px-5 py-4 text-slate-200 text-lg font-body focus:outline-none focus:border-indigo-500 transition-colors resize-none placeholder:text-slate-700`}
                  ></textarea>
                  {errors.mensaje && <p className="font-mono text-sm text-red-400">{errors.mensaje}</p>}
                </div>

                {status === 'error' && (
                  <p className="font-body text-red-400 text-center">{t.contact.error}</p>
                )}

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full flex items-center justify-center gap-3 font-body font-medium text-white text-lg px-8 py-5 rounded-xl bg-[#5b5eff] hover:bg-[#4a4ced] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === 'loading' ? (
                    <>
                      {t.contact.btnSending}
                      <LoaderIcon />
                    </>
                  ) : (
                    <>
                      {t.contact.btnSend}
                      <SendIcon />
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>

        <div className="border-t border-slate-800 mt-20 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <img src="/avatar.png" alt="Avatar" className="w-12 h-12 rounded-full border border-slate-700/50 object-cover" />
          <p className="font-body text-slate-500 text-base">
            © {new Date().getFullYear()} Pablo Daza Garrido. {t.contact.rights}
          </p>
        </div>
      </div>
    </section>
  )
}

export default Contact;
