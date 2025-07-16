import { createBrowserRouter } from 'react-router';
import Root from '../Root/Root';
import Contact from '../pages/Contact';
import AboutPageContent from '../components/AboutPageContent';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        children: [
            {
                path: '/',
                element: <div>Home</div>
            },
            {
                path: '/about-me',
                element: <AboutPageContent />
            },
            {
                path: '/collections',
                element: <div>Collections</div>
            },
            {
                path: '/contact',
                element: <Contact />
            },
            {
                path: '/blog',
                element: <div>Blog</div>
            }
        ]
    }
]);

export default router;