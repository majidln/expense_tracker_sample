import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './index';
import rootSaga from './saga';

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['income']
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

function configStore() {
  const store = createStore(persistedReducer, applyMiddleware(sagaMiddleware));

  const persistor = persistStore(store);

  sagaMiddleware.run(rootSaga);

  return { store, persistor };
}

const { store, persistor } = configStore();
export { store, persistor };
