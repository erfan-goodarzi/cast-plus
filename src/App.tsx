import { Text } from '@nextui-org/react';


function App() {
  return (
    <div className='App'>
      <Text
        h1
        size={60}
        css={{
          textGradient: '45deg, $blue600 -20%, $pink600 50%',
        }}
        weight='bold'>
        Let's
      </Text>
      <Text
        h1
        size={60}
        css={{
          textGradient: '45deg, $purple600 -20%, $pink600 100%',
        }}
        weight='bold'>
        Make the Web
      </Text>
      <Text
        h1
        size={60}
        css={{
          textGradient: '45deg, $yellow600 -20%, $red600 100%',
        }}
        weight='bold'>
        Prettier
      </Text>
    </div>
  );
}

export default App;
