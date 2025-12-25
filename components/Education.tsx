'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { education, certifications } from '@/data/resume';

export default function Education() {
  const t = useTranslations('education');
  const tCerts = useTranslations('certifications');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} id="education" className="relative py-5 bg-[var(--background)] overflow-hidden">
      <div className="editorial-divider" />
      
      {/* Black and white decorative elements */}
      <div className="absolute inset-0 z-0">
        <motion.div
          className="absolute top-0 left-0 w-96 h-96 bw-decorative"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 0.1, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-600 rounded-full blur-3xl" />
        </motion.div>
      </div>
      
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 max-w-[var(--content-max-width)] relative z-10">
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <div className="editorial-small mb-4">
            <span className="text-[var(--muted)]">07</span>
            <span className="lime-text ml-2">•</span>
          </div>
          <h2 className="editorial-h2 mb-4">{t('title')}</h2>
          <div className="editorial-line-accent-lime" />
        </motion.div>
        
        <div className="max-w-4xl mx-auto space-y-8 mb-16">
          {education.map((edu, index) => (
            <motion.div
              key={edu.id}
              className="border border-[var(--border)] p-6 bg-[var(--background)] hover:lime-border transition-colors"
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                <h3 className="editorial-h3 text-[var(--primary)]">
                  {edu.degree} — {edu.field}
                </h3>
                <span className="editorial-small text-[var(--muted)]">
                  {edu.period}
                </span>
              </div>
              <p className="lime-text font-sans text-lg font-semibold mb-2">
                {edu.university} • {edu.location}
              </p>
              {edu.track && (
                <p className="editorial-body text-[var(--foreground)] mb-1">
                  {edu.track}
                </p>
              )}
              {edu.language && (
                <p className="editorial-small text-[var(--muted)]">
                  {edu.language}
                </p>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h3 className="editorial-h2 mb-8">{tCerts('title')}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.id}
                className="border border-[var(--border)] p-4 bg-[var(--background)] hover:lime-border transition-colors"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
              >
                <p className="editorial-body text-[var(--foreground)]">
                  {cert.name} — {cert.issuer} <span className="lime-text">({cert.year})</span>
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

