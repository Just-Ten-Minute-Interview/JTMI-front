import React, { useCallback, useState } from 'react';
import { FlatList, View } from 'react-native';
import EachQuestion from '~/components/EachQuestion';

function QuestionScreen() {
  const [questions, setQuestions] = useState([
    { id: '1' },
    { id: '2' },
    { id: '3' },
    { id: '4' },
  ]);

  const renderItem = useCallback(() => {
    return <EachQuestion />;
  }, []);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <FlatList
        data={questions}
        keyExtractor={item => item.id}
        renderItem={renderItem}
      />
    </View>
  );
}

export default QuestionScreen;
