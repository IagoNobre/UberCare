import React from 'react';

import { AppLoading } from 'expo';
import { useFonts } from 'expo-font';
import Routes from './src/routes/index.routes';

const App: React.FC = () => {
  const [fontsLoaded] = useFonts({
    'UberMove Light': require('./src/fonts/UberMove-Light.ttf'),
    'UberMove Regular': require('./src/fonts/UberMove-Regular.ttf'),
    'UberMove Medium': require('./src/fonts/UberMove-Medium.ttf'),
    'UberMove Bold': require('./src/fonts/UberMove-Bold.ttf'),
    'UberMoveText Light': require('./src/fonts/UberMoveText-Light.ttf'),
    'UberMoveText Regular': require('./src/fonts/UberMoveText-Regular.ttf'),
    'UberMoveText Medium': require('./src/fonts/UberMoveText-Medium.ttf'),
    'UberMoveText Bold': require('./src/fonts/UberMoveText-Bold.ttf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return <Routes />;
};

export default App;
