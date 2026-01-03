import { createBrowserRouter } from 'react-router-dom';
import App from '@/App';
import Index from '@/pages/Index';
import Blog from '@/pages/Blog';
import Services from '@/pages/Services';
// import Gallery from '@/pages/Gallery';
import Visas from '@/pages/Visas';
import Flights from '@/pages/Flights';
import Contact from '@/pages/Contact';
import PrivacyPolicy from '@/pages/PrivacyPolicy';
import TermsOfUse from '@/pages/TermsOfUse';
import IndianVisaDetails from '@/pages/IndianVisaDetails';
import QatarVisaDetails from '@/pages/QatarVisaDetails';
import OmanVisaDetails from '@/pages/OmanVisaDetails';
import VietnamVisaDetails from '@/pages/VietnamVisaDetails';
import UAEVisaDetails from '@/pages/UAEVisaDetails';
import UKVisaDetails from '@/pages/UKVisaDetails';
import CanadaVisaDetails from '@/pages/CanadaVisaDetails';
import FranceVisaDetails from '@/pages/FranceVisaDetails';
import GermanyVisaDetails from '@/pages/GermanyVisaDetails';
import MalaysiaVisaDetails from '@/pages/MalaysiaVisaDetails';
import NepalVisaDetails from '@/pages/NepalVisaDetails';
import IndonesiaVisaDetails from '@/pages/IndonesiaVisaDetails';
import ChinaVisaDetails from '@/pages/ChinaVisaDetails';
import CambodiaVisaDetails from '@/pages/CambodiaVisaDetails';
import AzerbaijanVisaDetails from '@/pages/AzerbaijanVisaDetails';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Index />,
      },
      {
        path: 'blog',
        element: <Blog />,
      },
      {
        path: 'services',
        element: <Services />,
      },
      {
        path: 'visas',
        element: <Visas />,
      },
      {
        path: 'indian-visa-details',
        element: <IndianVisaDetails />,
      },
      {
        path: 'qatar-visa-details',
        element: <QatarVisaDetails />,
      },
      {
        path: 'oman-visa-details',
        element: <OmanVisaDetails />,
      },
      {
        path: 'vietnam-visa-details',
        element: <VietnamVisaDetails />,
      },
      {
        path: 'uae-visa-details',
        element: <UAEVisaDetails />,
      },
      {
        path: 'uk-visa-details',
        element: <UKVisaDetails />,
      },
      {
        path: 'canada-visa-details',
        element: <CanadaVisaDetails />,
      },
      {
        path: 'france-visa-details',
        element: <FranceVisaDetails />,
      },
      {
        path: 'germany-visa-details',
        element: <GermanyVisaDetails />,
      },
      {
        path: 'malaysia-visa-details',
        element: <MalaysiaVisaDetails />,
      },
      {
        path: 'nepal-visa-details',
        element: <NepalVisaDetails />,
      },
      {
        path: 'indonesia-visa-details',
        element: <IndonesiaVisaDetails />,
      },
      {
        path: 'china-visa-details',
        element: <ChinaVisaDetails />,
      },
      {
        path: 'cambodia-visa-details',
        element: <CambodiaVisaDetails />,
      },
      {
        path: 'azerbaijan-visa-details',
        element: <AzerbaijanVisaDetails />,
      },
      {
        path: 'flights',
        element: <Flights />,
      },
      {
        path: 'gallery',
        // element: <Gallery />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
      {
        path: 'privacy-policy',
        element: <PrivacyPolicy />,
      },
      {
        path: 'terms-of-use',
        element: <TermsOfUse />,
      },
    ],
  },
]);
