import Player from 'react-material-music-player';
import { GlobalStyles } from './style';
import { useStore } from './store/PlayerStore';
import { Routes } from './Route';

function App() {
  const { isEpisodePlay } = useStore();
  GlobalStyles();

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

      <Routes />
    </>
  );
}

export default App;
