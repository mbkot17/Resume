'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';

export default function Footer() {
  const tContact = useTranslations('contact');
  const tHero = useTranslations('hero');

  return (
    <footer className="relative bg-[var(--background)] border-t border-[var(--divider)]">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 max-w-[var(--content-max-width)] py-12">
        <div className="text-center">
          <div className="editorial-small">
            <span className="text-[var(--muted)]">© {new Date().getFullYear()} </span>
            <span className="lime-text">
              <span className="whitespace-nowrap">{tHero('surname')}</span>{' '}
              <span className="whitespace-nowrap">{tHero('name')}</span>
            </span>
            <span className="text-[var(--muted)]">. All rights reserved.</span>
          </div>
          <div className="editorial-divider mt-8" />
        </div>
      </div>
    </footer>
  );
}

