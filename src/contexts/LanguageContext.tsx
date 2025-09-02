import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'de' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  de: {
    // Navigation
    'nav.home': 'Startseite',
    'nav.services': 'Dienstleistungen',
    'nav.about': 'Über uns',
    'nav.contact': 'Kontakt',
    'nav.prices': 'Preise',
    
    // Hero
    'hero.title': 'Professionelle Wäscherei & Reinigungsservice',
    'hero.subtitle': 'Seit über 20 Jahren sorgen wir für saubere und gepflegte Wäsche. Vertrauen Sie auf unsere Erfahrung und Qualität.',
    'hero.cta': 'Jetzt Termin vereinbaren',
    'hero.contact': 'Kontakt aufnehmen',
    
    // Services
    'services.title': 'Unsere Dienstleistungen',
    'services.subtitle': 'Wir bieten Ihnen ein umfassendes Angebot an professionellen Reinigungs- und Wäschedienstleistungen',
    'services.dry-cleaning': 'Chemische Reinigung',
    'services.dry-cleaning.desc': 'Professionelle Reinigung für empfindliche Textilien und Anzüge',
    'services.laundry': 'Wäsche waschen & falten',
    'services.laundry.desc': 'Komplette Wäschebehandlung mit sorgfältigem Falten',
    'services.ironing': 'Bügelservice',
    'services.ironing.desc': 'Perfekt gebügelte Hemden und Textilien',
    'services.alterations': 'Änderungsschneiderei',
    'services.alterations.desc': 'Professionelle Änderungen und Reparaturen',
    
    // About
    'about.title': 'Über uns',
    'about.text': 'Seit 1985 führen wir unseren Familienbetrieb mit Leidenschaft und Hingabe. Was als kleine Wäscherei begann, ist heute ein moderner Reinigungsservice mit traditionellen Werten. Wir behandeln jedes Kleidungsstück mit der Sorgfalt, die es verdient.',
    'about.values.title': 'Unsere Werte',
    'about.values.quality': 'Qualität',
    'about.values.quality.desc': 'Höchste Standards bei jeder Behandlung',
    'about.values.trust': 'Vertrauen',
    'about.values.trust.desc': 'Zuverlässiger Service seit Generationen',
    'about.values.care': 'Sorgfalt',
    'about.values.care.desc': 'Jedes Stück wird individuell behandelt',
    
    // Contact
    'contact.title': 'Kontakt',
    'contact.subtitle': 'Haben Sie Fragen oder möchten einen Termin vereinbaren? Wir sind gerne für Sie da.',
    'contact.form.name': 'Name',
    'contact.form.email': 'E-Mail',
    'contact.form.phone': 'Telefon',
    'contact.form.message': 'Nachricht',
    'contact.form.submit': 'Nachricht senden',
    'contact.info.title': 'Kontaktdaten',
    'contact.info.address': 'Musterstraße 123, 12345 Musterstadt',
    'contact.info.phone': '+49 123 456789',
    'contact.info.email': 'info@waescherei-mustermann.de',
    'contact.info.hours': 'Öffnungszeiten',
    'contact.info.hours.weekdays': 'Mo-Fr: 7:00 - 18:00',
    'contact.info.hours.saturday': 'Sa: 8:00 - 14:00',
    'contact.info.hours.sunday': 'So: geschlossen',
    
    // Prices
    'prices.title': 'Preise',
    'prices.subtitle': 'Transparente und faire Preisgestaltung für alle unsere Dienstleistungen',
    'prices.washing.title': 'Waschen & Trocknen',
    'prices.washing.standard': 'Standard Wäsche',
    'prices.washing.delicate': 'Feinwäsche',
    'prices.washing.bedding': 'Bettwäsche',
    'prices.dry-cleaning.title': 'Chemische Reinigung',
    'prices.dry-cleaning.suit': 'Anzug',
    'prices.dry-cleaning.dress': 'Kleid',
    'prices.dry-cleaning.coat': 'Mantel',
    'prices.ironing.title': 'Bügelservice',
    'prices.ironing.shirt': 'Hemd',
    'prices.ironing.pants': 'Hose',
    'prices.ironing.dress': 'Kleid',
    
    // Common
    'common.learn-more': 'Mehr erfahren',
    'common.contact-us': 'Kontakt',
    'common.from': 'ab',
    'common.currency': '€',
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.services': 'Services',
    'nav.about': 'About Us',
    'nav.contact': 'Contact',
    'nav.prices': 'Prices',
    
    // Hero
    'hero.title': 'Professional Laundry & Cleaning Service',
    'hero.subtitle': 'For over 20 years, we have been providing clean and well-maintained laundry. Trust our experience and quality.',
    'hero.cta': 'Book Appointment',
    'hero.contact': 'Contact Us',
    
    // Services
    'services.title': 'Our Services',
    'services.subtitle': 'We offer you a comprehensive range of professional cleaning and laundry services',
    'services.dry-cleaning': 'Dry Cleaning',
    'services.dry-cleaning.desc': 'Professional cleaning for delicate textiles and suits',
    'services.laundry': 'Washing & Folding',
    'services.laundry.desc': 'Complete laundry treatment with careful folding',
    'services.ironing': 'Ironing Service',
    'services.ironing.desc': 'Perfectly ironed shirts and textiles',
    'services.alterations': 'Alterations',
    'services.alterations.desc': 'Professional alterations and repairs',
    
    // About
    'about.title': 'About Us',
    'about.text': 'Since 1985, we have been running our family business with passion and dedication. What started as a small laundry is now a modern cleaning service with traditional values. We treat every garment with the care it deserves.',
    'about.values.title': 'Our Values',
    'about.values.quality': 'Quality',
    'about.values.quality.desc': 'Highest standards in every treatment',
    'about.values.trust': 'Trust',
    'about.values.trust.desc': 'Reliable service for generations',
    'about.values.care': 'Care',
    'about.values.care.desc': 'Every piece is treated individually',
    
    // Contact
    'contact.title': 'Contact',
    'contact.subtitle': 'Do you have questions or would like to make an appointment? We are happy to help.',
    'contact.form.name': 'Name',
    'contact.form.email': 'Email',
    'contact.form.phone': 'Phone',
    'contact.form.message': 'Message',
    'contact.form.submit': 'Send Message',
    'contact.info.title': 'Contact Information',
    'contact.info.address': '123 Main Street, 12345 City',
    'contact.info.phone': '+49 123 456789',
    'contact.info.email': 'info@laundry-service.com',
    'contact.info.hours': 'Opening Hours',
    'contact.info.hours.weekdays': 'Mon-Fri: 7:00 AM - 6:00 PM',
    'contact.info.hours.saturday': 'Sat: 8:00 AM - 2:00 PM',
    'contact.info.hours.sunday': 'Sun: Closed',
    
    // Prices
    'prices.title': 'Prices',
    'prices.subtitle': 'Transparent and fair pricing for all our services',
    'prices.washing.title': 'Washing & Drying',
    'prices.washing.standard': 'Standard Laundry',
    'prices.washing.delicate': 'Delicate Wash',
    'prices.washing.bedding': 'Bedding',
    'prices.dry-cleaning.title': 'Dry Cleaning',
    'prices.dry-cleaning.suit': 'Suit',
    'prices.dry-cleaning.dress': 'Dress',
    'prices.dry-cleaning.coat': 'Coat',
    'prices.ironing.title': 'Ironing Service',
    'prices.ironing.shirt': 'Shirt',
    'prices.ironing.pants': 'Pants',
    'prices.ironing.dress': 'Dress',
    
    // Common
    'common.learn-more': 'Learn More',
    'common.contact-us': 'Contact Us',
    'common.from': 'from',
    'common.currency': '€',
  },
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('de');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};