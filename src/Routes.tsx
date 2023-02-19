import { Text } from '@nextui-org/react';
import {
  MakeGenerics,
  Navigate,
  ReactLocation,
  Router,
} from '@tanstack/react-location';
import { AppLayout } from './components/Layout';
import { Explore, Home, PodcastDetails } from './pages';

const routes = [
  {
    path: '/home',
    element: <Home />,
  },
  {
    path: '/explore',
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <Explore />,
      },
      { path: ':podcastId', element: <PodcastDetails /> },
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
    element: <Navigate to='/home' />,
  },
];

type LocationGenerics = MakeGenerics<{
  LoaderData: { episodes: TopPodcast[]; episode: TopPodcast };
}>;

const location = new ReactLocation<LocationGenerics>();

export const Routes = () => {
  return <Router location={location} routes={routes} />;
};
