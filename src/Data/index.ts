import { Home, Content } from '../Page';

export const Pages = [
  {
    link: '/no-css',
    label: 'No CSS layout',
  },
  {
    link: '/table',
    label: 'Table layout',
  },
  {
    link: '/css',
    label: 'CSS layout',
  },
  {
    link: '/responsive',
    label: 'Responsive and Animation layout',
  },
  {
    link: '/javascript',
    label: 'Javascript and Single Page Application (SPA)',
  },
  {
    link: '/pwa',
    label: 'Progressive Web Application',
  },
];

export const FakeLinks = [
  {
    link: '',
    label: 'Home',
  },
  {
    link: '/about',
    label: 'About',
  },
  {
    link: '/contact',
    label: 'Contact',
  },
];

export const FakeSidebar = [
  {
    link: '',
    label: 'Menu 1',
    subLinks: [
      {
        link: '',
        label: '1 Sub Menu 1',
      },
      {
        link: '',
        label: '1 Sub Menu 2',
      },
    ],
  },
  {
    link: '',
    label: 'Menu 2',
    subLinks: [
      {
        link: '',
        label: '2 Sub Menu 1',
      },
      {
        link: '',
        label: '2 Sub Menu 2',
      },
    ],
  },
  {
    link: '',
    label: 'Menu 3',
    subLinks: [
      {
        link: '',
        label: '3 Sub Menu 1',
      },
      {
        link: '',
        label: '3 Sub Menu 2',
      },
    ],
  },
];

export const PageLinks = {
  '/': {
    id: 0,
    next: '/no-css',
  },
  '/no-css': {
    id: 1,
    title: 'Page without CSS',
    previous: '/',
    next: '/table',
  },
  '/table': {
    id: 2,
    title: 'Page with table',
    previous: '/no-css',
    next: '/css',
  },
  '/css': {
    id: 3,
    title: 'Page with CSS, but not responsive',
    previous: '/table',
    next: '/responsive',
  },
  '/responsive': {
    id: 4,
    title: 'Page are responsive and have animations',
    previous: '/css',
    next: '/javascript',
  },
  '/javascript': {
    id: 5,
    title: 'Page are support Javascript and Support SPA application',
    previous: '/responsive',
    next: '/pwa',
  },
  '/pwa': {
    id: 6,
    title: 'Page are taking over native application',
    previous: '/javascript',
    next: '',
  },
};

export const Routes = [
  {
    path: '/',
    Component: Home,
  },
  {
    path: '/no-css',
    Component: Content,
  },
  {
    path: '/table',
    Component: Content,
  },
  {
    path: '/css',
    Component: Content,
  },
  {
    path: '/responsive',
    Component: Content,
  },
  {
    path: '/javascript',
    Component: Content,
  },
  {
    path: '/pwa',
    Component: Content,
  },
  {
    path: '*',
    Component: Home,
  },
];
