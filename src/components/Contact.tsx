import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MapPin, Phone, Mail, Clock, Instagram } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Nachricht gesendet!",
      description: "Vielen Dank für Ihre Nachricht. Wir melden uns bald bei Ihnen.",
    });
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: t('contact.info.address'),
      detail: t('contact.info.address'),
    },
    {
      icon: Phone,
      title: t('contact.info.phone'),
      detail: t('contact.info.phone'),
    },
    {
      icon: Instagram,
      title: 'Instagram',
      detail: '@' + t('contact.info.instagram'),
    },
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
            {t('contact.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="p-8 border-0 card-gradient shadow-medium">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    {t('contact.form.name')}
                  </label>
                  <Input
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    {t('contact.form.phone')}
                  </label>
                  <Input
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  {t('contact.form.email')}
                </label>
                <Input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  {t('contact.form.message')}
                </label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  required
                  className="w-full"
                />
              </div>
              
              <Button type="submit" className="w-full bg-primary hover:bg-primary-hover">
                {t('contact.form.submit')}
              </Button>
            </form>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="p-6 border-0 card-gradient">
              <h3 className="text-xl font-bold text-foreground mb-6">
                {t('contact.info.title')}
              </h3>
              
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <info.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-medium text-foreground">{info.detail}</div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-6 border-0 card-gradient">
              <h3 className="text-xl font-bold text-foreground mb-6 flex items-center">
                <Clock className="h-5 w-5 text-primary mr-2" />
                {t('contact.info.hours')}
              </h3>
              
               <div className="space-y-2 text-muted-foreground">
                 <div className="flex justify-between">
                   <span>{t('contact.info.hours.weekdays').split(':')[0]}:</span>
                   <span className="font-medium">8:00 - 18:00</span>
                 </div>
                 <div className="flex justify-between">
                   <span>{t('contact.info.hours.saturday').split(':')[0]}:</span>
                   <span className="font-medium">8:00 - 12:30</span>
                 </div>
                 <div className="flex justify-between">
                   <span>{t('contact.info.hours.sunday').split(':')[0]}:</span>
                   <span className="font-medium">{t('contact.info.hours.sunday').split(': ')[1]}</span>
                 </div>
               </div>

               {/* Google Maps */}
               <div className="mt-6">
                 <iframe
                   src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2662.7854547!2d11.5531!3d48.1537!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479e75f9a38c5fd9%3A0x10fdb8c2bb57c63c!2sDietleibstr.%2011%2C%2080634%20M%C3%BCnchen!5e0!3m2!1sde!2sde!4v1647889123456!5m2!1sde!2sde"
                   width="100%"
                   height="200"
                   style={{ border: 0 }}
                   allowFullScreen
                   loading="lazy"
                   referrerPolicy="no-referrer-when-downgrade"
                   className="rounded-lg"
                 />
               </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;