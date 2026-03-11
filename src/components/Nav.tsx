import { useState, useEffect, useCallback } from 'react';
import { Download, Menu, X, ExternalLink } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { PERSONAL, NAV_LINKS } from '../data/portfolio';

export function Nav() {
  const [scrolled,      setScrolled]      = useState(false);
  const [mobileOpen,    setMobileOpen]    = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 20);
    const ids = NAV_LINKS.map(l => l.href.replace('#', ''));
    for (let i = ids.length - 1; i >= 0; i--) {
      const el = document.getElementById(ids[i]);
      if (el && el.getBoundingClientRect().top <= 120) {
        setActiveSection(ids[i]);
        break;
      }
    }
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#09090b]/80 backdrop-blur-xl border-b border-white/5 shadow-lg shadow-black/20' : 'bg-transparent'
      }`}>
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a
            href="#home"
            onClick={e => { e.preventDefault(); scrollTo('#home'); }}
            className="text-lg font-semibold tracking-tight text-white hover:text-teal-400 transition-colors"
          >
            Krishna<span className="text-teal-400">.</span>
          </a>

          <nav className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map(link => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className={`px-3 py-1.5 text-sm rounded-md transition-all duration-200 ${
                  activeSection === link.href.replace('#', '')
                    ? 'text-teal-400 bg-teal-400/10'
                    : 'text-zinc-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {link.label}
              </button>
            ))}
            <a
              href={PERSONAL.resumeUrl}
              download="Krishna_Gurram_Resume.pdf"
              className="ml-2 flex items-center gap-1.5 px-3.5 py-1.5 text-sm font-medium text-zinc-400 hover:text-teal-400 hover:bg-white/5 rounded-md transition-all duration-200"
            >
              <Download size={13} /> Resume
            </a>
            <a
              href={PERSONAL.linkedin}
              target="_blank" rel="noopener noreferrer"
              className="ml-1 flex items-center gap-1.5 px-3.5 py-1.5 text-sm font-medium bg-teal-500/10 text-teal-400 border border-teal-500/20 rounded-md hover:bg-teal-500/20 transition-all duration-200"
            >
              LinkedIn <ExternalLink size={13} />
            </a>
          </nav>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-zinc-400 hover:text-white p-2 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="fixed inset-0 z-40 bg-[#09090b]/95 backdrop-blur-xl pt-20"
          >
            <nav className="flex flex-col items-center gap-2 px-6">
              {NAV_LINKS.map(link => (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className="w-full text-center py-3 text-lg text-zinc-300 hover:text-teal-400 transition-colors rounded-lg hover:bg-white/5"
                >
                  {link.label}
                </button>
              ))}
              <a
                href={PERSONAL.resumeUrl}
                download="Krishna_Gurram_Resume.pdf"
                className="mt-2 flex items-center gap-2 px-6 py-3 text-zinc-300 border border-zinc-700 rounded-lg hover:bg-white/5 transition-all"
              >
                <Download size={16} /> Download Resume
              </a>
              <a
                href={PERSONAL.linkedin}
                target="_blank" rel="noopener noreferrer"
                className="mt-2 flex items-center gap-2 px-6 py-3 text-teal-400 border border-teal-500/30 rounded-lg hover:bg-teal-500/10 transition-all"
              >
                LinkedIn <ExternalLink size={16} />
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
