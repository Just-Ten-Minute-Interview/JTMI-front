import React, { useCallback, useState } from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import DefaultText from '~/components/DefaultText';
import EachQuestion from '~/components/EachQuestion';
import MainHeader from '~/components/MainHeader';

const Question = () => {
  const [questions, setQuestions] = useState([
    { id: '1' },
    { id: '2' },
    { id: '3' },
    { id: '4' },
    { id: '5' },
    { id: '6' },
    { id: '7' },
    { id: '8' },
    { id: '9' },
  ]);

  const renderItem = useCallback(() => {
    return <EachQuestion />;
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.mainWrap}>
        <MainHeader />

        <FlatList
          data={questions}
          keyExtractor={item => item.id}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
        />
      </View>
      <View style={styles.buttonWrap}>
        <DefaultText style={styles.buttonText}>시작하기</DefaultText>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    top: 3,
    flex: 1,
  },
  mainWrap: {
    flex: 20,
    alignItems: 'center',
  },
  buttonWrap: {
    padding: 20,
    height: 20,
    backgroundColor: '#12B886',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '700',
  },
});

export default Question;
