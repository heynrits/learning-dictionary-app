/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';
import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

import {Home} from './activities/Home';
import {NewEntry} from './activities/NewEntry';
import {SummaryDetails} from './activities/SummaryDetails';
import {Text, Button, TouchableOpacity} from 'react-native';

const App: () => React$Node = () => {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              title: 'Learning Dictionary',
              headerTitleStyle: {
                color: '#2e7d32',
              },
            }}
          />
          <Stack.Screen
            name="NewEntry"
            component={NewEntry}
            options={{
              title: 'Create new entry...',
              headerTitleStyle: {
                color: '#2e7d32',
              },
            }}
          />
          <Stack.Screen
            name="SummaryDetails"
            component={SummaryDetails}
            options={{title: 'Summary Details'}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
