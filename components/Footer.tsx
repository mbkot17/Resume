'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';

export default function Footer() {
  const t = useTranslations('contact');

  return (
    <footer className="relative bg-[var(--background)] border-t border-[var(--divider)]">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 max-w-[var(--content-max-width)] py-12">
        <div className="text-center">
          <div className="editorial-small">
            <span className="text-[var(--muted)]">© {new Date().getFullYear()} </span>
            <span className="lime-text whitespace-nowrap">Marina Kotelevskaya</span>
            <span className="text-[var(--muted)]">. All rights reserved.</span>
          </div>
          <div className="editorial-divider mt-8" />
        </div>
      </div>
    </footer>
  );
}

