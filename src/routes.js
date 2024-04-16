// routes.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Main from './pages/main/index';
import Details from './pages/details/details';

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="main"
          component={Main}
          options={{
            title: 'MAIN',
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: '#3498db',
            },
            headerTitleStyle: {
              fontWeight: 'bold',
              color: '#fff',
            },
          }}
        />
        <Stack.Screen
          name="details"
          component={Details}
          options={{
            title: 'DETAILS',
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: '#3498db',
            },
            headerTitleStyle: {
              fontWeight: 'bold',
              color: '#fff',
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
