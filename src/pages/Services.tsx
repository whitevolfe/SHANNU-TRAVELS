import { Card } from '@/components/ui/card';
import { Plane, Hotel, Car, Globe, Ticket, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      icon: <Plane className='h-8 w-8 mb-4 text-primary' />,
      title: 'Flight Bookings',
      description:
        'International and domestic flight bookings with competitive rates and flexible options.',
    },

    {
      icon: <Globe className='h-8 w-8 mb-4 text-primary' />,
      title: 'Tour Packages',
      description:
        'Customized tour packages for individuals and groups across Sri Lanka.',
    },
    {
      icon: <Ticket className='h-8 w-8 mb-4 text-primary' />,
      title: 'Visa Services',
      description:
        'Assistance with visa applications and documentation for various countries.',
    },
    {
      icon: <Users className='h-8 w-8 mb-4 text-primary' />,
      title: 'Travel Insurance',
      description:
        'Organized group tours with experienced guides and planned itineraries.',
    },
  ];

  return (
    <div className='container mx-auto px-4 py-8'>
      <h1 className='text-4xl font-bold mb-8 text-primary'>Our Services</h1>
      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {services.map((service, index) =>
          service.title === 'Visa Services' ? (
            <Link key={index} to='/visas' className='block'>
              <Card className='p-6 cursor-pointer hover:shadow-lg transition-shadow'>
                <div className='flex flex-col items-center text-center'>
                  {service.icon}
                  <h3 className='text-xl font-semibold mb-2'>
                    {service.title}
                  </h3>
                  <p className='text-gray-600'>{service.description}</p>
                </div>
              </Card>
            </Link>
          ) : (
            <Card key={index} className='p-6'>
              <div className='flex flex-col items-center text-center'>
                {service.icon}
                <h3 className='text-xl font-semibold mb-2'>{service.title}</h3>
                <p className='text-gray-600'>{service.description}</p>
              </div>
            </Card>
          )
        )}
      </div>
    </div>
  );
};

export default Services;
