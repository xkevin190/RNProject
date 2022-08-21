import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {createSharedElementStackNavigator} from 'react-navigation-shared-element';
import {NavigationContainer} from '@react-navigation/native';
import Home from './views/Home';
import Profile from './views/Profile';
import Details from './views/Details';

interface AppProps {}

const Stack = createSharedElementStackNavigator();

const Navigator = (props: AppProps) => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen
          name="Details"
          sharedElements={(route, otherRoute, showing) => {
            const {id} = route.params;
            return [
              {
                resize: 'stretch',
                id: `item.${id}`,
                animation: 'fade-in',
              },
            ];
          }}
          component={Details}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;

const styles = StyleSheet.create({
  container: {},
});
