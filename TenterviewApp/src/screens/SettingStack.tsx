import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Settings from '~/screens/Settings';
import Question from './Question';

export type SettingStackParamList = {
  Settings: undefined;
};

const Stack = createNativeStackNavigator();

const SettingStack = () => {
  return (
    <Stack.Navigator initialRouteName="Settings">
      <Stack.Screen
        name="Settings"
        component={Settings}
        options={() => ({
          headerTitle: '설정',
        })}
      />
      <Stack.Screen
        name="SettingsDetail"
        component={Question}
        options={() => ({
          headerTitle: '',
        })}
      />
    </Stack.Navigator>
  );
};

export default SettingStack;
