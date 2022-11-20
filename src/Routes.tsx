import { Text } from '@nextui-org/react';
import {
  MakeGenerics,
  Navigate,
  ReactLocation,
  Router,
} from '@tanstack/react-location';
import { Explore, Home } from './pages';

const routes = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/explore',
    element: <Explore />,
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
    element: <Navigate to='/' />,
  },
];

type LocationGenerics = MakeGenerics<{
  LoaderData: { episodes: TopPodcast[]; episode: TopPodcast };
}>;

const location = new ReactLocation<LocationGenerics>();

export const Routes = () => {
  return <Router location={location} routes={routes} />;
};
