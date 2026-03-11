import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin, MapPin, Copy, Check, ArrowUpRight } from 'lucide-react';
import { PERSONAL } from '../data/portfolio';

export function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    await navigator.clipboard.writeText(PERSONAL.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-teal-500/3 rounded-full blur-[120px] translate-x-1/3 pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mb-14 max-w-2xl"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Let's Connect</h2>
          <p className="mt-4 text-zinc-400 text-lg leading-relaxed">
            I'm open to Senior SDE opportunities, interesting conversations, and collaborations.
            The fastest way to reach me is via email or LinkedIn.
          </p>
        </motion.div>

        {/* Primary CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="flex flex-wrap gap-4 mb-10"
        >
          <a
            href={`mailto:${PERSONAL.email}`}
            className="group flex items-center gap-3 px-6 py-3.5 bg-teal-500 text-[#09090b] font-semibold rounded-lg hover:bg-teal-400 transition-all duration-200"
          >
            <Mail size={18} />
            Send Me an Email
            <ArrowUpRight size={16} className="opacity-70 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
          <a
            href={PERSONAL.linkedin}
            target="_blank" rel="noopener noreferrer"
            className="group flex items-center gap-3 px-6 py-3.5 text-teal-400 font-medium border border-teal-500/30 rounded-lg hover:bg-teal-500/10 hover:border-teal-500/50 transition-all duration-200"
          >
            <Linkedin size={18} />
            Connect on LinkedIn
            <ArrowUpRight size={16} className="opacity-70 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </motion.div>

        {/* Info cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {/* Email card */}
          <div className="p-5 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-all duration-300">
            <div className="flex items-center justify-between mb-3">
              <div className="w-9 h-9 rounded-lg bg-teal-500/10 flex items-center justify-center text-teal-400">
                <Mail size={16} />
              </div>
              <button
                onClick={copyEmail}
                className="flex items-center gap-1.5 px-2.5 py-1 text-xs rounded-md bg-zinc-800/60 border border-zinc-700/40 text-zinc-400 hover:text-teal-400 hover:border-teal-500/30 transition-all duration-200"
              >
                {copied ? <><Check size={12} className="text-teal-400" />Copied</> : <><Copy size={12} />Copy</>}
              </button>
            </div>
            <div className="text-xs text-zinc-500 uppercase tracking-wider mb-1">Email</div>
            <a href={`mailto:${PERSONAL.email}`} className="text-sm text-zinc-300 hover:text-teal-400 transition-colors break-all">
              {PERSONAL.email}
            </a>
          </div>

          {/* Phone card */}
          <div className="p-5 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-all duration-300">
            <div className="w-9 h-9 rounded-lg bg-teal-500/10 flex items-center justify-center text-teal-400 mb-3">
              <Phone size={16} />
            </div>
            <div className="text-xs text-zinc-500 uppercase tracking-wider mb-1">Phone</div>
            <a href={`tel:${PERSONAL.phone}`} className="text-sm text-zinc-300 hover:text-teal-400 transition-colors">
              {PERSONAL.phone}
            </a>
          </div>

          {/* LinkedIn card */}
          <div className="p-5 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-all duration-300">
            <div className="w-9 h-9 rounded-lg bg-teal-500/10 flex items-center justify-center text-teal-400 mb-3">
              <Linkedin size={16} />
            </div>
            <div className="text-xs text-zinc-500 uppercase tracking-wider mb-1">LinkedIn</div>
            <a href={PERSONAL.linkedin} target="_blank" rel="noopener noreferrer" className="text-sm text-zinc-300 hover:text-teal-400 transition-colors">
              krishna-gurram
            </a>
          </div>

          {/* Location card */}
          <div className="w-max p-5 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-all duration-300">
            <div className="w-9 h-9 rounded-lg bg-teal-500/10 flex items-center justify-center text-teal-400 mb-3">
              <MapPin size={16} />
            </div>
            <div className="text-xs text-zinc-500 uppercase tracking-wider mb-1">Location</div>
            <span className="text-sm text-zinc-400">{PERSONAL.location} · Open to Bay Area & Remote</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
