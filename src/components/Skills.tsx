import { motion } from 'framer-motion';
import { Code2, Cloud, Server, Monitor, Wrench, BookOpen, type LucideIcon } from 'lucide-react';
import { SKILL_GROUPS } from '../data/portfolio';

const CATEGORY_ICONS: Record<string, LucideIcon> = {
  languages: Code2, cloudAI: Cloud, backend: Server,
  frontend: Monitor, tools: Wrench, practices: BookOpen,
};

export function Skills() {
  return (
    <section id="skills" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Technical Skills</h2>
          <p className="mt-3 text-zinc-500 text-lg">Technologies and tools I work with</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {Object.entries(SKILL_GROUPS).map(([key, category], idx) => {
            const Icon = CATEGORY_ICONS[key] ?? Code2;
            return (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="group p-5 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-teal-500/10 flex items-center justify-center text-teal-400">
                    <Icon size={16} />
                  </div>
                  <h3 className="text-sm font-semibold text-zinc-300 uppercase tracking-wider">
                    {category.label}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.items.map(skill => (
                    <span
                      key={skill}
                      className={`px-2.5 py-1 text-sm rounded-md border transition-all duration-200 cursor-default ${
                        category.primary?.includes(skill)
                          ? 'bg-teal-500/10 text-teal-400 border-teal-500/30'
                          : 'bg-zinc-800/60 text-zinc-400 border-zinc-700/40 hover:border-teal-500/30 hover:text-teal-400 hover:bg-teal-500/5'
                      }`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
