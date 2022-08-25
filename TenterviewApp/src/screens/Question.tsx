import React, { useCallback, useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import DefaultText from '~/components/DefaultText';
import EachQuestion from '~/components/EachQuestion';
import MainHeader from '~/components/MainHeader';
import { Problem } from '~/types/problem';

const Question = () => {
  const [questions, setQuestions] = useState([
    { id: '1', title: '클로저란 무엇인가?' },
    { id: '2', title: '변수란 무엇인가?' },
    { id: '3', title: 'var, const, let 차이점은?' },
    { id: '4', title: '이벤트 버블링이란?' },
    { id: '5', title: '이벤트 캡쳐란?' },
    { id: '6', title: '브라우저 렌더링' },
    { id: '7', title: '테스트테스트테스트테스트' },
    { id: '8', title: '굿굿굿굿굿굿' },
    { id: '9', title: 'whwhytwhyhwhywwfsdfsfwefw' },
  ]);

  const renderItem = useCallback(({ item }: { item: Problem }) => {
    return <EachQuestion item={item} />;
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
