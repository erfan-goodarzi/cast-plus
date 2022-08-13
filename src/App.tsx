import { Text } from '@nextui-org/react';
import Header from './components/Header/Header';
import { GlobalStyles } from './style/globalStyles';

function App() {
  GlobalStyles();
  return (
    <>
      <Header />
    </>
  );
}

export default App;
