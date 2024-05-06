import type { RouteObject } from 'react-router-dom';
import { lazy } from 'react';

const routeConfig: RouteObject[] = [
  {
    path: '/',
    Component: lazy(() => import('../layouts/BasicLayout')),
    children: [
      {
        path: '/',
        Component: lazy(() => import('../pages/home')),
      },
      {
        path: '/gecko',
        Component: lazy(() => import('../pages/gecko')),
      },
      {
        path: '/launchpad',
        Component: lazy(() => import('../pages/launchpad')),
      },
    ],
  },
  {
    path: '*',
    Component: lazy(() => import('../pages/not-found')),
  },
];

export default routeConfig;
