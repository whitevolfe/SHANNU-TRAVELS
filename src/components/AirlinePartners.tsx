import {
  Carousel,
  CarouselContent,
  CarouselItem,
  // CarouselNext,
  // CarouselPrevious,
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import { useRef } from 'react';

const AirlinePartners = () => {
  const plugin = useRef(Autoplay({ delay: 3000, stopOnInteraction: true }));

  const airlines = [
    { name: 'Qatar Airways', color: '#2E7D32' },
    { name: 'Gulf Air', color: '#FF6B35' },
    { name: 'IndiGo', color: '#1E3A8A' },
    { name: 'Srilankan', color: '#0EA5E9' },
    { name: 'Emirates', color: '#2E7D32' },
    { name: 'Etihad', color: '#FF6B35' },
    { name: 'Air India', color: '#1E3A8A' },
    { name: 'Srilankan', color: '#0EA5E9' },
  ];

  return (
    <section className='py-12 bg-secondary'>
      <div className='container mx-auto px-4'>
        <Carousel
          plugins={[plugin.current]}
          opts={{
            align: 'start',
            loop: true,
          }}
          className='w-full'
        >
          <CarouselContent className='-ml-4'>
            {airlines.map((airline) => (
              <CarouselItem
                key={airline.name}
                className='pl-4 basis-1/2 md:basis-1/4'
              >
                <div className='flex items-center justify-center h-20 bg-white rounded-lg shadow-card hover:shadow-hover transition-shadow'>
                  <span
                    className='text-2xl font-bold'
                    style={{ color: airline.color }}
                  >
                    {airline.name}
                  </span>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          {/* <CarouselPrevious className='left-0' /> */}
          {/* <CarouselNext className='right-0' /> */}
        </Carousel>
      </div>
    </section>
  );
};

export default AirlinePartners;
