import React from 'react';
import { Card } from '@/components/ui/card';
import { Award, Heart, Shield } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const About = () => {
  const { t } = useLanguage();

  const values = [
    {
      icon: Award,
      title: t('about.values.quality'),
      description: t('about.values.quality.desc'),
    },
    {
      icon: Shield,
      title: t('about.values.trust'),
      description: t('about.values.trust.desc'),
    },
    {
      icon: Heart,
      title: t('about.values.care'),
      description: t('about.values.care.desc'),
    },
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
              {t('about.title')}
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Story */}
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t('about.text')}
              </p>
              
               <div className="flex items-center space-x-4 p-6 bg-primary/5 rounded-lg border border-primary/10">
                 <div className="text-4xl font-bold text-primary">19</div>
                 <div>
                   <div className="font-semibold text-foreground">{t('about.years')}</div>
                   <div className="text-sm text-muted-foreground">Seit 2006 für Sie da</div>
                 </div>
               </div>
            </div>

            {/* Values */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-foreground mb-8">
                {t('about.values.title')}
              </h3>
              
              {values.map((value, index) => (
                <Card key={index} className="p-6 border-0 card-gradient hover:shadow-medium transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <value.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">{value.title}</h4>
                      <p className="text-muted-foreground">{value.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;