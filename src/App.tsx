import { Text } from '@nextui-org/react';
import Header from './components/Header/Header';
import TopEpisode from './components/Main/TopEpisode';
import { GlobalStyles } from './style/globalStyles';

function App() {
  GlobalStyles();
  return (
    <>
      <Header />
      <TopEpisode />
    </>
  );
}

export default App;
