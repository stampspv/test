'use client';

import { useTranslations } from 'next-intl';

export function Pricing() {
  const t = useTranslations('pricing');

  const plans = [
    {
      name: t('starter.name'),
      price: t('starter.price'),
      period: t('starter.period'),
      features: [
        t('starter.features.0'),
        t('starter.features.1'),
        t('starter.features.2'),
        t('starter.features.3'),
      ],
      cta: t('starter.cta'),
      popular: false,
    },
    {
      name: t('pro.name'),
      price: t('pro.price'),
      period: t('pro.period'),
      features: [
        t('pro.features.0'),
        t('pro.features.1'),
        t('pro.features.2'),
        t('pro.features.3'),
        t('pro.features.4'),
      ],
      cta: t('pro.cta'),
      popular: true,
    },
    {
      name: t('enterprise.name'),
      price: t('enterprise.price'),
      period: t('enterprise.period'),
      features: [
        t('enterprise.features.0'),
        t('enterprise.features.1'),
        t('enterprise.features.2'),
        t('enterprise.features.3'),
        t('enterprise.features.4'),
      ],
      cta: t('enterprise.cta'),
      popular: false,
    },
  ];

  return (
    <section id="pricing" className="py-20 sm:py-32 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            {t('title')}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative p-8 rounded-2xl ${
                plan.popular
                  ? 'bg-gradient-to-br from-blue-600 to-purple-600 text-white shadow-2xl transform scale-105'
                  : 'bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-yellow-400 text-gray-900 text-sm font-bold px-4 py-1 rounded-full">
                    {t('pro.popular')}
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="flex items-baseline">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className={`ml-2 ${plan.popular ? 'text-blue-100' : 'text-gray-600 dark:text-gray-400'}`}>
                    {plan.period}
                  </span>
                </div>
              </div>

              <ul className="mb-8 space-y-3">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <svg
                      className={`w-5 h-5 mr-2 mt-0.5 flex-shrink-0 ${
                        plan.popular ? 'text-white' : 'text-green-500'
                      }`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className={plan.popular ? 'text-blue-50' : ''}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 px-6 rounded-lg font-semibold transition-all ${
                  plan.popular
                    ? 'bg-white text-blue-600 hover:bg-gray-100'
                    : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700'
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
