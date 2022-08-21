import { Text } from '@nextui-org/react';
import Header from './components/Header/Header';
import TodayEpisodes from './components/Main/TodayEpisodes';
import TopEpisode from './components/Main/TopEpisode';
import { GlobalStyles } from './style/globalStyles';

function App() {
  GlobalStyles();
  return (
    <>
      <Header />
      {/* <TopEpisode /> */}
      {/* <TodayEpisodes /> */}
    </>
  );
}

export default App;
