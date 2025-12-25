import { getRequestConfig } from 'next-intl/server';
import { routing } from './routing';

// Статический импорт всех сообщений
import ruMessages from '@/messages/ru.json';
import enMessages from '@/messages/en.json';

export default getRequestConfig(async ({ locale }) => {
  // Убеждаемся, что locale всегда строка
  const validLocale = locale || routing.defaultLocale;
  
  // Проверяем, что локаль валидна
  if (!routing.locales.includes(validLocale as any)) {
    throw new Error(`Invalid locale: ${validLocale}`);
  }

  // Используем статический импорт вместо динамического
  const messages = validLocale === 'ru' ? ruMessages : enMessages;

  return {
    locale: validLocale,
    messages
  };
});

