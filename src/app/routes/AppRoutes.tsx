import { lazy } from 'solid-js';
import { Navigate, RouteDefinition, useRoutes } from '@solidjs/router';

const routes: RouteDefinition[] = [
  {
    path: '/area',
    component: lazy(() => import('../layout/Layout')),
    children: [
      {
        path: '/dashboard',
        component: lazy(() => import('../components/dashboard/Dashboard')),
      },
    ],
  },
  {
    path: '*',
    component: () => <Navigate href={'/area/dashboard'} />,
  },
];

export default useRoutes(routes);
