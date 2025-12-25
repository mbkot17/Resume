'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Network, Settings, Zap, Database, RefreshCw, TrendingUp } from 'lucide-react';

export default function Achievements() {
  const t = useTranslations('achievements');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const achievements = [
    {
      key: 'integration',
      icon: Network,
    },
    {
      key: 'processes',
      icon: Settings,
    },
    {
      key: 'automation',
      icon: Zap,
    },
    {
      key: 'databases',
      icon: Database,
    },
    {
      key: 'refactoring',
      icon: RefreshCw,
    },
    {
      key: 'performance',
      icon: TrendingUp,
    },
  ];

  return (
    <section ref={ref} className="relative py-5 bg-[var(--background)] overflow-hidden">
      <div className="editorial-divider" />
      
      {/* Black and white decorative elements */}
      <div className="absolute inset-0 z-0">
        <motion.div
          className="absolute top-1/2 right-0 w-96 h-96 bw-decorative"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 0.1, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <div className="w-full h-full bg-gradient-to-bl from-gray-800 to-gray-600 rounded-full blur-3xl" />
        </motion.div>
        <motion.div
          className="absolute bottom-0 left-1/3 w-64 h-80 bw-decorative"
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 0.08, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <div className="w-full h-full bg-gradient-to-tr from-gray-700 to-gray-500 rounded-lg" />
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
          <span className="text-[var(--muted)]">02</span>
            <span className="lime-text ml-2">•</span>
          </div>
          <h2 className="editorial-h2 mb-4">{t('title')}</h2>
          <div className="editorial-line-accent-lime" />
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => {
            const IconComponent = achievement.icon;
            return (
              <motion.article
                key={achievement.key}
                className="border border-[var(--border)] p-8 bg-[var(--background)] hover:lime-border transition-colors group"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <div className="w-12 h-12 mb-6 flex items-center justify-center border border-[var(--border)] group-hover:lime-border transition-colors">
                  <IconComponent className="w-6 h-6 lime-text" />
                </div>
                <h3 className="editorial-h3 mb-4 group-hover:lime-text transition-colors">
                  {t(`${achievement.key}.title`)}
                </h3>
                <p className="editorial-body text-[var(--foreground)]">
                  {t(`${achievement.key}.description`)}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

