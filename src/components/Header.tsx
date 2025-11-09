import ticketLogo from '@/assets/ticketing logo1.png';
import { Phone, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link, useLocation } from 'react-router-dom';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const Header = () => {
  const location = useLocation();
  return (
    <header className='bg-white shadow-sm sticky top-0 z-50'>
      <div className='container mx-auto px-4 py-4'>
        <div className='flex items-center justify-between'>
          <Link to='/' className='flex items-center'>
            <img
              src={ticketLogo}
              alt='Ticketing logo'
              className='h-28 md:h-32 lg:h-36 xl:h-40 w-auto object-contain rounded-sm'
            />
          </Link>

          <nav className='hidden md:flex items-center space-x-8'>
            <Link
              to='/blog'
              className={`${
                location.pathname === '/blog'
                  ? 'text-primary'
                  : 'text-foreground hover:text-primary'
              } transition-colors`}
            >
              Blog
            </Link>
            <Link
              to='/services'
              className={`${
                location.pathname === '/services'
                  ? 'text-primary'
                  : 'text-foreground hover:text-primary'
              } transition-colors`}
            >
              Services
            </Link>
            <Link
              to='/gallery'
              className={`${
                location.pathname === '/gallery'
                  ? 'text-primary'
                  : 'text-foreground hover:text-primary'
              } transition-colors`}
            >
              Gallery
            </Link>
            <Link
              to='/contact'
              className={`${
                location.pathname === '/contact'
                  ? 'text-primary'
                  : 'text-foreground hover:text-primary'
              } transition-colors`}
            >
              Contact
            </Link>
            <Link
              to='/privacy-policy'
              className={`${
                location.pathname === '/privacy-policy'
                  ? 'text-primary'
                  : 'text-foreground hover:text-primary'
              } transition-colors`}
            >
              Privacy Policy
            </Link>
            <Link
              to='/terms-of-use'
              className={`${
                location.pathname === '/terms-of-use'
                  ? 'text-primary'
                  : 'text-foreground hover:text-primary'
              } transition-colors`}
            >
              Terms of Use
            </Link>
          </nav>

          <div className='flex items-center gap-4'>
            <Button
              variant='default'
              className='bg-primary hover:bg-primary-dark hidden md:flex'
            >
              <Phone className='mr-2 h-4 w-4' />
              076-2182529
            </Button>

            <Sheet>
              <SheetTrigger asChild>
                <Button variant='ghost' size='icon' className='md:hidden'>
                  <Menu className='h-6 w-6' />
                </Button>
              </SheetTrigger>
              <SheetContent side='right' className='w-[300px] sm:w-[400px]'>
                <nav className='flex flex-col gap-4 mt-8'>
                  <Link
                    to='/'
                    className={`${
                      location.pathname === '/'
                        ? 'text-primary'
                        : 'text-foreground hover:text-primary'
                    } transition-colors text-lg py-2`}
                  >
                    Home
                  </Link>
                  <Link
                    to='/blog'
                    className={`${
                      location.pathname === '/blog'
                        ? 'text-primary'
                        : 'text-foreground hover:text-primary'
                    } transition-colors text-lg py-2`}
                  >
                    Blog
                  </Link>
                  <Link
                    to='/services'
                    className={`${
                      location.pathname === '/services'
                        ? 'text-primary'
                        : 'text-foreground hover:text-primary'
                    } transition-colors text-lg py-2`}
                  >
                    Services
                  </Link>
                  <Link
                    to='/gallery'
                    className={`${
                      location.pathname === '/gallery'
                        ? 'text-primary'
                        : 'text-foreground hover:text-primary'
                    } transition-colors text-lg py-2`}
                  >
                    Gallery
                  </Link>
                  <Link
                    to='/contact'
                    className={`${
                      location.pathname === '/contact'
                        ? 'text-primary'
                        : 'text-foreground hover:text-primary'
                    } transition-colors text-lg py-2`}
                  >
                    Contact
                  </Link>
                  <Link
                    to='/privacy-policy'
                    className={`${
                      location.pathname === '/privacy-policy'
                        ? 'text-primary'
                        : 'text-foreground hover:text-primary'
                    } transition-colors text-lg py-2`}
                  >
                    Privacy Policy
                  </Link>
                  <Link
                    to='/terms-of-use'
                    className={`${
                      location.pathname === '/terms-of-use'
                        ? 'text-primary'
                        : 'text-foreground hover:text-primary'
                    } transition-colors text-lg py-2`}
                  >
                    Terms of Use
                  </Link>
                  <Button
                    variant='default'
                    className='bg-primary hover:bg-primary-dark w-full mt-4'
                  >
                    <Phone className='mr-2 h-4 w-4' />
                    076-2182529
                  </Button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
