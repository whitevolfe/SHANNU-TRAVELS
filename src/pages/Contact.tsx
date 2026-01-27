import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Phone, Mail, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <div className='container mx-auto px-4 py-8'>
      <h1 className='text-4xl font-bold mb-8 text-primary'>Contact Us</h1>

      <div className='grid md:grid-cols-2 gap-8'>
        <Card className='p-6'>
          <h2 className='text-2xl font-semibold mb-6'>Get in Touch</h2>
          <form className='space-y-4'>
            <div>
              <label className='block text-sm font-medium mb-1'>Name</label>
              <Input placeholder='Your name' />
            </div>
            <div>
              <label className='block text-sm font-medium mb-1'>Email</label>
              <Input type='email' placeholder='your@email.com' />
            </div>
            <div>
              <label className='block text-sm font-medium mb-1'>Phone</label>
              <Input placeholder='Your phone number' />
            </div>
            <div>
              <label className='block text-sm font-medium mb-1'>Message</label>
              <Textarea placeholder='Your message' rows={4} />
            </div>
            <Button className='w-full'>Send Message</Button>
          </form>
        </Card>

        <div className='space-y-6'>
          <Card className='p-6'>
            <h2 className='text-2xl font-semibold mb-6'>Contact Information</h2>
            <div className='space-y-4'>
              <div className='flex items-start'>
                <Phone className='h-5 w-5 text-primary mt-1 mr-3' />
                <div>
                  <p className='font-medium'>Phone</p>
                  {/* <p className='text-gray-600'>027-2222719</p> */}
                  <p className='text-gray-600'>076-2182529</p>
                </div>
              </div>
              <div className='flex items-start'>
                <Mail className='h-5 w-5 text-primary mt-1 mr-3' />
                <div>
                  <p className='font-medium'>Email</p>
                  <p className='text-gray-600'>Shannutravels@gmail.com</p>
                </div>
              </div>
              <div className='flex items-start'>
                <MapPin className='h-5 w-5 text-primary mt-1 mr-3' />
                <div>
                  <p className='font-medium'>Address</p>
                  <p className='text-gray-600'>
                    71/1 ,Kandy Road
                    <br />
                    Trincomalee, Sri Lanka
                  </p>
                </div>
              </div>
            </div>
          </Card>

          <Card className='p-6'>
            <h2 className='text-2xl font-semibold mb-4'>Business Hours</h2>
            <div className='space-y-2'>
              <p className='flex justify-between'>
                <span className='text-gray-600'>Monday - Friday:</span>
                <span>9:00 AM - 6:00 PM</span>
              </p>
              <p className='flex justify-between'>
                <span className='text-gray-600'>Saturday:</span>
                <span>9:00 AM - 6:00 PM</span>
              </p>
              <p className='flex justify-between'>
                <span className='text-gray-600'>Sunday:</span>
                <span>9:00 AM - 1:00 PM</span>
              </p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Contact;
