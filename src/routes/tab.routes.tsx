import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '../pages/Home';
import Care from '../pages/Care';
import Delivery from '../pages/Delivery';

import CarroIcon from '../assets/carro.svg';
import CareIcon from '../assets/ambulancia.svg';
import DeliveryIcon from '../assets/delivery.svg';

const { Screen, Navigator } = createBottomTabNavigator();

const TabRoutes: React.FC = () => {
  return (
    <Navigator
      tabBarOptions={{
        style: {
          elevation: 0,
          shadowOpacity: 0,
          height: 86,
        },
        tabStyle: {
          alignItems: 'center',
          justifyContent: 'center',
        },
        iconStyle: {
          flex: 0,
          width: 20,
          height: 20,
        },
        labelStyle: {
          fontFamily: 'UberMoveText Medium',
          fontSize: 12,
          marginTop: 12,
          color: '#000000',
        },
        inactiveBackgroundColor: '#F6F6F6',
        activeBackgroundColor: '#F6F6F6',
        inactiveTintColor: '#000000',
        activeTintColor: '#000000',
      }}
    >
      <Screen
        name="Viagem"
        component={Home}
        options={{
          tabBarIcon: () => <CarroIcon width={22} />,
        }}
      />
      <Screen
        name="Delivery"
        component={Delivery}
        options={{
          tabBarIcon: () => <DeliveryIcon width={22} />,
        }}
      />
      <Screen
        name="Care"
        component={Care}
        options={{
          tabBarVisible: false,
          tabBarIcon: () => <CareIcon width={24} />,
        }}
      />
    </Navigator>
  );
};

export default TabRoutes;
