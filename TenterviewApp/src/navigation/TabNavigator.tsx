import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, View } from 'react-native';
import Home from '~/screens/Home';
import Bookmark from '~/screens/Bookmark';
import Settings from '~/screens/Settings';
import History from '~/screens/History';
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
          tabBarInactiveTintColor: '#b0f2dd',
        }}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
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
          }}
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
          name="History"
          component={History}
          options={{
            tabBarIcon: ({ color }) => (
              <View style={styles.iconContainer}>
                <FontAwesome
                  name="history"
                  size={25}
                  style={styles.icon}
                  color={color}
                />
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Setting"
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

export default TabNavigator;
