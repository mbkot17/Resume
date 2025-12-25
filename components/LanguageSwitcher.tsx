'use client';

import { useParams } from 'next/navigation';
import { Link, usePathname } from '@/lib/routing';
import { useLocale } from 'next-intl';

export default function LanguageSwitcher() {
  const params = useParams();
  const pathname = usePathname();
  // Получаем локаль из URL параметров для более надежного определения
  const localeFromParams = (params?.locale as string) || 'ru';
  // Также используем useLocale для совместимости
  const locale = useLocale();
  // Используем локаль из параметров, если доступна, иначе из хука
  const currentLocale = localeFromParams || locale;

  return (
    <div className="flex items-center gap-0.5 border border-[var(--border)]">
      <Link
        href={pathname}
        locale="ru"
        className={`px-3 py-1.5 text-xs uppercase tracking-wider font-medium transition-all relative ${
          currentLocale === 'ru'
            ? 'lime-text bg-[var(--background)]'
            : 'text-[var(--muted)] hover:lime-text hover:text-[var(--foreground)]'
        }`}
      >
        RU
        {currentLocale === 'ru' && (
          <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[var(--lime)]" />
        )}
      </Link>
      <div className="w-px h-4 bg-[var(--border)]" />
      <Link
        href={pathname}
        locale="en"
        className={`px-3 py-1.5 text-xs uppercase tracking-wider font-medium transition-all relative ${
          currentLocale === 'en'
            ? 'lime-text bg-[var(--background)]'
            : 'text-[var(--muted)] hover:lime-text hover:text-[var(--foreground)]'
        }`}
      >
        EN
        {currentLocale === 'en' && (
          <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[var(--lime)]" />
        )}
      </Link>
    </div>
  );
}

