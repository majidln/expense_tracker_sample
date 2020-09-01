import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import i18n from '../services/i18n';
import MainScreen from '../screens/MainScreen';
import SettingScreen from '../screens/SettingScreen';
import IncomeScreen from '../screens/Income';
import ModalScreen from '../screens/ModalScreen';

const Stack = createStackNavigator();
function MainStackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Main"
        screenOptions={{
          headerTintColor: 'white',
          headerStyle: { backgroundColor: '#22a6b3' },
        }}
      >
        <Stack.Screen name="Main" component={MainScreen} options={{ title: i18n.t('navigation.home') }} />
        <Stack.Screen name="Setting" component={SettingScreen} options={{ title: i18n.t('navigation.setting') }} />
        <Stack.Screen name="Income" component={IncomeScreen} options={{ title: i18n.t('navigation.income') }} />
        <Stack.Screen name="Modal" component={ModalScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default MainStackNavigator;
