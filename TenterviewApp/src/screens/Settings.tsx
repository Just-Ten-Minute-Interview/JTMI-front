import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Settings = () => {
  return (
    <View style={styles.container}>
      <View style={styles.setting_section}>
        <View style={styles.setting_title_box}>
          <Text style={styles.setting_title}>개인 환경 설정</Text>
        </View>
        <View style={styles.setting_item_list}>
          <View style={styles.setting_item}>
            <Text style={styles.item_text}>텐터뷰 테마</Text>
          </View>
        </View>
      </View>
      <View style={styles.setting_section}>
        <View style={styles.setting_title_box}>
          <Text style={styles.setting_title}>앱 정보</Text>
        </View>
        <View style={styles.setting_item_list}>
          <View style={styles.setting_item}>
            <Text style={styles.item_text}>버전 정보</Text>
          </View>
          <View style={styles.setting_item}>
            <Text style={styles.item_text}>
              이용약관/개인정보처리방침/청소년보호정책
            </Text>
          </View>
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
  },
  setting_section: {
    paddingVertical: 10,
  },
  setting_title_box: {
    paddingVertical: 10,
  },
  setting_title: {
    color: 'grey',
    fontSize: 14,
    fontWeight: '700',
  },
  setting_item_list: {},
  setting_item: {
    paddingVertical: 10,
    borderBottomColor: 'grey',
    borderBottomWidth: 0.5,
  },
  item_text: {
    color: '#000',
    fontSize: 16,
    fontWeight: '500',
  },
});

export default Settings;
