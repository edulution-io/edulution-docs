import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

interface TroubleshootingFAQProps {
  title?: string;
  subtitle?: string;
  faqs: FAQItem[];
}

const TroubleshootingFAQ: React.FC<TroubleshootingFAQProps> = ({
  title = "Probleme mit Mail-Clients?",
  subtitle = "Hier finden Sie Antworten auf die häufigsten Fragen zur Einrichtung und Fehlerbehebung.",
  faqs
}) => {
  const [openItems, setOpenItems] = useState<Set<string>>(new Set([faqs[0]?.id]));

  const toggleItem = (id: string) => {
    setOpenItems(prev => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  return (
    <div id="tw-scope" className="not-prose">
      <div className="max-w-none">
        <div className="max-w-none">
          <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            {title}
          </h2>
          <p className="mt-4 text-lg opacity-80">
            {subtitle}
          </p>

          <dl className="mt-16 divide-y divide-gray-200 dark:divide-[#2a2a2a]">
            {faqs.map((faq, index) => {
              const isOpen = openItems.has(faq.id);

              return (
                <div key={faq.id} className="py-6 first:pt-0 last:pb-0">
                  <dt>
                    <button
                      type="button"
                      onClick={() => toggleItem(faq.id)}
                      aria-expanded={isOpen}
                      className="flex w-full items-start justify-between text-left"
                    >
                      <span className="text-base/7 font-semibold">
                        {faq.question}
                      </span>
                      <span className="ml-6 flex h-7 items-center">
                        <FontAwesomeIcon
                          icon={isOpen ? faMinus : faPlus}
                          className="size-6"
                        />
                      </span>
                    </button>
                  </dt>
                  {isOpen && (
                    <dd className="mt-2 pr-12">
                      <div
                        className="text-base/7 opacity-80"
                        dangerouslySetInnerHTML={{ __html: faq.answer }}
                      />
                    </dd>
                  )}
                </div>
              );
            })}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default TroubleshootingFAQ;
