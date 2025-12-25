'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { experiences } from '@/data/resume';

export default function Experience() {
  const t = useTranslations('experience');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} id="experience" className="relative py-5 bg-[var(--background)] overflow-hidden">
      <div className="editorial-divider" />
      
      {/* Black and white decorative elements */}
      <div className="absolute inset-0 z-0">
        <motion.div
          className="absolute top-1/3 left-0 w-80 h-96 bw-decorative"
          initial={{ opacity: 0, x: -100 }}
          animate={isInView ? { opacity: 0.1, x: 0 } : { opacity: 0, x: -100 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <div className="w-full h-full bg-gradient-to-r from-gray-800 to-gray-600 rounded-lg" />
        </motion.div>
        <motion.div
          className="absolute bottom-1/4 right-0 w-64 h-64 bw-decorative"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 0.08, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <div className="w-full h-full bg-gradient-to-bl from-gray-700 to-gray-500 rounded-full blur-2xl" />
        </motion.div>
      </div>
      
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 max-w-[var(--content-max-width)] relative z-10">
        {/* Section header with lime accent */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <div className="editorial-small mb-4">
            <span className="text-[var(--muted)]">03</span>
            <span className="lime-text ml-2">•</span>
          </div>
          <h2 className="editorial-h2 mb-4">{t('title')}</h2>
          <div className="editorial-line-accent-lime" />
        </motion.div>

        {/* Experience timeline */}
        <div className="space-y-16">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              className="relative pl-8 border-l-2 border-[var(--divider)]"
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              {/* Timeline dot with lime accent */}
              <div className="absolute -left-[5px] top-0 w-3 h-3 rounded-full lime-bg" />
              
              {/* Period */}
              <div className="mb-4">
                <span className="editorial-small text-[var(--muted)]">{exp.period}</span>
              </div>

              {/* Position and company */}
              <div className="mb-6">
                <h3 className="editorial-h3 mb-2 text-[var(--primary)]">
                  {exp.position}
                </h3>
                <p className="font-sans text-lg font-semibold lime-text mb-1">
                  {exp.company}
                </p>
                <p className="editorial-small text-[var(--muted)]">
                  {exp.location}
                </p>
              </div>

              {/* Note */}
              {exp.note && (
                <p className="font-sans text-base italic text-[var(--muted)] mb-6">
                  {exp.note}
                </p>
              )}

              {/* Responsibilities in columns */}
              <div className="editorial-columns-2 mb-8">
                <ul className="space-y-3">
                  {exp.responsibilities.map((resp, i) => (
                    <li key={i} className="editorial-body text-[var(--foreground)] flex items-start gap-3">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full lime-bg flex-shrink-0" />
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tools */}
              <div className="pt-6 border-t border-[var(--divider)]">
                <h4 className="editorial-small mb-4">
                  <span className="text-[var(--muted)]">{t('toolsLabel')}</span>
                  <span className="lime-text ml-2">→</span>
                </h4>
                <div className="flex flex-wrap gap-2">
                  {exp.tools.map((tool, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 text-sm font-sans text-[var(--foreground)] border border-[var(--border)] bg-[var(--background)] hover:lime-border transition-colors"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

