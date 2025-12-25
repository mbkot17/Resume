'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Phone, Mail, MessageCircle, Send } from 'lucide-react';

export default function Contact() {
  const t = useTranslations('contact');
  const tCommon = useTranslations('common');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const contacts = [
    {
      type: 'phone',
      href: `tel:${t('phone').replace(/\s/g, '')}`,
      label: t('phone'),
      icon: Phone,
    },
    {
      type: 'email',
      href: `mailto:${t('email')}`,
      label: t('email'),
      icon: Mail,
    },
    {
      type: 'whatsapp',
      href: 'https://wa.me/972524535045',
      label: '+972 (52) 453-5045',
      icon: MessageCircle,
    },
    {
      type: 'telegram',
      href: 'https://t.me/mbkot7',
      label: '@mbkot7',
      icon: Send,
    },
  ];

  return (
    <section ref={ref} id="contact" className="relative py-5 bg-[var(--background)] overflow-hidden">
      <div className="editorial-divider" />
      
      {/* Black and white decorative elements */}
      <div className="absolute inset-0 z-0">
        <motion.div
          className="absolute top-0 left-1/4 w-96 h-96 bw-decorative"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 0.1, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-600 rounded-full blur-3xl" />
        </motion.div>
        <motion.div
          className="absolute bottom-0 right-0 w-80 h-64 bw-decorative"
          initial={{ opacity: 0, x: 100 }}
          animate={isInView ? { opacity: 0.08, x: 0 } : { opacity: 0, x: 100 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <div className="w-full h-full bg-gradient-to-bl from-gray-700 to-gray-500 rounded-lg" />
        </motion.div>
      </div>
      
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 max-w-[var(--content-max-width)] relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <div className="editorial-small mb-4">
            <span className="text-[var(--muted)]">09</span>
            <span className="lime-text ml-2">•</span>
          </div>
          <h2 className="editorial-h2 mb-4">{t('title')}</h2>
          <div className="editorial-line-accent-lime mb-12" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contacts.map((contact, index) => {
              const IconComponent = contact.icon;
              const typeLabels: Record<string, string> = {
                phone: t('phoneLabel'),
                email: t('emailLabel'),
                whatsapp: t('whatsappLabel'),
                telegram: t('telegramLabel'),
              };
              
              return (
                <motion.a
                  key={contact.type}
                  href={contact.href}
                  target={contact.type === 'whatsapp' || contact.type === 'telegram' ? '_blank' : undefined}
                  rel={contact.type === 'whatsapp' || contact.type === 'telegram' ? 'noopener noreferrer' : undefined}
                  className="border border-[var(--border)] p-6 bg-[var(--background)] hover:lime-border transition-colors group min-w-0"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <div className="w-12 h-12 mb-4 flex items-center justify-center border border-[var(--border)] group-hover:lime-border transition-colors">
                    <IconComponent className="w-6 h-6 lime-text" />
                  </div>
                  <h3 className="editorial-h3 mb-2 group-hover:lime-text transition-colors">
                    {typeLabels[contact.type]}
                  </h3>
                  <p className="editorial-body text-[var(--foreground)] text-sm break-words break-all">
                    {contact.label}
                  </p>
                </motion.a>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

