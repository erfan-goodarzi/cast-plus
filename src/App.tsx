import { Text } from '@nextui-org/react';
import Player from 'react-material-music-player';
import Header from './components/Header/Header';
import TodayEpisodes from './components/Main/TodayEpisodes';
import TopEpisode from './components/Main/TopEpisode';
import { GlobalStyles } from './style/globalStyles';

function App() {
  GlobalStyles();
  return (
    <>
      <Header />
      <TopEpisode />
      <TodayEpisodes />
      <Player
        disableDrawer={false}
        sx={{
          zIndex: 10,
          ml: '3rem',
          width: '90%',
        }}
      />
    </>
  );
}

export default App;
