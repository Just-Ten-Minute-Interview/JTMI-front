import React from 'react';
import {
  getFocusedRouteNameFromRoute,
  NavigationContainer,
} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, View } from 'react-native';
import HomeStack from '~/screens/HomeStack';
import Bookmark from '~/screens/Bookmark';
import Settings from '~/screens/Settings';
import Create from '~/screens/History';
import Ionicons from 'react-native-vector-icons/Ionicons';

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
              position: 'absolute',
              bottom: 15,
              left: 15,
              right: 15,
              backgroundColor: '#ffffff',
              borderRadius: 30,
              height: 60,
              ...styles.shadow,
              display: getRouteName(route),
            },
          })}
        />
        <Tab.Screen
          name="Bookmark"
          component={Bookmark}
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
          name="Settings"
          component={Settings}
          options={{
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
  icon: {
    marginBottom: 5,
  },
  iconText: {
    fontSize: 12,
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
