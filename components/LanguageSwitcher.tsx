'use client';

import { useLocale } from 'next-intl';
import { useRouter, usePathname } from '@/i18n/routing';
import { useState, useTransition } from 'react';

export function LanguageSwitcher() {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const locale = useLocale();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const switchLanguage = (newLocale: string) => {
    startTransition(() => {
      // The router from i18n/routing automatically handles locale switching
      router.replace(pathname, { locale: newLocale as any });
      setIsOpen(false);
    });
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 rounded-lg bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors flex items-center gap-2"
        disabled={isPending}
      >
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
          />
        </svg>
        <span className="text-sm font-medium uppercase">{locale}</span>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-32 rounded-lg bg-white dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden z-50">
          <button
            onClick={() => switchLanguage('en')}
            className={`w-full px-4 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors ${
              locale === 'en' ? 'bg-gray-100 dark:bg-gray-700' : ''
            }`}
          >
            English
          </button>
          <button
            onClick={() => switchLanguage('th')}
            className={`w-full px-4 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors ${
              locale === 'th' ? 'bg-gray-100 dark:bg-gray-700' : ''
            }`}
          >
            ไทย
          </button>
        </div>
      )}
    </div>
  );
}
