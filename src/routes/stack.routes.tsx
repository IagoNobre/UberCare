import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import TabRoutes from './tab.routes';
import Categoria from '../pages/Categoria';
import LocalCare from '../pages/LocalCare';
import WaitingCare from '../pages/WaitingCare';
import Cadastro from '../pages/Cadastro';

const { Navigator, Screen } = createStackNavigator();

const StackRoutes: React.FC = () => {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false }}>
        <Screen name="TabRoutes" component={TabRoutes} />
        <Screen name="Categoria" component={Categoria} />
        <Screen name="LocalCare" component={LocalCare} />
        <Screen name="WaitingCare" component={WaitingCare} />
        <Screen name="Cadastro" component={Cadastro} />
      </Navigator>
    </NavigationContainer>
  );
};

export default StackRoutes;
