import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Home from '../home/HomeContainer';
import DutyPoint from '../dutyPoint/DutyPointContainer';
import FutureTraffic from '../futureTraffic/FutureTrafficContainer';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="DutyPoint"
          component={DutyPoint}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="FutureTraffic"
          component={FutureTraffic}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
