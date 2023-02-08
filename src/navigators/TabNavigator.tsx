import Home from '../screens/home/Home';
import MyDataStackNavigator from './MyDataStackNavigator';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import Settings from '../screens/settings/Settings';
import Welcome from '../screens/welcome/Welcome';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();

function TabNavigator(): JSX.Element {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={() => ({
          headerShown: false,
        })}>
        <Tab.Screen
          name="Welcome"
          component={Welcome}
          options={{title: 'Welcome'}}
        />
        <Tab.Screen name="Home" component={Home} options={{title: 'Home'}} />
        <Tab.Screen
          name="MyDataStackNavigator"
          component={MyDataStackNavigator}
          options={{title: 'My Data', tabBarBadge: 1}}
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

export default TabNavigator;
