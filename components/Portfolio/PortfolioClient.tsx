'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Link } from '@/lib/routing';
import { projects } from '@/data/resume';
import { ArrowLeft, Code, Database, Zap, Network, CheckCircle2 } from 'lucide-react';

export default function PortfolioClient() {
  const t = useTranslations('projects');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const iconMap = {
    integration: Network,
    development: Code,
    database: Database,
    automation: Zap,
  };

  return (
    <section ref={ref} className="relative min-h-screen py-24 bg-[var(--background)] overflow-hidden">
      <div className="editorial-divider" />
      
      {/* Black and white decorative elements */}
      <div className="absolute inset-0 z-0">
        <motion.div
          className="absolute top-0 right-0 w-96 h-96 bw-decorative"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 0.1, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <div className="w-full h-full bg-gradient-to-bl from-gray-800 to-gray-600 rounded-full blur-3xl" />
        </motion.div>
        <motion.div
          className="absolute bottom-1/4 left-0 w-80 h-96 bw-decorative"
          initial={{ opacity: 0, x: -100 }}
          animate={isInView ? { opacity: 0.08, x: 0 } : { opacity: 0, x: -100 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <div className="w-full h-full bg-gradient-to-r from-gray-700 to-gray-500 rounded-lg" />
        </motion.div>
        <motion.div
          className="absolute top-1/2 right-1/4 w-64 h-64 bw-decorative"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 0.06, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <div className="w-full h-full bg-gradient-to-tr from-gray-800 to-gray-600 rounded-full blur-2xl" />
        </motion.div>
      </div>
      
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 max-w-[var(--content-max-width)] relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 editorial-small text-[var(--muted)] hover:lime-text transition-colors mb-12 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:translate-x-[-4px] transition-transform" />
            Назад к резюме
          </Link>
          
          <div className="mb-8">
            <div className="editorial-small mb-4">
              <span className="text-[var(--muted)]">Portfolio</span>
              <span className="lime-text ml-2">•</span>
            </div>
            <h1 className="editorial-h1 mb-6 text-[var(--primary)]">
            Портфолио проектов
          </h1>
            <div className="editorial-line-accent-lime mb-6" />
            <p className="editorial-body text-[var(--foreground)] max-w-3xl">
            Комплексные интеграционные решения и автоматизация процессов для корпоративных систем
          </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 gap-12 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              className="border border-[var(--border)] p-8 lg:p-12 bg-[var(--background)] hover:lime-border transition-colors group"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              {/* Project header */}
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 border border-[var(--border)] group-hover:lime-border flex items-center justify-center transition-colors">
                    <Code className="w-5 h-5 lime-text" />
                  </div>
                  <span className="editorial-small text-[var(--muted)]">{project.role}</span>
                </div>
                <h2 className="editorial-h2 mb-4 group-hover:lime-text transition-colors">
                  {project.title}
                </h2>
                <div className="editorial-line-accent-lime mb-6" />
                <p className="editorial-body text-[var(--foreground)] editorial-columns-2">
                  {project.description}
                </p>
              </div>

              {/* Key achievements */}
              <div className="mb-8 pt-8 border-t border-[var(--divider)]">
                <h3 className="editorial-h3 mb-6 text-[var(--primary)] flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 lime-text" />
                  Ключевые достижения
                </h3>
                <ul className="space-y-4">
                  {project.keyPoints.map((point, i) => (
                    <li key={i} className="editorial-body text-[var(--foreground)] flex items-start gap-3">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full lime-bg flex-shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              <div className="pt-8 border-t border-[var(--divider)]">
                <h3 className="editorial-h3 mb-6 text-[var(--primary)] flex items-center gap-2">
                  <Database className="w-5 h-5 lime-text" />
                  Технологии
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 text-sm font-sans text-[var(--foreground)] border border-[var(--border)] hover:lime-border hover:lime-text transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

