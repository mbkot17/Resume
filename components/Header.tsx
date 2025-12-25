'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/lib/routing';
import LanguageSwitcher from './LanguageSwitcher';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { useState } from 'react';

export default function Header() {
  const t = useTranslations('common');
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setScrolled(latest > 50);
  });

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 bg-[var(--background)]/95 backdrop-blur-sm"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <nav className="border-b border-[var(--divider)]">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 max-w-[var(--content-max-width)] py-4 flex items-center justify-between">
          <Link 
            href="/" 
            className="font-serif text-2xl font-bold text-[var(--primary)] hover:lime-text transition-colors"
          >
            MK<span className="lime-text">•</span>
          </Link>
          <div className="flex items-center gap-8">
            <Link 
              href="/portfolio" 
              className="text-sm text-[var(--muted)] uppercase tracking-wider hover:lime-text transition-colors"
          >
            {t('viewPortfolio')}
          </Link>
          <LanguageSwitcher />
          </div>
        </div>
      </nav>
    </motion.header>
  );
}

