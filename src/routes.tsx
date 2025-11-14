import { createBrowserRouter } from 'react-router-dom';
import App from '@/App';
import Index from '@/pages/Index';
import Blog from '@/pages/Blog';
import Services from '@/pages/Services';
// import Gallery from '@/pages/Gallery';
import Contact from '@/pages/Contact';
import PrivacyPolicy from '@/pages/PrivacyPolicy';
import TermsOfUse from '@/pages/TermsOfUse';

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
