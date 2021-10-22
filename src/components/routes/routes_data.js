import { lazy } from 'react';

const HomePage = lazy(() => import('../pages/homepage/HomePage'));
const AboutUsPage = lazy(() => import('../pages/about/AboutUsPage'));
const ContactUsPage = lazy(() => import('../pages/contact/ContactUsPage'));
const NotFoundPage = lazy(() => import('../pages/not-found/NotFoundPage'));

const routes = [
    {
        path: '/',
        component: HomePage
    },
    {
        path: '/about-us',
        component: AboutUsPage
    },
    {
        path: '/contact-us',
        component: ContactUsPage
    },
    {
        path: '',
        component: NotFoundPage
    }
];

export { routes };
