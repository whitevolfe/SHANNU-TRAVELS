import { Facebook, Instagram, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className='bg-primary text-white'>
      <div className='container mx-auto px-4 py-12'>
        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8'>
          <div>
            <h3 className='text-2xl font-bold mb-4'>SHANNU TRAVELS</h3>
            <p className='text-white/80'>
              Your trusted travel partner for flights, hotels, and unforgettable
              experiences.
            </p>
          </div>

          <div>
            <h4 className='font-semibold mb-4'>Quick Links</h4>
            <ul className='space-y-2 text-white/80'>
              <li>
                <Link to='/' className='hover:text-white transition-colors'>
                  Home
                </Link>
              </li>
              <li>
                <Link to='/blog' className='hover:text-white transition-colors'>
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  to='/services'
                  className='hover:text-white transition-colors'
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to='/gallery'
                  className='hover:text-white transition-colors'
                >
                  Gallery
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className='font-semibold mb-4'>Legal</h4>
            <ul className='space-y-2 text-white/80'>
              <li>
                <Link
                  to='/contact'
                  className='hover:text-white transition-colors'
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  to='/privacy-policy'
                  className='hover:text-white transition-colors'
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to='/terms-of-use'
                  className='hover:text-white transition-colors'
                >
                  Terms of Use
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className='font-semibold mb-4'>Get In Touch</h4>
            <Button variant='secondary' className='w-full mb-4'>
              <Phone className='mr-2 h-4 w-4' />
              076-2182529
            </Button>
            <div className='flex gap-3'>
              <a
                href='https://www.facebook.com/profile.php?id=61583166522884'
                target='_blank'
                rel='noopener noreferrer'
                className='w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors'
              >
                <Facebook className='h-5 w-5' />
              </a>
              <a
                href='https://www.instagram.com/shannutravels'
                target='_blank'
                rel='noopener noreferrer'
                className='w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors'
              >
                <Instagram className='h-5 w-5' />
              </a>
            </div>
          </div>
        </div>

        <div className='border-t border-white/20 pt-8 text-center text-white/60'>
          <p>Copyright © 2025 Powered by Shannu Travels</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
