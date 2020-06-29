import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';

import TabBarIcon from '../components/TabBarIcon';
import RocketScreen from '../screens/RocketScreen';
import NewsScreen from '../screens/NewsScreen';
import MarsWheatherServiceScreen from '../screens/MarsWheatherServiceScreen';
import LaunchesScreen from '../screens/LaunchesScreen';
import DailyScreen from '../screens/DailyScreen';

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'Rocket';

export default function BottomTabNavigator({ navigation, route }) {
  // Set the header title on the parent stack navigator depending on the
  // currently active tab. Learn more in the documentation:
  // https://reactnavigation.org/docs/en/screen-options-resolution.html
  navigation.setOptions({ headerTitle: getHeaderTitle(route) });
  navigation.setOptions({ headerStyle: { backgroundColor: 'black' }, headerTintColor: '#E7CB25' });

  return (
    <BottomTab.Navigator initialRouteName={INITIAL_ROUTE_NAME} tabBarOptions={{
      style: {
        backgroundColor: 'black',
      },
      activeTintColor: '#fff',
      inactiveTintColor: 'rgba(255, 255, 255, 0.6)',
      keyboardHidesTabBar: true,
    }}>
      <BottomTab.Screen
        name="Rockets"
        component={RocketScreen}
        options={{
          title: 'Rockets',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-jet" />,
        }}
      />
      <BottomTab.Screen
        name="News"
        component={NewsScreen}
        options={{
          title: 'News',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-list" />,
        }}
      />
      <BottomTab.Screen
        name="Daily"
        component={DailyScreen}
        options={{
          title: 'Daily',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-apps" />,
        }}
      />
      <BottomTab.Screen
        name="Launches"
        component={LaunchesScreen}
        options={{
          title: 'Launches',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-globe" />,
        }}
      />
      {/*
      <BottomTab.Screen
        name="MarsWheatherService"
        component={MarsWheatherServiceScreen}
        options={{
          title: 'Mars',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-infinite" />,
        }}
      /> */}
    </BottomTab.Navigator>
  );
}

function getHeaderTitle(route) {
  const routeName = route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;

  /*
  switch (routeName) {
    case 'Rockets':
      return 'Rockets';
    case 'News':
      return 'News';
    case 'Daily':
      return 'Daily';
    case 'Launches':
      return 'Launches';
    case 'MarsWheatherService':
      return 'Mars';
  } */
  return '';
}
