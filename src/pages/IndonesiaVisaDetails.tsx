import { Card } from '@/components/ui/card';

const IndonesiaVisaDetails = () => {
  const visaTypes = [
    {
      type: '60 days visa',
      requirements: [
        'Scanned passport copy',
        'Passport size photo',
        '3 months bank statement with USD2000 equivalent bank',
        'Address & contact details',
      ],
    },
  ];

  return (
    <div className='container mx-auto px-4 py-16'>
      <div className='text-center mb-16'>
        <h1 className='text-5xl font-bold mb-4 text-primary flex items-center justify-center gap-4'>
          Indonesia
        </h1>
        <p className='text-xl text-muted-foreground max-w-2xl mx-auto'>
          Indonesia Visa Details and Packages
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

export default IndonesiaVisaDetails;
