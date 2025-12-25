'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function Hero() {
  const t = useTranslations('hero');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <section className="relative min-h-screen flex items-start justify-center bg-[var(--background)] overflow-hidden pt-20 lg:pt-0">
      {/* Minimal decorative line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-[var(--divider)] z-10" />
      
      {/* Black and white decorative photo/elements */}
      <div className="absolute inset-0 z-0">
        {/* Large decorative photo element - right side */}
        <motion.div
          className="absolute top-1/4 -right-32 w-96 h-[400px] bw-decorative"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 0.12, x: 0 }}
          transition={{ duration: 1.2, delay: 0.5 }}
        >
          <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-600 rounded-lg" />
        </motion.div>
        
        {/* Small decorative element - left side */}
        <motion.div
          className="absolute bottom-1/4 -left-24 w-64 h-64 bw-decorative"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 0.08, x: 0 }}
          transition={{ duration: 1.2, delay: 0.7 }}
        >
          <div className="w-full h-full bg-gradient-to-tr from-gray-700 to-gray-500 rounded-full" />
        </motion.div>
        
        {/* Main photo - right side */}
        <motion.div
          className="absolute top-1/2 -translate-y-1/2 right-8 w-[420px] h-[560px] hidden lg:block z-0 group"
          initial={{ opacity: 0, scale: 0.9, x: 50 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <div className="relative w-full h-full photo-overlay">
            <Image
              src="/images/photo-main.jpg"
              alt="Marina Kotelevskaya"
              fill
              className="object-cover rounded-lg bw-photo-strong transition-all duration-500 group-hover:opacity-80"
              priority
              sizes="(max-width: 1024px) 0vw, 420px"
            />
            {/* Lime accent lines */}
            <motion.div 
              className="absolute -left-2 top-1/2 -translate-y-1/2 w-1 h-24 lime-bg"
              initial={{ height: 0 }}
              animate={{ height: 96 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            />
            <motion.div 
              className="absolute -bottom-2 left-1/4 w-16 h-1 lime-bg"
              initial={{ width: 0 }}
              animate={{ width: 64 }}
              transition={{ duration: 0.8, delay: 1.4 }}
            />
            {/* Lime accent dot */}
            <motion.div
              className="absolute -right-2 top-1/3 w-2 h-2 rounded-full lime-bg"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.4, delay: 1.6, type: "spring" }}
            />
          </div>
        </motion.div>
      </div>

      <div className="container mx-auto px-6 sm:px-8 lg:px-12 max-w-[var(--content-max-width)] relative z-10">
        <motion.div
          className="py-12 lg:py-20 lg:w-1/2 xl:w-[60%]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {/* Editorial header with lime accent */}
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="editorial-small text-[var(--muted)]">Resume</span>
            <span className="editorial-small lime-text ml-2">•</span>
          </motion.div>

          {/* Main name - large serif typography with lime accent */}
          <motion.h1
            className="font-serif text-7xl sm:text-8xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-bold mb-6 leading-[1.1] tracking-tight break-words"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <span className="text-[var(--primary)]">{t('name')}</span>
            <motion.span
              className="lime-text ml-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              •
            </motion.span>
          </motion.h1>
          
          {/* Decorative line accent with lime */}
          <motion.div
            className="editorial-line-accent-lime mb-8"
            initial={{ width: 0 }}
            animate={{ width: 60 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          />

          {/* Title and subtitle - editorial style with lime accent */}
          <motion.div
            className="mb-12 max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h2 className="font-sans text-3xl sm:text-4xl lg:text-5xl font-semibold mb-4 leading-tight tracking-tight">
              <span className="text-[var(--primary)]">{t('title')}</span>
              <motion.span
                className="lime-text ml-3"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7, type: "spring" }}
              >
                →
              </motion.span>
            </h2>
            <p className="font-sans text-xl sm:text-2xl text-[var(--muted)] leading-relaxed font-light">
              {t('subtitle')}
            </p>
          </motion.div>

          {/* Description - column layout */}
          <motion.div
            className="editorial-columns-2 mb-12 max-w-4xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <p className="editorial-body text-[var(--foreground)] mb-4">
            {t('description')}
            </p>
          </motion.div>

          {/* Meta information with lime accents */}
          <motion.div
            className="flex flex-wrap items-center gap-6 text-sm text-[var(--muted)] uppercase tracking-wider"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4 lime-text" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              {t('location')}
            </span>
            <span className="lime-text">•</span>
            <span>{t('citizenship')}</span>
          </motion.div>
        </motion.div>
      </div>

      {/* Minimal scroll indicator with lime accent */}
      <motion.div
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-xs text-[var(--muted)] tracking-wider uppercase">{t('scroll')}</span>
          <svg 
            className="w-5 h-5 lime-text" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}

