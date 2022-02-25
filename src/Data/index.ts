import { Home, Content } from '../Page';

export const Pages = [
  {
    link: '/',
    label: 'Home',
  },
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
    title: 'Page with CSS',
    previous: '/table',
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
    path: '*',
    Component: Home,
  },
];
