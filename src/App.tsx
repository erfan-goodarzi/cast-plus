import Player from 'react-material-music-player';

import { ScrollToTop } from './components';
import { Routes } from './Routes';
import { useStore } from './store';
import { GlobalStyles } from './style';

const App = () => {
  const { isEpisodePlay } = useStore();

  GlobalStyles();

  return (
    <>
      <ScrollToTop />
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
      <Routes />
    </>
  );
};

export default App;
