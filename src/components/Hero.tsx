import { motion } from 'framer-motion';
import { MapPin, ArrowDown, Sparkles, Download } from 'lucide-react';
import { useTyped } from '../hooks/useTyped';
import { TYPED_ROLES, HERO_STATS, PERSONAL } from '../data/portfolio';
import profilePhoto from '../assets/photo.jpeg';


const PHOTO_SRC: string | null = profilePhoto;

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay },
});

const scrollTo = (id: string) =>
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

export function Hero() {
  const typedText = useTyped(TYPED_ROLES);

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#09090b]" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-teal-500/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-teal-600/3 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/4 pointer-events-none" />
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)', backgroundSize: '40px 40px' }}
      />

      <div className="relative max-w-6xl mx-auto px-6 py-32 w-full">
        <div className="grid lg:grid-cols-[1fr_auto] gap-16 items-center">

          {/* ── Left: text ── */}
          <div className="order-2 lg:order-1">

            {/* Available badge */}
            {PERSONAL.availableForWork && (
              <motion.div {...fadeUp(0)}>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-6 rounded-full bg-teal-500/10 border border-teal-500/20">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-400" />
                  </span>
                  <span className="text-teal-400 text-sm font-medium">Open to Senior SDE Opportunities</span>
                </div>
              </motion.div>
            )}

            {/* Name */}
            <motion.h1
              {...fadeUp(0.1)}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight"
            >
              {PERSONAL.name}
            </motion.h1>

            {/* Title + location */}
            <motion.div {...fadeUp(0.2)} className="mt-4 flex flex-wrap items-center gap-3 text-lg text-zinc-400">
              <span className="text-teal-400 font-medium">{PERSONAL.title}</span>
              <span className="text-zinc-600">at</span>
              <span className="text-white font-medium">{PERSONAL.company}</span>
              <span className="hidden sm:flex items-center gap-1.5 text-zinc-500 text-sm">
                <MapPin size={14} />{PERSONAL.location}
              </span>
            </motion.div>

            {/* Typed role */}
            <motion.p
              {...fadeUp(0.25)}
              className="mt-3 font-mono text-base sm:text-lg text-zinc-500 min-h-[1.75rem]"
              aria-live="polite"
            >
              {typedText}
              <span className="animate-blink text-teal-400">|</span>
            </motion.p>

            {/* Bio */}
            <motion.p {...fadeUp(0.3)} className="mt-5 text-zinc-400 text-lg leading-relaxed max-w-xl">
              {PERSONAL.shortBio}
            </motion.p>

            {/* CTAs */}
            <motion.div {...fadeUp(0.4)} className="mt-8 flex flex-wrap gap-3">
              <button
                onClick={() => scrollTo('experience')}
                className="group px-6 py-3 bg-teal-500 text-[#09090b] font-semibold rounded-lg hover:bg-teal-400 transition-all duration-200 flex items-center gap-2"
              >
                View My Work
                <ArrowDown size={16} className="group-hover:translate-y-0.5 transition-transform" />
              </button>
              <a
                href={PERSONAL.resumeUrl}
                download="Krishna_Gurram_Resume.pdf"
                className="group px-6 py-3 text-teal-400 font-medium border border-teal-500/30 rounded-lg hover:bg-teal-500/10 hover:border-teal-500/50 transition-all duration-200 flex items-center gap-2"
              >
                <Download size={16} /> Download Resume
              </a>
              <button
                onClick={() => scrollTo('contact')}
                className="px-6 py-3 text-zinc-300 font-medium border border-zinc-700 rounded-lg hover:border-zinc-500 hover:text-white hover:bg-white/5 transition-all duration-200"
              >
                Get In Touch
              </button>
            </motion.div>
          </div>

          {/* ── Right: photo ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <div className="relative mt-20">
              <div className="absolute -inset-1 bg-gradient-to-b from-teal-500/20 to-transparent rounded-2xl blur-sm " />
              <div className="relative w-80 h-80 sm:w-64 sm:h-64 lg:w-96 lg:h-96 rounded-2xl overflow-hidden border border-white/10 bg-zinc-900">
                {PHOTO_SRC ? (
                  <img src={PHOTO_SRC} alt={PERSONAL.name} className="w-full h-full object-cover object-top" />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center gap-3">
                    <span className="text-7xl font-bold text-teal-400/30 tracking-tight">KG</span>
                    <span className="text-xs uppercase tracking-widest text-zinc-600">Add photo in Hero.tsx</span>
                  </div>
                )}
              </div>
              {/* Floating SDE II badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.8 }}
                className="absolute -bottom-3 -right-3 bg-[#111113] border border-white/10 rounded-xl px-3 py-2 flex items-center gap-2 shadow-xl"
              >
                <Sparkles size={14} className="text-teal-400" />
                <span className="text-sm text-zinc-300 font-medium">SDE II @ Amazon</span>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* ── Stats strip ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {HERO_STATS.map((stat, i) => (
            <div
              key={i}
              className="group p-5 rounded-xl bg-white/[0.02] border border-white/5 hover:border-teal-500/20 hover:bg-teal-500/[0.03] transition-all duration-300"
            >
              <div className="text-2xl sm:text-3xl font-bold text-white group-hover:text-teal-400 transition-colors">
                {stat.value}
              </div>
              <div className="mt-1 text-sm text-zinc-500">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
