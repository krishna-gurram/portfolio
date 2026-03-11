import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, ChevronDown, MapPin } from 'lucide-react';
import { EXPERIENCE } from '../data/portfolio';
import type { ExperienceItem } from '../types';

interface CardProps { item: ExperienceItem; index: number; isLast: boolean; }

function ExperienceCard({ item, index, isLast }: CardProps) {
  const [expanded, setExpanded] = useState(index === 0);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="relative group"
    >
      {/* Timeline connector */}
      {!isLast && (
        <div className="absolute left-[19px] top-12 bottom-0 w-px bg-gradient-to-b from-zinc-700 to-transparent" />
      )}

      <div className="flex gap-5">
        {/* Dot */}
        <div className="relative flex-shrink-0 mt-1">
          <div className={`w-10 h-10 rounded-full flex items-center justify-center border ${
            item.isCurrent
              ? 'bg-teal-500/15 border-teal-500/40 text-teal-400'
              : 'bg-zinc-800/60 border-zinc-700 text-zinc-500'
          }`}>
            <Briefcase size={16} />
          </div>
        </div>

        {/* Card */}
        <div className="flex-1 pb-10">
          <button onClick={() => setExpanded(!expanded)} className="w-full text-left">
            <div className="p-5 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/10 hover:bg-white/[0.04] transition-all duration-300">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="flex items-center gap-3 flex-wrap">
                    <h3 className="text-lg font-semibold text-white">{item.role}</h3>
                    {item.isCurrent && (
                      <span className="px-2 py-0.5 text-xs font-semibold rounded-full bg-teal-500 text-[#09090b]">
                        Current
                      </span>
                    )}
                  </div>
                  <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm">
                    <span className="text-teal-400 font-medium">{item.company}</span>
                    <span className="text-zinc-600">·</span>
                    <span className="text-zinc-500">{item.team}</span>
                  </div>
                  <div className="mt-2 flex items-center gap-3 text-xs text-zinc-500 flex-wrap">
                    <span>{item.period}</span>
                    <span className="flex items-center gap-1"><MapPin size={11} />{item.location}</span>
                  </div>
                </div>
                <ChevronDown
                  size={18}
                  className={`text-zinc-500 transition-transform duration-200 flex-shrink-0 mt-1 ${expanded ? 'rotate-180' : ''}`}
                />
              </div>

              {/* Expandable body */}
              <AnimatePresence initial={false}>
                {expanded && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-4 pt-4 border-t border-white/5 overflow-hidden"
                  >
                    <ul className="space-y-3">
                      {item.bullets.map((bullet, i) => (
                        <li key={i} className="flex gap-3 text-sm text-zinc-400 leading-relaxed">
                          <span className="mt-2 w-1.5 h-1.5 rounded-full bg-teal-500/60 flex-shrink-0" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {item.technologies.map(tech => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 text-xs rounded-md bg-zinc-800/80 text-zinc-400 border border-zinc-700/50 hover:bg-zinc-700/60 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export function Experience() {
  return (
    <section id="experience" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Experience</h2>
          <p className="mt-3 text-zinc-500 text-lg">6+ years building systems at scale</p>
        </motion.div>

        <div className="max-w-3xl">
          {EXPERIENCE.map((item, i) => (
            <ExperienceCard key={item.id} item={item} index={i} isLast={i === EXPERIENCE.length - 1} />
          ))}
        </div>
      </div>
    </section>
  );
}
