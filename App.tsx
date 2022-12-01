import React from 'react';
import styled from 'styled-components/native';
import { Provider } from 'react-redux';
import { store, persistor } from './src/redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import Challenge from './src';
import { theme } from "./src/theme";


export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Challenge />
      </PersistGate>
    </Provider>
  );
}



