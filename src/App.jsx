import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Stack from './components/Stack'
import Contact from './components/Contact'

import { LanguageProvider } from './context/LanguageContext'

function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-slate-950 text-slate-200 selection:bg-indigo-500/30">
        <Navbar />
        <Hero />
        <Stack />
        <Projects />
        <Contact />
      </div>
    </LanguageProvider>
  )
}

export default App