import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '~/screens/Home';
import Question from './Question';
import QuestionDetail from './QuestionDetail';
import { Problem } from '~/types/problem';

export type HomeStackParamList = {
  InitHome: undefined;
  Question: { name: string };
  QuestionDetail: { item: Problem };
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
      <Stack.Screen
        name="QuestionDetail"
        component={QuestionDetail}
        options={() => ({
          headerTitle: '',
        })}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
