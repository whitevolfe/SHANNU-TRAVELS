import { Card } from '@/components/ui/card';
import qatarAirwaysImg from '../assets/qatarairways.png';
import gulfAirwaysImg from '../assets/gulfairways.png';
import indigoAirwaysImg from '../assets/indigo.png';
import sriLankanImg from '../assets/srilankanairlines.jpg';
import etihadAirwaysImg from '../assets/etihadairways.png';
import airIndiaAirwaysImg from '../assets/airindiaairways.png';

const Flights = () => {
  const airlines = [
    {
      name: 'Qatar Airways',
      logo: qatarAirwaysImg,
    },
    {
      name: 'Gulf Airways',
      logo: gulfAirwaysImg,
    },
    {
      name: 'Indigo Airways',
      logo: indigoAirwaysImg,
    },
    {
      name: 'Sri Lankan Airlines',
      logo: sriLankanImg,
    },
    {
      name: 'Etihad Airways',
      logo: etihadAirwaysImg,
    },
    {
      name: 'Air India Airways',
      logo: airIndiaAirwaysImg,
    },
  ];

  return (
    <div className='container mx-auto px-4 py-16'>
      <div className='text-center mb-16'>
        <h1 className='text-5xl font-bold mb-4 text-primary'>
          Flight Bookings
        </h1>
        <p className='text-xl text-muted-foreground max-w-2xl mx-auto'>
          Comprehensive flight booking services with major airlines. Find the
          best deals and seamless travel experiences.
        </p>
      </div>

      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {airlines.map((airline, index) => (
          <Card key={index} className='p-6 hover:shadow-lg transition-shadow'>
            <div className='flex items-center space-x-4'>
              <img
                src={airline.logo}
                alt={`${airline.name} logo`}
                className='w-12 h-12 object-contain rounded'
              />
              <div>
                <h3 className='text-lg font-semibold text-primary'>
                  {airline.name}
                </h3>
                <p className='text-sm text-muted-foreground'>
                  Book your flights
                </p>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <div className='text-center mt-16'>
        <p className='text-lg text-muted-foreground'>
          Contact us for flight booking assistance and special deals.
        </p>
      </div>
    </div>
  );
};

export default Flights;
