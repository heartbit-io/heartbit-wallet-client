import Home from '../screens/home/Home';
import MyData from '../screens/myData/MyData';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import Settings from '../screens/settings/Settings';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

function RootNavigator(): JSX.Element {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} options={{title: 'Home'}} />
        <Tab.Screen
          name="MyData"
          component={MyData}
          options={{title: 'MyData', tabBarBadge: 3}}
        />
        <Tab.Screen
          name="Settings"
          component={Settings}
          options={{title: 'Settings'}}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default RootNavigator;
