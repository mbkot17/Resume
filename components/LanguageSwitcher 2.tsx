'use client';

import { useLocale } from 'next-intl';
import { Link, usePathname } from '@/lib/routing';

export default function LanguageSwitcher() {
  const locale = useLocale();
  // В next-intl `usePathname` возвращает путь БЕЗ префикса локали (например, '/' или '/portfolio')
  const pathname = usePathname();

  return (
    <div className="flex items-center gap-0.5 border border-[var(--border)]">
      <Link
        href={pathname}
        locale="ru"
        className={`px-3 py-1.5 text-xs uppercase tracking-wider font-medium transition-all relative ${
          locale === 'ru'
            ? 'lime-text bg-[var(--background)]'
            : 'text-[var(--muted)] hover:lime-text hover:text-[var(--foreground)]'
        }`}
      >
        RU
        {locale === 'ru' && (
          <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[var(--lime)]" />
        )}
      </Link>
      <div className="w-px h-4 bg-[var(--border)]" />
      <Link
        href={pathname}
        locale="en"
        className={`px-3 py-1.5 text-xs uppercase tracking-wider font-medium transition-all relative ${
          locale === 'en'
            ? 'lime-text bg-[var(--background)]'
            : 'text-[var(--muted)] hover:lime-text hover:text-[var(--foreground)]'
        }`}
      >
        EN
        {locale === 'en' && (
          <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[var(--lime)]" />
        )}
      </Link>
    </div>
  );
}

