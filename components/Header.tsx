'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/lib/routing';
import TableOfContents from './TableOfContents';
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
        <div className="w-full px-6 sm:px-8 lg:px-10 py-4 flex items-center justify-between gap-4">
          <Link 
            href="/" 
            className="font-serif text-2xl font-bold text-[var(--primary)] hover:lime-text transition-colors shrink-0"
          >
            MK<span className="lime-text">•</span>
          </Link>
          
          <div className="flex-1 flex justify-center overflow-x-auto no-scrollbar">
            <TableOfContents />
          </div>

          <div className="flex items-center gap-6 shrink-0">
            <Link 
              href="/portfolio" 
              className="text-xs sm:text-sm lime-text font-medium uppercase tracking-wider hover:text-[var(--primary)] transition-colors whitespace-nowrap"
            >
              {t('viewPortfolio')}
            </Link>
            {/* temporarily hidden */}
          </div>
        </div>
      </nav>
    </motion.header>
  );
}

