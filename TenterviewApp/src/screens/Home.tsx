import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import InitHome from '~/screens/InitHome';
import QuestionScreen from './Question';

const Stack = createNativeStackNavigator();

const Home = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={InitHome}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Question"
        component={QuestionScreen}
        options={() => ({
          headerTitle: '',
        })}
      />
    </Stack.Navigator>
  );
};

export default Home;
