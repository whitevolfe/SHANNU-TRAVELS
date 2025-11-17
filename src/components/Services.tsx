import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { Plane, CreditCard, Hotel, Shield, Ship, Palmtree } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Plane,
      title: 'FLIGHTS',
      description:
        'Compare cheap flight prices from all major airlines and travel agents, and find the cheapest tickets to your favourite destinations.',
    },
    {
      icon: CreditCard,
      title: 'VISA',
      description:
        'Discover our streamlined VISA services, tailored for businesses. Simple, efficient, and stress-free solutions for hassle-free travel arrangements.',
    },
    {
      icon: Shield,
      title: 'TRAVEL INSURANCE',
      description:
        'Travel Insurance coverage designed to protect against risks and financial losses that could happen while traveling for Competitive Travel.',
    },
  ];

  return (
    <section className='py-20 bg-white'>
      <div className='container mx-auto px-4'>
        <h2 className='text-4xl font-bold text-center text-foreground mb-12'>
          Our Services
        </h2>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {services.map((service) => {
            const Icon = service.icon;
            const cardContent = (
              <Card
                key={service.title}
                className='border-0 shadow-card hover:shadow-hover transition-all group cursor-pointer'
              >
                <CardContent className='p-8 text-center'>
                  <div className='mb-6 flex justify-center'>
                    <div className='p-4 bg-primary rounded-lg group-hover:scale-110 transition-transform'>
                      <Icon className='h-8 w-8 text-white' />
                    </div>
                  </div>
                  <h3 className='text-lg font-bold text-primary mb-4'>
                    {service.title}
                  </h3>
                  <p className='text-muted-foreground leading-relaxed'>
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            );

            if (service.title === 'VISA') {
              return (
                <Link key={service.title} to='/visas'>
                  {cardContent}
                </Link>
              );
            }

            if (service.title === 'FLIGHTS') {
              return (
                <Link key={service.title} to='/flights'>
                  {cardContent}
                </Link>
              );
            }

            return cardContent;
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
