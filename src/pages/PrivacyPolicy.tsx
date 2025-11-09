import { Card } from '@/components/ui/card';

const PrivacyPolicy = () => {
  const sections = [
    {
      title: 'Information We Collect',
      content:
        'We collect information you provide directly to us, including name, email, phone number, and travel preferences when you use our services.',
    },
    {
      title: 'How We Use Your Information',
      content:
        'We use the information we collect to provide and improve our services, process your bookings, and communicate with you about your travel arrangements.',
    },
    {
      title: 'Information Sharing',
      content:
        'We may share your information with travel providers, hotels, and other service providers only as necessary to fulfill your travel arrangements.',
    },
    {
      title: 'Data Security',
      content:
        'We implement appropriate security measures to protect your personal information from unauthorized access, disclosure, or misuse.',
    },
    {
      title: 'Cookies and Tracking',
      content:
        'We use cookies and similar technologies to enhance your experience on our website and analyze how our services are used.',
    },
    {
      title: 'Your Rights',
      content:
        'You have the right to access, correct, or delete your personal information. Contact us to exercise these rights.',
    },
  ];

  return (
    <div className='container mx-auto px-4 py-8'>
      <h1 className='text-4xl font-bold mb-8 text-primary'>Privacy Policy</h1>
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

export default PrivacyPolicy;
