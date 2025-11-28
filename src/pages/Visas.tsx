import { Card } from '@/components/ui/card';
import azerbaijanFlag from '../assets/azerbaijan-flag.png';
import cambodiaFlag from '../assets/cambodia-flag.png';
import chinaFlag from '../assets/china-flag.png';
import indonesiaFlag from '../assets/indonesia-flag.png';
import malaysiaFlag from '../assets/malaysia-flag.png';
import nepalFlag from '../assets/nepal-flag.png';
import omanFlag from '../assets/oman-flag.png';
import qatarFlag from '../assets/qatar-flag.png';
import vietnamFlag from '../assets/vietnam-flag.png';
import indiaFlag from '../assets/india-flag.png';
import uaeFlag from '../assets/UAE-flag.png';
import canadaFlag from '../assets/canada-flag.jpg';
import ukFlag from '../assets/uk-flag.jpg';
import franceFlag from '../assets/france-flag.jpg';
import germanyFlag from '../assets/germany-flag.png';

const Visas = () => {
  const visaServices = [
    {
      country: 'Qatar',
      flag: qatarFlag,
    },
    {
      country: 'Oman',
      flag: omanFlag,
    },
    {
      country: 'Vietnam',
      flag: vietnamFlag,
    },
    {
      country: 'India',
      flag: indiaFlag,
    },
    {
      country: 'UAE',
      flag: uaeFlag,
    },

    {
      country: 'UK',
      flag: ukFlag,
    },
    {
      country: 'Canada',
      flag: canadaFlag,
    },
    {
      country: 'France',
      flag: franceFlag,
    },
    {
      country: 'Germany',
      flag: germanyFlag,
    },
    {
      country: 'Malaysia',
      flag: malaysiaFlag,
    },
    {
      country: 'Nepal',
      flag: nepalFlag,
    },
    {
      country: 'Indonesia',
      flag: indonesiaFlag,
    },
    {
      country: 'China',
      flag: chinaFlag,
    },
    {
      country: 'Cambodia',
      flag: cambodiaFlag,
    },
    {
      country: 'Azerbaijan',
      flag: azerbaijanFlag,
    },
  ];

  return (
    <div className='container mx-auto px-4 py-16'>
      <div className='text-center mb-16'>
        <h1 className='text-5xl font-bold mb-4 text-primary'>
          Visas & Passports
        </h1>
        <p className='text-xl text-muted-foreground max-w-2xl mx-auto'>
          Streamlined visa processing for global travel. We handle your visa
          requirements with expertise and care.
        </p>
      </div>

      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {visaServices.map((service, index) => (
          <Card key={index} className='p-6 hover:shadow-lg transition-shadow'>
            <div className='flex items-center space-x-4'>
              <img
                src={service.flag}
                alt={`${service.country} flag`}
                className='w-12 h-8 object-cover rounded'
              />
              <div>
                <h3 className='text-lg font-semibold text-primary'>
                  {service.country}
                </h3>
                <p className='text-sm text-muted-foreground'>
                  {service.country}
                </p>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <div className='text-center mt-16'>
        <p className='text-lg text-muted-foreground'>
          Contact us for personalized visa consultation and processing
          assistance.
        </p>
      </div>
    </div>
  );
};

export default Visas;
