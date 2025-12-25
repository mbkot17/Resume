'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const sections = ['about', 'achievements', 'experience', 'skills', 'startup', 'projects', 'education', 'additional', 'contact'];

export default function TableOfContents() {
  const t = useTranslations('navigation');
  const [activeSection, setActiveSection] = useState<string>('');

  // Определение активного раздела при скролле
  useEffect(() => {
    const handleScroll = () => {
      const headerHeight = 80;
      const scrollPosition = window.scrollY + headerHeight + 100;

      // Находим раздел, который находится ближе всего к верху viewport
      let currentSection = '';
      let minDistance = Infinity;

      sections.forEach((sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          const elementTop = window.scrollY + rect.top;
          const distance = Math.abs(elementTop - scrollPosition);

          // Если раздел виден и находится выше текущей позиции или ближе к ней
          if (elementTop <= scrollPosition + 200 && distance < minDistance) {
            minDistance = distance;
            currentSection = sectionId;
          }
        }
      });

      if (currentSection) {
        setActiveSection((prev) => (prev !== currentSection ? currentSection : prev));
      }
    };

    // Устанавливаем начальный активный раздел
    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerHeight = 80; // Высота Header
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - headerHeight,
        behavior: 'smooth',
      });
    }
  };

  return (
    <nav className="hidden lg:flex items-center gap-6">
      {sections.map((sectionId) => {
        const isActive = activeSection === sectionId;
        return (
          <button
            key={sectionId}
            onClick={() => scrollToSection(sectionId)}
            className={`relative text-xs uppercase tracking-wider font-medium transition-colors py-2 ${
              isActive
                ? 'lime-text text-[var(--foreground)]'
                : 'text-[var(--muted)] hover:text-[var(--foreground)] hover:lime-text'
            }`}
          >
            {t(sectionId)}
            {isActive && (
              <motion.span
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-[var(--lime)]"
                layoutId="activeIndicator"
                initial={false}
                transition={{ type: 'spring', stiffness: 500, damping: 30 }}
              />
            )}
          </button>
        );
      })}
    </nav>
  );
}

