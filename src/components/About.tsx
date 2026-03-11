import { motion } from 'framer-motion';
import { ABOUT_HIGHLIGHTS } from '../data/portfolio';

export function About() {
  return (
    <section id="about" className="py-24 relative bg-[#09090b]">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white">About Me</h2>
          <p className="mt-3 text-zinc-500 text-lg">Engineer. Builder. Owner.</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-5 text-zinc-400 text-base leading-relaxed"
          >
            <p>
              I'm a <span className="text-white font-medium">full-stack software engineer</span> who thrives where systems
              complexity meets real user impact. At Amazon, I've built everything from{' '}
              <span className="text-white font-medium">GenAI-powered internal tools</span> to seller-facing platforms serving millions of merchants and vendors across global marketplaces.
              Whether driving a system solo from design doc to production or leading across a 12-engineer team, I adapt to what the problem needs.
            </p>
            <p>
              What sets me apart isn't just the code I ship — it's the problems I find. I've walked into foreign codebases,
              earned the trust of teams I had no authority over, and driven architectural decisions that outlasted my involvement.
              I think in <span className="text-white font-medium">systems, not tickets</span>.
            </p>
            <p>
              I hold an <span className="text-white font-medium">MS in Software Engineering from Arizona State University</span>{' '}
              and I'm currently exploring Senior SDE opportunities at companies building products that matter at internet scale.
            </p>
          </motion.div>

          {/* Right: highlight cards */}
          <div className="grid grid-cols-2 gap-4">
            {ABOUT_HIGHLIGHTS.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="p-5 rounded-xl bg-white/[0.02] border border-white/5 hover:border-teal-500/20 hover:bg-teal-500/[0.02] transition-all duration-300"
              >
                <div className="text-2xl mb-3">{item.icon}</div>
                <h3 className="text-sm font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-xs text-zinc-500 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
