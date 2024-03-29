import { Text } from '@nextui-org/react';
import type {
  MakeGenerics,
  Route as LocationRoute,
} from '@tanstack/react-location';
import { Navigate, ReactLocation, Router } from '@tanstack/react-location';

import { AppLayout } from './components';
import { Categories, Explore, Home, PodcastDetails } from './pages';

export interface Route extends Omit<LocationRoute<LocationGenerics>, 'path'> {
  path?: string;
  children?: Route[];
}

const routes: Route[] = [
  {
    path: '/home',
    element: <Home />,
  },
  {
    path: '/',
    element: <AppLayout />,
    children: [
      { path: '/categories', element: <Categories /> },
      {
        path: '/explore',
        element: <Explore />,
        children: [{ path: ':podcastId', element: <PodcastDetails /> }],
      },
      { element: <Navigate to="/home" /> },
    ],
  },
  {
    path: '/trending',
    element: <Text>This is trending page</Text>,
  },
  {
    path: '/podcasts',
    element: <Text>This is podcast page</Text>,
  },
  {
    element: <Navigate to="/home" />,
  },
];

type LocationGenerics = MakeGenerics<{
  LoaderData: { episodes: TopPodcast[]; episode: TopPodcast };
}>;

const location = new ReactLocation<LocationGenerics>();

export const Routes = () => {
  return <Router location={location} routes={routes} />;
};
