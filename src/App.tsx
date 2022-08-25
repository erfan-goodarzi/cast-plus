import { Text } from '@nextui-org/react';
import { MakeGenerics, ReactLocation, Router } from '@tanstack/react-location';
import Player from 'react-material-music-player';
import TodayEpisodes from './components/Main/TodayEpisodes';
import TopEpisode from './components/Main/TopEpisode';
import Nav from './components/Ui/Nav';
import Home from './pages/Home';
import { GlobalStyles } from './style/globalStyles';

type LocationGenerics = MakeGenerics<{
  LoaderData: { episodes: TopEpisode[]; episode: TopEpisode };
}>;

function App() {
  GlobalStyles();
  const location = new ReactLocation<LocationGenerics>();
  return (
    <>
      <Player
        disableDrawer={false}
        sx={{
          zIndex: 10,
          ml: '3rem',
          width: '90%',
        }}
      />
      <Router
        location={location}
        routes={[
          {
            path: '/',
            element: <Home />,
            // children: [
            //   {
            //     path: '/home',
            //     element: <TopEpisode />,
            //   },
            //   {
            //     path: '/cate',
            //     element: 'category page',

            //     // children: [
            //     //   { path: '/', element: 'Select a post.' },
            //     //   {
            //     //     path: ':postId',
            //     //     element: <Post />,
            //     //     loader: routeCache.createLoader(
            //     //       async ({ params: { postId } }) => ({
            //     //         post: await fetchPostById(postId),
            //     //       }),
            //     //       {
            //     //         maxAge: 1000 * 10, // 10 seconds
            //     //       }
            //     //     ),
            //     //   },
            //     // ],
            //   },
            // ],
          },
          {
            path: '/categories',
            element: <Text>This is category pages</Text>,
          },
          {
            path: '/trending',
            element: <Text>This is trending page</Text>,
          },
          {
            path: '/podcasts',
            element: <Text>This is podcast page</Text>,
          },
        ]}
      />
    </>
  );
}

export default App;
