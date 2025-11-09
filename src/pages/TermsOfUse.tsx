import { Card } from '@/components/ui/card';

const TermsOfUse = () => {
  const sections = [
    {
      title: 'Acceptance of Terms',
      content:
        'By accessing and using our services, you agree to be bound by these Terms of Use and all applicable laws and regulations.',
    },
    {
      title: 'Service Description',
      content:
        'We provide travel-related services including flight bookings, hotel reservations, tour packages, and transportation services.',
    },
    {
      title: 'User Responsibilities',
      content:
        'You are responsible for providing accurate information, maintaining the confidentiality of your account, and complying with booking terms.',
    },
    {
      title: 'Booking and Cancellation',
      content:
        'All bookings are subject to availability and confirmation. Cancellation policies vary by service and provider.',
    },
    {
      title: 'Payment Terms',
      content:
        'Payments must be made as per the specified terms. We accept major credit cards and bank transfers.',
    },
    {
      title: 'Limitation of Liability',
      content:
        'We are not liable for any direct, indirect, incidental, or consequential damages arising from the use of our services.',
    },
  ];

  return (
    <div className='container mx-auto px-4 py-8'>
      <h1 className='text-4xl font-bold mb-8 text-primary'>Terms of Use</h1>
      <Card className='p-6'>
        <p className='text-gray-600 mb-8'>Last updated: November 9, 2025</p>
        <div className='space-y-8'>
          {sections.map((section, index) => (
            <div key={index}>
              <h2 className='text-2xl font-semibold mb-4'>{section.title}</h2>
              <p className='text-gray-600'>{section.content}</p>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default TermsOfUse;
