import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import React, { useCallback, useState } from 'react';
import { HomeStackParamList } from './HomeStack';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Markdown from 'react-native-markdown-package';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type QuestionDetailProps = NativeStackScreenProps<
  HomeStackParamList,
  'QuestionDetail'
>;

const copy = `# h1 Heading 8-)

**This is some bold text!**
**This is some bold text!**
**This is some bold text!**
**This is some bold text!**
**This is some bold text!**
**This is some bold text!**
**This is some bold text!**
**This is some bold text!**
**This is some bold text!**
**This is some bold text!**v
**This is some bold text!**
**This is some bold text!**
**This is some bold text!**
**This is some bold text!**
**This is some bold text!**
**This is some bold text!**
**This is some bold text!**
**This is some bold text!**
**This is some bold text!**
**This is some bold text!**
**This is some bold text!**
**This is some bold text!**
**This is some bold text!**

This is normal text
`;

const { width } = Dimensions.get('window');

const QuestionDetail = ({ route }: QuestionDetailProps) => {
  const [bookmark, setBookmark] = useState(false);

  const toggleBookmark = useCallback(() => {
    if (bookmark) {
      setBookmark(false);
    } else {
      setBookmark(true);
    }
  }, [bookmark]);

  return (
    <View style={styles.container}>
      <View style={styles.top_section}>
        <View style={styles.title_section}>
          <Text style={styles.title_text}>Q. {route.params.item.title}</Text>
        </View>
        <View style={styles.bookmark_section}>
          <TouchableOpacity onPress={toggleBookmark}>
            {bookmark ? (
              <FontAwesome name="star" size={25} color={'#12B886'} />
            ) : (
              <FontAwesome name="star-o" size={25} color={'#12B886'} />
            )}
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.main_section}>
        <Markdown styles={styles.main_text}>{copy}</Markdown>
      </View>
      <View style={styles.footer_section}>
        <View />
        <View style={styles.button_wrap}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.button_text}>이전</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.button_text}>다음</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingRight: 15,
    paddingLeft: 15,
    position: 'relative',
  },
  top_section: {
    flex: 1,
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 25,
    borderColor: '#12B886',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    backgroundColor: 'transparent',
    marginTop: 10,
  },
  title_section: {
    flex: 8,
    backgroundColor: 'transparent',
  },
  title_text: {
    fontSize: 16,
    color: '#000000',
    fontWeight: '600',
  },
  bookmark_section: {
    flex: 2,
    backgroundColor: 'transparent',
    alignItems: 'flex-end',
  },
  main_section: {
    flex: 9,
    backgroundColor: 'transparent',

    display: 'flex',
    flexDirection: 'row',
    paddingTop: 15,
    overflow: 'scroll',
  },
  main_text: {
    fontSize: 14,
    color: '#000000',
    fontWeight: '500',
  },
  footer_section: {
    height: 35,
    width: width,
    marginLeft: -15,
    paddingHorizontal: 15,
    justifyContent: 'space-between',
    flexDirection: 'row',
    backgroundColor: 'transparent',
  },
  button_wrap: {
    flexDirection: 'row',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  button: {
    height: 35,
    paddingHorizontal: 15,
    position: 'relative',
    backgroundColor: '#12B886',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
  },
  button_text: {
    fontSize: 14,
    color: '#000000',
  },
});

export default QuestionDetail;
