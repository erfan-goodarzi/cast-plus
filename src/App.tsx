import { Text } from '@nextui-org/react';
import { MakeGenerics, ReactLocation, Router } from '@tanstack/react-location';
import Player from 'react-material-music-player';
import { Home, Explore } from './pages';
import { GlobalStyles } from './style';
import { useStore } from './store/PlayerStore';

type LocationGenerics = MakeGenerics<{
  LoaderData: { episodes: TopPodcast[]; episode: TopPodcast };
}>;

function App() {
  const { isEpisodePlay } = useStore();
  GlobalStyles();
  const location = new ReactLocation<LocationGenerics>();
  return (
    <>
      {isEpisodePlay ? (
        <Player
          disableDrawer={false}
          sx={{
            zIndex: 10,
            ml: '3rem',
            width: '90%',
          }}
        />
      ) : null}

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
        ]}
      />
    </>
  );
}

export default App;
