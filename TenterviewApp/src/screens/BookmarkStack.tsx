import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import QuestionDetail from './QuestionDetail';
import { Problem } from '~/types/problem';
import Bookmark from './Bookmark';

export type BookmarkStackParamList = {
  HomeBookmark: undefined;
  QuestionDetail: { item: Problem };
};

const Stack = createNativeStackNavigator();

const BookmarkStack = () => {
  return (
    <Stack.Navigator initialRouteName="Bookmark">
      <Stack.Screen
        name="Bookmark"
        component={Bookmark}
        options={{ headerShown: false }}
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

export default BookmarkStack;
