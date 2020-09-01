import 'react-native-gesture-handler';
import React from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { store, persistor } from './state/configureStore';
import MainStackNavigator from './navigations';
import { ThemeContextProvider } from './providers/ThemeProviders';

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <ThemeContextProvider>
          <MainStackNavigator />
        </ThemeContextProvider>
      </PersistGate>
    </Provider>
  );
}
