'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Link } from '@/lib/routing';
import { projects } from '@/data/resume';

export default function Projects() {
  const t = useTranslations('projects');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const featuredProjects = projects.slice(0, 3);

  return (
    <section ref={ref} id="projects" className="relative py-5 bg-[var(--background)] overflow-hidden">
      <div className="editorial-divider" />
      
      {/* Black and white decorative elements */}
      <div className="absolute inset-0 z-0">
        <motion.div
          className="absolute top-1/4 left-0 w-72 h-96 bw-decorative"
          initial={{ opacity: 0, x: -100 }}
          animate={isInView ? { opacity: 0.1, x: 0 } : { opacity: 0, x: -100 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <div className="w-full h-full bg-gradient-to-r from-gray-800 to-gray-600 rounded-lg" />
        </motion.div>
        <motion.div
          className="absolute bottom-0 right-1/4 w-96 h-64 bw-decorative"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 0.08, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <div className="w-full h-full bg-gradient-to-bl from-gray-700 to-gray-500 rounded-full blur-2xl" />
        </motion.div>
      </div>
      
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 max-w-[var(--content-max-width)] relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-between mb-16">
            <div>
              <div className="editorial-small mb-4">
                <span className="text-[var(--muted)]">06</span>
                <span className="lime-text ml-2">•</span>
              </div>
              <h2 className="editorial-h2 mb-4">{t('title')}</h2>
              <div className="editorial-line-accent-lime" />
            </div>
            <Link
              href="/portfolio"
              className="editorial-small text-[var(--muted)] hover:lime-text transition-colors"
            >
              {t('viewAll')} <span className="lime-text">→</span>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <motion.article
                key={project.id}
                className="border border-[var(--border)] p-8 bg-[var(--background)] hover:lime-border transition-colors group"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <h3 className="editorial-h3 mb-4 group-hover:lime-text transition-colors">
                  {project.title}
                </h3>
                <p className="editorial-body text-[var(--foreground)] mb-6">
                  {project.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {project.keyPoints.slice(0, 2).map((point, i) => (
                    <li key={i} className="editorial-body text-[var(--foreground)] flex items-start gap-3">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full lime-bg flex-shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2 pt-6 border-t border-[var(--divider)]">
                  {project.technologies.slice(0, 4).map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 text-xs font-sans text-[var(--foreground)] border border-[var(--border)] hover:lime-border hover:lime-text transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

