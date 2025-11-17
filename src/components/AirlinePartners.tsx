import {
  Carousel,
  CarouselContent,
  CarouselItem,
  // CarouselNext,
  // CarouselPrevious,
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import { useRef } from 'react';
import sriLankanImg from '../assets/srilankanairlines.jpg';
import qatarairwaysImg from '../assets/qatarairways.png';
import gulfairwaysImg from '../assets/gulfairways.png';
import indigoairwaysImg from '../assets/indigo.png';
import etihadirwaysImg from '../assets/etihadairways.png';
import airindiaairwaysImg from '../assets/airindiaairways.png';

const AirlinePartners = () => {
  const plugin = useRef(Autoplay({ delay: 3000, stopOnInteraction: true }));

  const airlines = [
    { image: qatarairwaysImg },
    { image: gulfairwaysImg },
    { image: indigoairwaysImg },
    { image: sriLankanImg },
    { image: etihadirwaysImg },
    { image: airindiaairwaysImg },
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
                key={airline.image}
                className='pl-4 basis-1/2 md:basis-1/4'
              >
                <div className='flex items-center justify-center h-20 bg-white rounded-lg shadow-card hover:shadow-hover transition-shadow'>
                  {airline.image ? (
                    <img
                      src={airline.image}
                      className='h-12 w-auto object-contain'
                    />
                  ) : (
                    <span className='text-2xl font-bold'>{airline.image}</span>
                  )}
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
