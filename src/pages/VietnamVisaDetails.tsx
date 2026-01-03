import { Card } from '@/components/ui/card';

const VietnamVisaDetails = () => {
  const visaTypes = [
    {
      type: '30 days tourist visa',
      requirements: [
        'Scanned passport copy',
        'Passport size photo',
        'Occupation details',
        'Personal address & contact',
        'Travel dates',
      ],
    },
  ];

  return (
    <div className='container mx-auto px-4 py-16'>
      <div className='text-center mb-16'>
        <h1 className='text-5xl font-bold mb-4 text-primary flex items-center justify-center gap-4'>
          Vietnam
        </h1>
        <p className='text-xl text-muted-foreground max-w-2xl mx-auto'>
          Vietnam Visa Details and Packages
        </p>
      </div>

      <div className='space-y-8'>
        {visaTypes.map((visa, index) => (
          <Card key={index} className='p-6'>
            <h2 className='text-2xl font-bold mb-2 text-primary'>
              {visa.type}
            </h2>
            <h3 className='text-xl font-semibold mb-4'>Requirements</h3>
            <ul className='list-disc list-inside space-y-2 text-muted-foreground'>
              {visa.requirements.map((req, reqIndex) => (
                <li key={reqIndex}>{req}</li>
              ))}
            </ul>
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

export default VietnamVisaDetails;
