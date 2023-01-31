
import React, { useEffect } from 'react';
import { store } from './src/store/store';
import SplashScreen from 'react-native-splash-screen';
import RootNavigation from './src/navigations/RootNavigation';
// import AsyncStorage from '@react-native-async-storage/async-storage';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';

function App(): JSX.Element {

  let persistor = persistStore(store);

  useEffect( () => {
    SplashScreen.hide();
  },[])

  return (
    <Provider store={store} >
      <PersistGate loading={null} persistor={persistor}>
        <RootNavigation />
      </PersistGate>
    </Provider>
  );
}

export default App;