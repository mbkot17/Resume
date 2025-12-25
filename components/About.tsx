'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

export default function About() {
  const t = useTranslations('about');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Получаем первую букву для буквицы
  const description = t('description');
  const firstLetter = description.charAt(0);
  const remainingDescription = description.slice(1);

  return (
    <section id="about" ref={ref} className="relative py-5 bg-[var(--background)] overflow-hidden">
      <div className="editorial-divider" />
      
      {/* Decorative large background text */}
      <div className="absolute top-1/2 -left-12 -translate-y-1/2 select-none pointer-events-none z-0 hidden lg:block">
        <motion.span 
          className="text-[20rem] font-serif font-black text-gray-200/5 leading-none"
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 1.5, delay: 0.2 }}
        >
          {t('decorativeText')}
        </motion.span>
      </div>

      <div className="container mx-auto px-6 sm:px-8 lg:px-12 max-w-[var(--content-max-width)] relative z-10">
        {/* Section header */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="editorial-small mb-4 flex items-center gap-3"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.2 }}
          >
            <span className="text-[var(--muted)]">01</span>
            <div className="h-px w-8 bg-[var(--divider)]" />
            <span className="lime-text uppercase tracking-widest text-[10px]">{t('subtitle')}</span>
          </motion.div>
          <motion.h2
            className="text-6xl md:text-8xl font-serif mb-6 leading-none tracking-tighter"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.3 }}
          >
            {t('title')}
          </motion.h2>
        </motion.div>

        {/* Newspaper Layout: Text flows in columns starting from photo */}
        <motion.div
          className="editorial-columns-2 gap-12 text-justify"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {/* Photo - First element in columns */}
          <motion.div
            className="relative aspect-[3/4] w-full mb-8 break-inside-avoid"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="absolute -inset-4 border border-[var(--border)] z-0" />
            <div className="absolute -inset-4 border-r-2 border-b-2 lime-border z-0 opacity-40" />
            
            <div className="relative w-full h-full overflow-hidden rounded-sm photo-overlay">
              <Image
                src="/images/photo-secondary.jpg"
                alt=""
                fill
                className="object-cover bw-photo transition-all duration-1000 grayscale hover:grayscale-0 hover:scale-105"
                sizes="(max-width: 768px) 100vw, 500px"
              />
            </div>

            {/* Decorative lime elements on photo */}
            <motion.div 
              className="absolute -right-2 top-1/4 w-1 h-24 lime-bg z-20"
              initial={{ height: 0 }}
              animate={isInView ? { height: 20 } : { height: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            />
          </motion.div>

          {/* First Paragraph with Drop Cap */}
          <p className="editorial-body text-[var(--foreground)] leading-[1.8] whitespace-pre-line mb-8">
            <span className="float-left text-8xl font-serif font-bold leading-[0.7] mr-3 mt-2 lime-text">
              {firstLetter}
            </span>
            {remainingDescription}
          </p>
          
          {/* Second Paragraph */}
          <p className="editorial-body text-[var(--foreground)] leading-[1.8] whitespace-pre-line mb-7 border-l-4 border-[var(--lime)] pl-6 italic bg-gray-40/20 break-inside-avoid shadow-sm">
            {t('description2')}
          </p>
        </motion.div>
        
        {/* Quote-style final block - Full width emphasis */}
        <motion.div
          className="relative pt-16 mt-16 border-t-2 border-[var(--foreground)]"
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ delay: 0.4 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-9">
              <blockquote className="text-3xl md:text-3xl font-serif leading-tight text-[var(--foreground)] italic tracking-tight">
                «{t('description3')}»
              </blockquote>
            </div>
            <div className="md:col-span-3 flex justify-end">
              <div className="w-32 h-32 rounded-full border-2 border-[var(--lime)] flex items-center justify-center p-6 rotate-12 hover:rotate-0 transition-transform duration-500">
                <span className="editorial-small text-[10px] text-center font-bold lime-text uppercase leading-tight">
                  {t('finalBadge')}
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

