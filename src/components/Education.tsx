import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Award } from 'lucide-react';
import { EDUCATION } from '../data/portfolio';

export function Education() {
  return (
    <section id="education" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Education</h2>
          <p className="mt-3 text-zinc-500 text-lg">Academic background</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-5">
          {EDUCATION.map((edu, idx) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="group p-6 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400 flex-shrink-0">
                  <GraduationCap size={20} />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-base font-semibold text-white">{edu.school}</h3>
                  <p className="mt-1 text-sm text-teal-400">{edu.degree} in {edu.field}</p>
                  <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-zinc-500">
                    <span>{edu.period}</span>
                    <span className="flex items-center gap-1"><MapPin size={11} />{edu.location}</span>
                    <span className="flex items-center gap-1"><Award size={11} />GPA: {edu.gpa}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
