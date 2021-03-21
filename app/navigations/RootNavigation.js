import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import config from '../config';
import {Home, Songs} from '../screens';
import {NavigationContainer} from '@react-navigation/native';
import SplashScreen from '../screens/SplashScreen';
import Login from '../screens/auth/Login';
import {navigationRef} from './Navigator';

const Stack = createStackNavigator();

const RootNavigation = () => {
  // const routeNameRef = React.useRef();

  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator headerMode={'screen'}>
        <Stack.Screen
          options={{headerShown: false}}
          name="SplashScreen"
          component={SplashScreen}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Main"
          component={MainNavigator}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Auth"
          component={AuthNavigator}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const MainNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{headerShown: true}}
        name={config.routes.HOME}
        component={Home}
      />
      <Stack.Screen name={config.routes.SONGS} component={Songs} />
    </Stack.Navigator>
  );
};

const AuthNavigator = () => {
  return (
    <Stack.Navigator headerMode={'model'}>
      <Stack.Screen
        options={{headerShown: false}}
        name="Login"
        component={Login}
      />
    </Stack.Navigator>
  );
};

export default RootNavigation;
