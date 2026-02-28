import { en } from './en';
import { sk } from './sk';

export const languages = {
  en: 'English',
  sk: 'Slovenčina',
} as const;

export type Locale = keyof typeof languages;
export const defaultLocale: Locale = 'sk';

const translations = { en, sk };

export function t(locale: Locale) {
  return translations[locale] ?? translations[defaultLocale];
}

/** Given a URL pathname, return the current locale or the default */
export function getLocaleFromUrl(url: URL): Locale {
  const [, firstSegment] = url.pathname.split('/');
  if (firstSegment in languages) return firstSegment as Locale;
  return defaultLocale;
}

/** Swap the locale prefix in a pathname */
export function switchLocale(pathname: string, targetLocale: Locale): string {
  const segments = pathname.split('/').filter(Boolean);
  if (segments[0] in languages) {
    segments[0] = targetLocale;
  } else {
    segments.unshift(targetLocale);
  }
  // Default locale (sk) has no prefix – others do
  if (targetLocale === defaultLocale) {
    segments.shift();
  }
  return '/' + segments.join('/');
}
