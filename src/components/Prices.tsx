import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

const Prices = () => {
  const { t } = useLanguage();

  const priceCategories = [
    {
      title: t('prices.washing.title'),
      items: [
        { service: t('prices.washing.standard'), price: '2.50' },
        { service: t('prices.washing.delicate'), price: '3.50' },
        { service: t('prices.washing.bedding'), price: '8.00' },
      ],
    },
    {
      title: t('prices.dry-cleaning.title'),
      items: [
        { service: t('prices.dry-cleaning.suit'), price: '15.00' },
        { service: t('prices.dry-cleaning.dress'), price: '12.00' },
        { service: t('prices.dry-cleaning.coat'), price: '18.00' },
      ],
    },
    {
      title: t('prices.ironing.title'),
      items: [
        { service: t('prices.ironing.shirt'), price: '3.50' },
        { service: t('prices.ironing.pants'), price: '4.00' },
        { service: t('prices.ironing.dress'), price: '6.00' },
      ],
    },
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="prices" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
            {t('prices.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('prices.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {priceCategories.map((category, categoryIndex) => (
            <Card key={categoryIndex} className="p-6 border-0 card-gradient hover:shadow-large transition-all duration-500">
              <h3 className="text-xl font-bold text-foreground mb-6 text-center border-b border-border pb-4">
                {category.title}
              </h3>
              
              <div className="space-y-4">
                {category.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="flex justify-between items-center py-2">
                    <span className="text-muted-foreground">{item.service}</span>
                    <div className="flex items-center space-x-1">
                      <span className="text-sm text-muted-foreground">{t('common.from')}</span>
                      <span className="font-semibold text-foreground">{item.price}</span>
                      <span className="text-sm text-muted-foreground">{t('common.currency')}</span>
                    </div>
                  </div>
                ))}
              </div>
              
              <Button 
                className="w-full mt-6 bg-primary hover:bg-primary-hover"
                onClick={scrollToContact}
              >
                {t('common.contact-us')}
              </Button>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground italic">
            * Preise können je nach Materialart und Verschmutzungsgrad variieren
          </p>
        </div>
      </div>
    </section>
  );
};

export default Prices;