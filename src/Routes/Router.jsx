import { createBrowserRouter } from 'react-router';
import Root from '../Root/Root';
import Contact from '../pages/Contact';

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
                element: <div>About Me</div>
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