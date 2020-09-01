import 'react-native-gesture-handler';
import React from 'react';
import MainStackNavigator from './navigations'
import { ThemeContextProvider } from './providers/ThemeProviders';

export default function App() {
  return (
    <ThemeContextProvider>
      <MainStackNavigator />
    </ThemeContextProvider>
  )
}