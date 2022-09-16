import React from 'react';
import {
  getFocusedRouteNameFromRoute,
  NavigationContainer,
} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, View } from 'react-native';
import HomeStack from '~/screens/HomeStack';
import Bookmark from '~/screens/Bookmark';
import Create from '~/screens/History';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SettingStack from '~/screens/SettingStack';
import BookmarkStack from '~/screens/BookmarkStack';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarShowLabel: false,

          tabBarStyle: {
            ...styles.tabBar,
          },
          headerShown: false,
          tabBarActiveTintColor: '#12B886',
          tabBarInactiveTintColor: '#b0f2dd',
        }}>
        <Tab.Screen
          name="HomeStack"
          component={HomeStack}
          options={({ route }) => ({
            tabBarIcon: ({ color }) => (
              <View style={styles.iconContainer}>
                <Ionicons
                  name="home-sharp"
                  size={25}
                  style={styles.icon}
                  color={color}
                />
              </View>
            ),
            tabBarStyle: {
              ...styles.tabBar,
              display: getRouteName(route),
            },
          })}
        />
        <Tab.Screen
          name="BookmarkStack"
          component={BookmarkStack}
          options={{
            tabBarIcon: ({ color }) => (
              <View style={styles.iconContainer}>
                <Ionicons
                  name="bookmark"
                  size={25}
                  style={styles.icon}
                  color={color}
                />
              </View>
            ),
          }}
        />

        <Tab.Screen
          name="Create"
          component={Create}
          options={{
            tabBarIcon: ({ color }) => (
              <View style={styles.iconContainer}>
                <Ionicons
                  name="add-circle"
                  size={25}
                  style={styles.icon}
                  color={color}
                />
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="SettingStack"
          component={SettingStack}
          options={({ route }) => ({
            tabBarIcon: ({ color }) => (
              <View style={styles.iconContainer}>
                <Ionicons
                  name="settings"
                  size={25}
                  style={styles.icon}
                  color={color}
                />
              </View>
            ),
            tabBarStyle: {
              ...styles.tabBar,
              display: getRouteName(route),
            },
          })}
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
  icon: {
    marginBottom: 5,
  },
  iconText: {
    fontSize: 12,
  },
  tabBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#ffffff',
    height: 60,
    borderTopWidth: 2,
    borderColor: 'gray',
  },
});

const getRouteName = (route: any) => {
  const routeName = getFocusedRouteNameFromRoute(route);
  if (routeName?.includes('Question') || routeName?.includes('Settings')) {
    return 'none';
  }
  return 'flex';
};

export default TabNavigator;
