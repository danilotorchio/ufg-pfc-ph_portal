import { lazy } from 'solid-js';
import { RouteDefinition, Navigate, useRoutes } from '@solidjs/router';

const routes: RouteDefinition[] = [
  {
    path: '/auth',
    component: lazy(() => import('../components/auth/AuthLayout')),
    children: [
      {
        path: '/login',
        component: lazy(() => import('../components/auth/Login')),
      },
    ],
  },
  {
    path: '*',
    component: () => <Navigate href={'/auth/login'} />,
  },
];

export default useRoutes(routes);
