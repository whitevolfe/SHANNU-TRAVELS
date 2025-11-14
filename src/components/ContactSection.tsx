import { Button } from '@/components/ui/button';
import { Phone, MessageCircle } from 'lucide-react';

const ContactSection = () => {
  return (
    <section className='py-16 bg-secondary'>
      <div className='container mx-auto px-4'>
        <div className='flex flex-col md:flex-row items-center justify-between gap-6 max-w-4xl mx-auto'>
          <h3 className='text-3xl font-bold text-foreground'>
            Would you like to talk with us?
          </h3>
          <div className='flex gap-4'>
            <Button size='lg' className='bg-primary hover:bg-primary-dark'>
              <Phone className='mr-2 h-5 w-5' />
              076-2182529
            </Button>
            <Button
              asChild
              size='lg'
              className='bg-[#25D366] hover:bg-[#1DA851] text-white'
            >
              {/* Assumption: phone is Sri Lanka mobile number 076-2182529 -> international 94762182529 */}
              <a
                href='https://wa.me/94762182529'
                target='_blank'
                rel='noopener noreferrer'
                aria-label='Chat on WhatsApp'
              >
                <MessageCircle className='mr-2 h-5 w-5' />
                WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
