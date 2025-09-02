import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Shirt, Sparkles, Flame, Scissors } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import dryCleaningImage from '@/assets/dry-cleaning.jpg';
import laundryFoldingImage from '@/assets/laundry-folding.jpg';
import ironingServiceImage from '@/assets/ironing-service.jpg';

const Services = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: Sparkles,
      title: t('services.dry-cleaning'),
      description: t('services.dry-cleaning.desc'),
      image: dryCleaningImage,
    },
    {
      icon: Shirt,
      title: t('services.laundry'),
      description: t('services.laundry.desc'),
      image: laundryFoldingImage,
    },
    {
      icon: Flame,
      title: t('services.ironing'),
      description: t('services.ironing.desc'),
      image: ironingServiceImage,
    },
    {
      icon: Scissors,
      title: t('services.alterations'),
      description: t('services.alterations.desc'),
      image: dryCleaningImage, // Reusing image
    },
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
            {t('services.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('services.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-large transition-all duration-500 border-0 card-gradient overflow-hidden">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/10 transition-colors duration-500"></div>
                <div className="absolute top-4 left-4">
                  <div className="bg-white/90 p-3 rounded-full shadow-medium">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {service.description}
                </p>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                  onClick={scrollToContact}
                >
                  {t('common.learn-more')}
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;