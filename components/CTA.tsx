'use client';

import { useTranslations } from 'next-intl';

export function CTA() {
  const t = useTranslations('cta');

  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            {t('title')}
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            {t('subtitle')}
          </p>
          <button className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
            {t('button')}
          </button>
        </div>
      </div>
    </section>
  );
}
