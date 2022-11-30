import React from 'react';
import styled from 'styled-components/native';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';
import Challenge from './src';
import { theme } from "./src/theme";

export default function App() {
  return (
    <Provider store={store}>
      <Challenge />
    </Provider>
  );
}

const AppContainer = styled.View`
  flex: 1;
  background-color: $(theme.colors.white);
  align-items: center;
  justify-content: center;
`;

