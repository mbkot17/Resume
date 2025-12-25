'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { startup } from '@/data/resume';
import { Rocket, Zap, Code, Target } from 'lucide-react';

export default function Startup() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const icons = [
    { icon: Rocket, color: 'text-blue-600 dark:text-blue-400', bg: 'bg-blue-100 dark:bg-blue-900/30' },
    { icon: Zap, color: 'text-yellow-600 dark:text-yellow-400', bg: 'bg-yellow-100 dark:bg-yellow-900/30' },
    { icon: Code, color: 'text-purple-600 dark:text-purple-400', bg: 'bg-purple-100 dark:bg-purple-900/30' },
    { icon: Target, color: 'text-green-600 dark:text-green-400', bg: 'bg-green-100 dark:bg-green-900/30' },
  ];

  return (
    <section ref={ref} id="startup" className="relative pt-24 pb-12 bg-[var(--background)] overflow-hidden">
      <div className="editorial-divider" />
      
      {/* Black and white decorative elements */}
      <div className="absolute inset-0 z-0">
        <motion.div
          className="absolute top-1/3 right-0 w-80 h-96 bw-decorative"
          initial={{ opacity: 0, x: 100 }}
          animate={isInView ? { opacity: 0.1, x: 0 } : { opacity: 0, x: 100 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <div className="w-full h-full bg-gradient-to-l from-gray-800 to-gray-600 rounded-lg" />
        </motion.div>
        <motion.div
          className="absolute bottom-0 left-0 w-64 h-64 bw-decorative"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 0.08, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <div className="w-full h-full bg-gradient-to-tr from-gray-700 to-gray-500 rounded-full blur-2xl" />
        </motion.div>
      </div>
      
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 max-w-[var(--content-max-width)] relative z-10">
        <motion.div
          className="max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-8">
            <div className="editorial-small mb-4">
              <span className="text-[var(--muted)]">05</span>
              <span className="lime-text ml-2">•</span>
            </div>
            <div className="flex items-center gap-4 mb-4">
              <motion.div 
                className="w-12 h-12 border border-[var(--border)] lime-border flex items-center justify-center group/icon"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                <Rocket className="w-6 h-6 lime-text transition-transform duration-300 group-hover/icon:rotate-12" />
              </motion.div>
              <div>
                <h2 className="editorial-h2">Стартап</h2>
                <p className="editorial-small text-[var(--muted)]">Собственный проект</p>
              </div>
            </div>
            <div className="editorial-line-accent-lime" />
          </div>

          <div className="relative border border-[var(--border)] p-8 lg:p-10 bg-[var(--background)] hover:lime-border transition-all duration-300 group overflow-hidden">
            {/* Decorative corner accents */}
            <div className="absolute top-0 right-0 w-20 h-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute top-0 right-0 w-10 h-10 border-t-2 border-r-2 lime-border" />
            </div>
            <div className="absolute bottom-0 left-0 w-20 h-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-0 left-0 w-10 h-10 border-b-2 border-l-2 lime-border" />
            </div>
            
            {/* Gradient overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-lime/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            
            {/* Decorative line accent */}
            <motion.div
              className="absolute top-0 left-0 h-1 lime-bg"
              initial={{ width: 0 }}
              animate={isInView ? { width: '100%' } : { width: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            />
            
            <div className="relative z-10">
            <div className="mb-6">
              <h3 className="editorial-h3 mb-4 group-hover:lime-text transition-colors">
                {startup.name}
              </h3>
              <p className="editorial-body text-[var(--foreground)] mb-4">
                {startup.description}
              </p>
              <div className="flex items-center gap-4 editorial-small">
                <span className="text-[var(--muted)]">{startup.role}</span>
                <span className="lime-text">•</span>
                <span className="text-[var(--muted)]">{startup.period}</span>
              </div>
            </div>

            <div className="mb-6">
              <h4 className="editorial-h3 mb-6 text-[var(--primary)] flex items-center gap-2">
                <Target className="w-5 h-5 lime-text" />
                Ключевые достижения
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {startup.achievements.map((achievement, index) => {
                  const IconComponent = icons[index % icons.length].icon;
                  
                  return (
                    <motion.div
                      key={index}
                      className="relative flex items-start gap-3 p-4 border border-[var(--border)] hover:lime-border transition-all duration-300 group/item overflow-hidden"
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ duration: 0.4, delay: 0.1 * index }}
                      whileHover={{ scale: 1.02 }}
                    >
                      {/* Decorative corner for achievement cards */}
                      <div className="absolute top-0 right-0 w-6 h-6 opacity-0 group-hover/item:opacity-100 transition-opacity duration-300">
                        <div className="absolute top-0 right-0 w-3 h-3 border-t border-r lime-border" />
                      </div>
                      
                      {/* Gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-lime/3 opacity-0 group-hover/item:opacity-100 transition-opacity duration-300 pointer-events-none" />
                      
                      <div className="relative z-10 w-8 h-8 border border-[var(--border)] group-hover/item:lime-border flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover/item:scale-110">
                        <IconComponent className="w-4 h-4 lime-text transition-transform duration-300 group-hover/item:rotate-12" />
                      </div>
                      <p className="editorial-body text-[var(--foreground)] relative z-10">{achievement}</p>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            <div>
              <h4 className="editorial-h3 mb-6 text-[var(--primary)] flex items-center gap-2">
                <Code className="w-5 h-5 lime-text" />
                Технологии
              </h4>
              <div className="flex flex-wrap gap-2">
                {startup.technologies.map((tech, i) => (
                  <motion.span
                    key={i}
                    className="px-3 py-1.5 text-sm font-sans text-[var(--foreground)] border border-[var(--border)] hover:lime-border hover:lime-text transition-all duration-300"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3, delay: 0.5 + i * 0.05 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

