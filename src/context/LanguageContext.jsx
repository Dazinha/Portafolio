import { createContext, useState, useContext } from 'react';

const translations = {
  es: {
    navbar: {
      profile: 'Mi Perfil',
      stack: 'Stack',
      projects: 'Proyectos',
      contact: 'Contacto',
    },
    hero: {
      greeting: '👋 Hola, yo soy',
      role: 'Desarrollador <span className="text-indigo-400 font-medium">Full Stack</span> con pasión por crear soluciones digitales. Estudiante de Ingeniería Civil Informática en la PUCV, actualmente explorando el potencial de la <span className="text-cyan-400 font-medium">IA</span> en el desarrollo de software a través de <span className="text-purple-400 font-medium">Agentic AI & Vibe Coding</span>.',
      downloadCV: 'Descargar CV',
      cvHref: '/ICI CV - Pablo Daza.pdf'
    },
    stack: {
      educationTitle: 'Educación',
      techTitlePrefix: 'Stack ',
      techTitleHighlight: 'Tecnológico',
      frontend: 'Frontend',
      backend: 'Backend',
      tools: 'Herramientas & IA',
      educationList: [
        {
          years: "2018 - 2021",
          title: "Educación Media",
          institution: "Colegio Rubén Castro",
          logo: "/logos/rcv.png"
        },
        {
          years: "2022 - Actualmente",
          title: "Ingeniería Civil Informática",
          institution: "Pontificia Universidad Católica de Valparaíso",
          logo: "/logos/pucv.svg"
        },
        {
          years: "Diciembre 2025 - Enero 2026",
          title: "Primera Práctica Profesional",
          institution: "Zeeers",
          logo: "/logos/zeeers.png"
        }
      ]
    },
    projects: {
      titlePrefix: 'Mis ',
      titleHighlight: 'Proyectos',
      description: 'Una selección de proyectos donde aplico desarrollo Full Stack e Inteligencia Artificial para transformar ideas complejas en soluciones digitales escalables.',
      filters: ['Todos', 'Fullstack', 'Backend', 'Data/ML'],
      achievementPrefix: 'Logro',
      visitPage: 'Visita la página',
      items: [
        {
          images: [
            "causes_portada.png",
            "causes_image.png"
          ],
          title: "Causes For Good",
          imagePosition: "left",
          badges: ["Proyecto Destacado", "Práctica Profesional"],
          category: "Fullstack",
          date: "Dic 2025 - Ene 2026",
          description: "Plataforma integral de crowdfunding social basada en el modelo CLYC. Cubre desde la formulación de causas asistida por IA hasta la recaudación.",
          stack: ["React", "TypeScript", "Tailwind CSS", "Supabase", "Lovable", "Mercado Pago"],
          achievement: "Lanzamiento a producción con pasarelas de pago y diseño Serverless consolidado.",
          demo: "https://causes.forgood.cl/"
        },
        {
          images: [
            "companions_portada.png",
            "companion_1.png",
            "companion_2.png",
            "companion_3.png"
          ],
          title: "Companions For Good",
          imagePosition: "55% 100%",
          imageScale: 1.15,
          imageTransformOrigin: "bottom right",
          badge: "Práctica Profesional",
          category: "Fullstack",
          date: "Dic 2025 - Ene 2026",
          description: "Asistente inteligente (Agentic AI) integrado que guía a creadores de causas en la rendición de cuentas conversacional con subida de evidencia.",
          stack: ["React", "TypeScript", "Supabase", "Lovable", "LLMs (Gemini/Anthropic)"],
          achievement: "Reducción de fricción en los reportes mediante ingeniería de prompts optimizada para respuestas precisas y automatizadas.",
          github: "https://github.com/Dazinha",
          demo: "https://companions.forgood.cl/"
        }
      ]
    },
    contact: {
      titlePrefix: '¿Tienes alguna ',
      titleHighlight1: 'idea',
      titleHighlight2: '¡Contáctame!',
      description: 'Si tienes una idea innovadora, oportunidad de equipo, o deseas conversar sobre desarrollo tecnológico, estaré encantado de escucharte.',
      successTitle: '¡Mensaje enviado!',
      successDesc: 'Te responderé lo antes posible.',
      sendAnother: 'Enviar otro mensaje',
      labels: {
        name: 'nombre',
        email: 'email',
        message: 'mensaje'
      },
      placeholders: {
        name: 'Tu nombre',
        email: 'tu@email.com',
        message: 'Hola Pablo, tengo una idea...'
      },
      btnSending: 'Enviando...',
      btnSend: 'Enviar mensaje',
      error: 'Error al enviar. Por favor, intenta de nuevo.',
      rights: 'Todos los derechos reservados.'
    }
  },
  en: {
    navbar: {
      profile: 'My Profile',
      stack: 'Stack',
      projects: 'Projects',
      contact: 'Contact',
    },
    hero: {
      greeting: '👋 Hi, I am',
      role: '<span className="text-indigo-400 font-medium">Full Stack</span> developer passionate about creating digital solutions. Computer Engineering student at PUCV, currently exploring the potential of <span className="text-cyan-400 font-medium">AI</span> in software development through <span className="text-purple-400 font-medium">Agentic AI & Vibe Coding</span>.',
      downloadCV: 'Download CV',
      cvHref: '/ICI CV EN - Pablo Daza.pdf'
    },
    stack: {
      educationTitle: 'Education',
      techTitlePrefix: 'Tech ',
      techTitleHighlight: 'Stack',
      frontend: 'Frontend',
      backend: 'Backend',
      tools: 'Tools & AI',
      educationList: [
        {
          years: "2018 - 2021",
          title: "High School Education",
          institution: "Rubén Castro School",
          logo: "/logos/rcv.png"
        },
        {
          years: "2022 - Present",
          title: "Computer Engineering",
          institution: "Pontificia Universidad Católica de Valparaíso",
          logo: "/logos/pucv.svg"
        },
        {
          years: "Dec 2025 - Jan 2026",
          title: "First Professional Internship",
          institution: "Zeeers",
          logo: "/logos/zeeers.png"
        }
      ]
    },
    projects: {
      titlePrefix: 'My ',
      titleHighlight: 'Projects',
      description: 'A selection of projects where I apply Full Stack development and Artificial Intelligence to transform complex ideas into scalable digital solutions.',
      filters: ['All', 'Fullstack', 'Backend', 'Data/ML'], // maps to Todos, Fullstack, Backend, Data/ML
      achievementPrefix: 'Achievement',
      visitPage: 'Visit Website',
      items: [
        {
          images: [
            "causes_portada.png",
            "causes_image.png"
          ],
          title: "Causes For Good",
          imagePosition: "left",
          badges: ["Featured Project", "Professional Internship"],
          category: "Fullstack", // Important: Match filter logic if needed or map it
          date: "Dec 2025 - Jan 2026",
          description: "Comprehensive social crowdfunding platform based on the CLYC model. Covers everything from AI-assisted cause formulation to fundraising.",
          stack: ["React", "TypeScript", "Tailwind CSS", "Supabase", "Lovable", "Mercado Pago"],
          achievement: "Production launch with payment gateways and a consolidated Serverless design.",
          github: "https://github.com/Dazinha",
          demo: "https://causes.forgood.cl/"
        },
        {
          images: [
            "companions_portada.png",
            "companion_1.png",
            "companion_2.png",
            "companion_3.png"
          ],
          title: "Companions For Good",
          imagePosition: "55% 100%",
          imageScale: 1.15,
          imageTransformOrigin: "bottom right",
          badge: "Professional Internship",
          category: "Fullstack",
          date: "Dec 2025 - Jan 2026",
          description: "Integrated intelligent assistant (Agentic AI) guiding cause creators in conversational accountability reporting with evidence upload.",
          stack: ["React", "TypeScript", "Supabase", "Lovable", "LLMs (Gemini/Anthropic)"],
          achievement: "Friction reduction in reporting through optimized Prompt Engineering for precise and automated responses.",
          github: "https://github.com/Dazinha",
          demo: "https://companions.forgood.cl/"
        }
      ]
    },
    contact: {
      titlePrefix: 'Do you have an ',
      titleHighlight1: 'idea',
      titleHighlight2: 'Contact me!',
      description: 'If you have an innovative idea, a team opportunity, or want to chat about tech development, I would be delighted to hear from you.',
      successTitle: 'Message sent!',
      successDesc: "I'll get back to you as soon as possible.",
      sendAnother: 'Send another message',
      labels: {
        name: 'name',
        email: 'email',
        message: 'message'
      },
      placeholders: {
        name: 'Your name',
        email: 'you@email.com',
        message: 'Hi Pablo, I have an idea...'
      },
      btnSending: 'Sending...',
      btnSend: 'Send message',
      error: 'Error sending. Please try again.',
      rights: 'All rights reserved.'
    }
  }
};

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('es');

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'es' ? 'en' : 'es'));
  };

  const t = translations[language];

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
