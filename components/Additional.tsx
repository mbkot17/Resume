'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Bot, Globe, TestTube, BookOpen } from 'lucide-react';

export default function Additional() {
  const t = useTranslations('additional');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const items = [
    {
      key: 'telegram-bots',
      icon: Bot,
    },
    {
      key: 'web-services',
      icon: Globe,
    },
    {
      key: 'postman',
      icon: TestTube,
    },
    {
      key: 'publication',
      icon: BookOpen,
    },
  ];

  return (
    <section ref={ref} id="additional" className="relative py-5 bg-[var(--background)] overflow-hidden">
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
        <motion.div
          className="absolute bottom-0 right-1/4 w-80 h-64 bw-decorative"
          initial={{ opacity: 0, x: 100 }}
          animate={isInView ? { opacity: 0.08, x: 0 } : { opacity: 0, x: 100 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <div className="w-full h-full bg-gradient-to-bl from-gray-700 to-gray-500 rounded-lg" />
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
            <span className="text-[var(--muted)]">08</span>
            <span className="lime-text ml-2">•</span>
          </div>
          <h2 className="editorial-h2 mb-4">{t('title')}</h2>
          <div className="editorial-line-accent-lime" />
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {items.map((item, index) => {
            const IconComponent = item.icon;
            const isEven = index % 2 === 0;
            return (
              <motion.article
                key={item.key}
                className="relative border border-[var(--border)] p-8 bg-[var(--background)] hover:lime-border transition-all duration-300 group overflow-hidden"
                initial={{ opacity: 0, y: 20, x: isEven ? -20 : 20 }}
                animate={isInView ? { opacity: 1, y: 0, x: 0 } : { opacity: 0, y: 20, x: isEven ? -20 : 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                {/* Decorative corner accent */}
                <div className="absolute top-0 right-0 w-16 h-16 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 lime-border" />
                </div>
                <div className="absolute bottom-0 left-0 w-16 h-16 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 lime-border" />
                </div>
                
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-lime/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                
                {/* Decorative line accent */}
                <motion.div
                  className="absolute top-0 left-0 h-1 lime-bg"
                  initial={{ width: 0 }}
                  animate={isInView ? { width: '100%' } : { width: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                />
                
                <div className="relative z-10">
                  <div className="w-12 h-12 mb-6 flex items-center justify-center border border-[var(--border)] group-hover:lime-border transition-all duration-300 group-hover:scale-110">
                    <IconComponent className="w-6 h-6 lime-text transition-transform duration-300 group-hover:rotate-12" />
                  </div>
                <h3 className="editorial-h3 mb-4 group-hover:lime-text transition-colors">
                  {t(`${item.key}.title`)}
                </h3>
                <p className="editorial-body text-[var(--foreground)] mb-4">
                  {t(`${item.key}.description`)}
                </p>
                {(() => {
                  const details = t.raw(`${item.key}.details`);
                  return details && Array.isArray(details) && details.length > 0 ? (
                    <ul className="space-y-2 mb-4">
                      {details.map((detail: string, i: number) => (
                        <li key={i} className="editorial-body text-[var(--foreground)] flex items-start gap-3">
                          <span className="mt-2 w-1.5 h-1.5 rounded-full lime-bg flex-shrink-0" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  ) : null;
                })()}
                {(() => {
                  const technologies = t.raw(`${item.key}.technologies`);
                  return technologies && Array.isArray(technologies) && technologies.length > 0 ? (
                    <div className="flex flex-wrap gap-2 pt-4 border-t border-[var(--divider)]">
                      {technologies.map((tech: string, i: number) => (
                        <span
                          key={i}
                          className="px-2 py-1 text-xs font-sans text-[var(--foreground)] border border-[var(--border)] hover:lime-border hover:lime-text transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  ) : null;
                })()}
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

