import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from '@screens/HomeScreen';
import BookmarkScreen from '@screens/BookmarkScreen';
import SettingScreen from '@screens/SettingScreen';
import HistoryScreen from '@screens/HistoryScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarShowLabel: false,
          tabBarStyle: {
            position: 'absolute',
            bottom: 15,
            left: 15,
            right: 15,
            backgroundColor: '#ffffff',
            borderRadius: 30,
            height: 60,
            ...styles.shadow,
          },
          headerShown: false,
          tabBarActiveTintColor: '#12B886',
          tabBarInactiveTintColor: '#748c94',
        }}>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ color }) => (
              <View style={styles.iconContainer}>
                <Ionicons
                  name="home-sharp"
                  size={25}
                  style={{
                    marginBottom: 5,
                  }}
                  color={color}
                />
                <Text
                  style={{
                    color: color,
                    fontSize: 12,
                  }}>
                  홈
                </Text>
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Bookmark"
          component={BookmarkScreen}
          options={{
            tabBarIcon: ({ color }) => (
              <View style={styles.iconContainer}>
                <Ionicons
                  name="bookmark"
                  size={25}
                  style={{
                    marginBottom: 5,
                  }}
                  color={color}
                />

                <Text
                  style={{
                    color: color,
                    fontSize: 12,
                  }}>
                  북마크
                </Text>
              </View>
            ),
          }}
        />

        <Tab.Screen
          name="History"
          component={HistoryScreen}
          options={{
            tabBarIcon: ({ color }) => (
              <View style={styles.iconContainer}>
                <FontAwesome
                  name="history"
                  size={25}
                  style={{
                    marginBottom: 5,
                  }}
                  color={color}
                />

                <Text
                  style={{
                    color: color,
                    fontSize: 12,
                  }}>
                  히스토리
                </Text>
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Setting"
          component={SettingScreen}
          options={{
            tabBarIcon: ({ color }) => (
              <View style={styles.iconContainer}>
                <Ionicons
                  name="settings"
                  size={25}
                  style={{
                    marginBottom: 5,
                  }}
                  color={color}
                />
                <Text
                  style={{
                    color: color,
                    fontSize: 12,
                  }}>
                  설정
                </Text>
              </View>
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#7f5df0',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    top: 3,
  },
});

export default TabNavigator;
