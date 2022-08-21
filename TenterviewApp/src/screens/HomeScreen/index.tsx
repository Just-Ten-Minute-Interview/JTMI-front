import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import InitHome from '~/components/InitHome';
import QuestionScreen from '../QuestionScreen';

const Stack = createNativeStackNavigator();

const HomeScreen = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={InitHome}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Question" component={QuestionScreen} />
    </Stack.Navigator>
  );
};

export default HomeScreen;
