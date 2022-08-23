import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '~/screens/Home';
import Question from './Question';

export type HomeStackParamList = {
  InitHome: undefined;
  Question: { name: string };
};

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Question"
        component={Question}
        options={() => ({
          headerTitle: '',
        })}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
