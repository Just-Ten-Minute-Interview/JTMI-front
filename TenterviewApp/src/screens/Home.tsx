import React, { useCallback } from 'react';
import { Image, Pressable, StyleSheet, View } from 'react-native';
import DefaultText from '~/components/DefaultText';

function Home({ navigation }: any) {
  const onPressCategory = useCallback(
    (name: string) => {
      navigation.push('Question', { name });
    },
    [navigation],
  );

  return (
    <View style={styles.container}>
      <View style={styles.top_section}>
        <DefaultText style={styles.top_text}>텐터뷰</DefaultText>
      </View>
      <View style={styles.main_section}>
        <View style={styles.box}>
          <Pressable
            style={styles.sub_box}
            onPress={() => onPressCategory('프론트엔드')}>
            <View style={styles.sub_box_inner_top}>
              <Image
                style={styles.box_image}
                source={require('@assets/images/top_image.jpg')}
              />
            </View>
            <View style={styles.sub_box_inner_bottom}>
              <DefaultText style={styles.box_text}>프론트엔드</DefaultText>
            </View>
          </Pressable>
          <Pressable
            style={styles.sub_box}
            onPress={() => onPressCategory('백엔드')}>
            <View style={styles.sub_box_inner_top}>
              <Image
                style={styles.box_image}
                source={require('@assets/images/top_image.jpg')}
              />
            </View>
            <View style={styles.sub_box_inner_bottom}>
              <DefaultText style={styles.box_text}>백엔드</DefaultText>
            </View>
          </Pressable>
          <Pressable
            style={styles.sub_box}
            onPress={() => onPressCategory('CS')}>
            <View style={styles.sub_box_inner_top}>
              <Image
                style={styles.box_image}
                source={require('@assets/images/top_image.jpg')}
              />
            </View>
            <View style={styles.sub_box_inner_bottom}>
              <DefaultText style={styles.box_text}>CS</DefaultText>
            </View>
          </Pressable>

          <Pressable
            style={styles.sub_box}
            onPress={() => onPressCategory('내 히스토리')}>
            <View style={styles.sub_box_inner_top}>
              <Image
                style={styles.box_image}
                source={require('@assets/images/top_image.jpg')}
              />
            </View>
            <View style={styles.sub_box_inner_bottom}>
              <DefaultText style={styles.box_text}>내 히스토리</DefaultText>
            </View>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const gap = 20;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingRight: 15,
    paddingLeft: 15,
  },
  top_section: {
    flex: 2,
    paddingTop: 10,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  main_section: {
    flex: 8,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    display: 'flex',
    flexDirection: 'row',
    paddingTop: 20,
  },
  box: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: gap / -2,
    paddingVertical: gap / -2,
  },

  sub_box: {
    width: 135,
    height: 165,
    borderRadius: 25,
    flexGrow: 1,

    marginHorizontal: gap / 2,
    marginVertical: gap / 2,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    backgroundColor: '#fff',
  },

  sub_box_inner_top: {
    flex: 7,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    borderTopRightRadius: 22,
    borderTopLeftRadius: 22,
    overflow: 'hidden',
  },

  sub_box_inner_bottom: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },

  top_text: {
    fontSize: 40,
    color: '#12B886',
    fontWeight: '600',
  },

  box_text: { fontSize: 24, fontWeight: '700', color: '#12B886' },
  box_image: {
    flex: 1,
    resizeMode: 'cover',
    width: '100%',
  },
});

export default Home;
