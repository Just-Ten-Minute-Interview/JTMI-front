import { View, Text } from 'react-native';
import React from 'react';
import { HomeStackParamList } from './HomeStack';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type QuestionDetailProps = NativeStackScreenProps<
  HomeStackParamList,
  'QuestionDetail'
>;

const QuestionDetail = ({ route }: QuestionDetailProps) => {
  return (
    <View>
      <Text>{route.params.item.title}</Text>
    </View>
  );
};

export default QuestionDetail;
