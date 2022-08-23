import React, { useCallback, useState } from 'react';
import {
  Dimensions,
  Pressable,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import DefaultText from './DefaultText';

const { width } = Dimensions.get('window');

const EachQuestion = () => {
  const [bookmark, setBookmark] = useState(false);

  const toggleBookmark = useCallback(() => {
    if (bookmark) {
      setBookmark(false);
    } else {
      setBookmark(true);
    }
  }, [bookmark]);

  return (
    <View style={styles.questionContainer}>
      <Pressable style={styles.info}>
        <View>
          <DefaultText style={styles.infoTitle}>
            Q. 클로저란 무엇인가
          </DefaultText>
        </View>
      </Pressable>
      <Pressable style={styles.category}>
        <View>
          <DefaultText style={styles.categoryText}>#JS</DefaultText>
        </View>
      </Pressable>
      <TouchableOpacity style={styles.icon} onPress={toggleBookmark}>
        {bookmark ? (
          <FontAwesome name="star" size={20} color={'#12B886'} />
        ) : (
          <FontAwesome name="star-o" size={20} color={'#12B886'} />
        )}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  questionContainer: {
    borderRadius: 5,
    margin: 5,
    padding: 10,
    backgroundColor: '#fff',
    width: width - 20,
    height: 60,
    position: 'relative',
    flex: 1,
  },
  info: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
  },
  category: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    flex: 1,
  },
  categoryText: {
    fontSize: 12,
    fontWeight: '500',
    color: '#6b6f72',
  },
  infoTitle: {
    color: '#000000',
    fontWeight: '600',
    fontSize: 15,
  },
  icon: {
    position: 'absolute',
    right: 10,
    top: 10,
  },
});

export default EachQuestion;
