import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { TouchableOpacity } from 'react-native';
import i18n from '../services/i18n';
import { IonicIcon } from '../components';
import MainScreen from '../screens/MainScreen';
import SettingScreen from '../screens/Setting';
import IncomeScreen from '../screens/Income';
import OutcomeScreen from '../screens/Outcome';

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
        <Stack.Screen
          name="Main"
          component={MainScreen}
          options={({ navigation }) => ({
            title: i18n.t('navigation.home'),
            headerRight: () => (
              <TouchableOpacity onPress={() => navigation.navigate('Setting')}>
                <IonicIcon
                  name="settings"
                  color="white"
                  size={20}
                  style={{ marginRight: 8 }}
                />
              </TouchableOpacity>
            ),
          })}
        />
        <Stack.Screen name="Setting" component={SettingScreen} options={{ title: i18n.t('navigation.setting') }} />
        <Stack.Screen name="Income" component={IncomeScreen} options={{ title: i18n.t('navigation.income') }} />
        <Stack.Screen name="Outcome" component={OutcomeScreen} options={{ title: i18n.t('navigation.outcome') }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default MainStackNavigator;
