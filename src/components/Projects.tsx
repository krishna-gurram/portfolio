import { motion } from 'framer-motion';
import { Brain, Globe, Shield, Layers, Activity, Search, ArrowUpRight, type LucideIcon } from 'lucide-react';
import { PROJECTS } from '../data/portfolio';
import type { ProjectItem, ProjectIcon } from '../types';

const ICON_MAP: Record<ProjectIcon, LucideIcon> = {
  brain: Brain, globe: Globe, shield: Shield,
  layers: Layers, activity: Activity, search: Search,
};

function ProjectCard({ project, index }: { project: ProjectItem; index: number }) {
  const Icon = ICON_MAP[project.icon] ?? Layers;
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="group relative p-6 rounded-xl bg-white/[0.02] border border-white/5 hover:border-teal-500/20 hover:bg-teal-500/[0.02] transition-all duration-300 flex flex-col"
    >
      {/* Icon + arrow */}
      <div className="flex items-start justify-between mb-4">
        <div className="w-10 h-10 rounded-lg bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400 group-hover:bg-teal-500/20 transition-colors">
          <Icon size={18} />
        </div>
        <ArrowUpRight
          size={16}
          className="text-zinc-600 group-hover:text-teal-400 transition-all -translate-x-1 translate-y-1 group-hover:translate-x-0 group-hover:translate-y-0"
        />
      </div>

      {/* Tag */}
      <span className="inline-block mb-2 text-[10px] font-semibold uppercase tracking-widest text-teal-400/70">
        {project.tag}
      </span>

      {/* Title */}
      <h3 className="text-lg font-semibold text-white group-hover:text-teal-400 transition-colors mb-2">
        {project.title}
      </h3>

      {/* Description — flex-1 pushes everything below to the bottom */}
      <p className="text-sm text-zinc-400 leading-relaxed flex-1 mb-4">
        {project.description}
      </p>

      {/* Metrics — pinned to bottom, divider always at same height */}
      {project.metrics.length > 0 && (
        <div className="flex gap-6 pt-4 border-t border-white/5 mt-auto mb-4">
          {project.metrics.map(m => (
            <div key={m.label}>
              <div className="text-xl font-bold text-teal-400">{m.value}</div>
              <div className="text-xs text-zinc-500 mt-0.5">{m.label}</div>
            </div>
          ))}
        </div>
      )}

      {/* Stack tags — always two rows */}
      <div className="flex flex-wrap gap-1.5" style={{ maxHeight: '4rem', overflow: 'hidden' }}>
        {project.stack.map(tech => (
          <span
            key={tech}
            className="px-2.5 py-1 text-xs rounded-md bg-zinc-800/60 text-zinc-400 border border-zinc-700/40 whitespace-nowrap"
          >
            {tech}
          </span>
        ))}
      </div>
    </motion.article>
  );
}

export function Projects() {
  return (
    <section id="projects" className="py-24 relative">
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-teal-500/3 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="relative max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Featured Projects</h2>
          <p className="mt-3 text-zinc-500 text-lg">Key initiatives that drove measurable business impact</p>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {PROJECTS.map((p, i) => <ProjectCard key={p.id} project={p} index={i} />)}
        </div>
      </div>
    </section>
  );
}