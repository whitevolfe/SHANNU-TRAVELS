import { Card } from '@/components/ui/card';

const IndianVisaDetails = () => {
  const visaTypes = [
    {
      type: '1yr business visa',
      details: '(multiple entry)',
      requirements: [
        'Passport Scan Copy',
        'White background photo size - 2x2',
        "Parent's Full name and Birth Place",
        'Address, phone',
        'Occupation ( Company name, address and contact)',
        'if Married Spouse Details',
      ],
    },
    {
      type: '1 month visit visa',
      details: '(Double entry)',
      requirements: [
        'Passport Scan Copy',
        'White background photo size - 2x2',
        "Parent's Full name and Birth Place",
        'Address, phone',
        'Occupation ( Company name, address and contact)',
        'if Married Spouse Details',
      ],
    },
    {
      type: '1year visit visa',
      details: '(multiple entry)',
      requirements: [
        'Passport Scan Copy',
        'White background photo size - 2x2',
        "Parent's Full name and Birth Place",
        'Address, phone',
        'Occupation ( Company name, address and contact)',
        'if Married Spouse Details',
      ],
    },
    {
      type: '3 months visit visa',
      details: '(Single entry)',
      requirements: [
        'Original passport',
        'White background photo size - 2x2',
        "Parent's Full name and Birth Place",
        'Address, phone',
        'Occupation ( Company name, address and contact)',
        'if Married Spouse Details',
      ],
    },
    {
      type: 'Medical visa',
      details: '',
      requirements: [
        'India Hospital Approved Letter with GST',
        'Sri Lanka Hospital approved Letter',
        'ID and passport scanned page',
        'White background photo size - 2x2',
      ],
    },
  ];

  return (
    <div className='container mx-auto px-4 py-16'>
      <div className='text-center mb-16'>
        <h1 className='text-5xl font-bold mb-4 text-primary flex items-center justify-center gap-4'>
          India
        </h1>
        <p className='text-xl text-muted-foreground max-w-2xl mx-auto'>
          Indian Visa Details and Packages
        </p>
      </div>

      <div className='space-y-8'>
        {visaTypes.map((visa, index) => (
          <Card key={index} className='p-6'>
            <h2 className='text-2xl font-bold mb-2 text-primary'>
              {visa.type} {visa.details}
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

export default IndianVisaDetails;
