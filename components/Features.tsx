'use client';

import { useTranslations } from 'next-intl';

export function Features() {
  const t = useTranslations('features');

  const features = [
    {
      icon: '⚡',
      title: t('feature1.title'),
      description: t('feature1.description'),
    },
    {
      icon: '🔒',
      title: t('feature2.title'),
      description: t('feature2.description'),
    },
    {
      icon: '🔗',
      title: t('feature3.title'),
      description: t('feature3.description'),
    },
    {
      icon: '💬',
      title: t('feature4.title'),
      description: t('feature4.description'),
    },
  ];

  return (
    <section id="features" className="py-20 sm:py-32 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            {t('title')}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 border border-gray-200 dark:border-gray-600 hover:shadow-xl transition-all transform hover:-translate-y-1"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
