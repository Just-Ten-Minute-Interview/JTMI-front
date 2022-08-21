import React, { useCallback } from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

function InitHome({ navigation }: any) {
  const onPressCategory = useCallback(
    (name: string) => {
      navigation.push('Question', { name });
    },
    [navigation],
  );

  return (
    <View style={styles.container}>
      <LinearGradient
        style={styles.top_section}
        colors={['#12B886', '#00c362']}>
        <Text style={styles.top_text}>텐터뷰</Text>
      </LinearGradient>
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
              <Text style={styles.box_text}>프론트엔드</Text>
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
              <Text style={styles.box_text}>CS</Text>
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
              <Text style={styles.box_text}>백엔드</Text>
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
              <Text style={styles.box_text}>내 히스토리</Text>
            </View>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const gap = 30;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eaffed',
  },
  top_section: {
    flex: 2,
    backgroundColor: 'red',
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
    marginTop: 10,
  },
  box: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: gap / -2,
    paddingVertical: gap / -2,
  },

  sub_box: {
    width: 140,
    height: 140,
    borderRadius: 25,
    flexGrow: 1,
    marginLeft: 20,
    marginRight: 20,
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
    borderWidth: 3,
    borderColor: '#00c362',
    borderStyle: 'solid',
    backgroundColor: '#00c362',
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

  box_text: { fontSize: 20, fontWeight: '700', color: '#ffffff' },

  top_text: {
    fontSize: 54,
    color: '#ffffff',
    fontWeight: '700',
  },

  box_image: {
    flex: 1,
    resizeMode: 'cover',
    width: '100%',
  },
});

export default InitHome;
