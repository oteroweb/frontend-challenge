import React from 'react';
import { Image, Text, View, TouchableOpacity, TextInput, StyleSheet, SafeAreaView, Alert } from 'react-native';
import styled from 'styled-components/native';
import { useSelector } from 'react-redux'

import Register from './screens/Register';
import Home from './screens/Home';
import { theme } from "./theme";

import type { RootState } from './redux/store';
import { isLoggedInSelector, register, setIsloggedIn } from './redux/auth'

const RoundedContainer = styled.View<{ bgColor: string; padding: number }>`
    flex: 1;
    background-color: ${(props) => props.bgColor ?? 'transparent'};
    padding: ${(props) => props.padding ?? 0}px;
`;

// Más instrucciones en https://yanatechnologies.notion.site/Frontend-Challenge-9427a4f79be54b5bb8c3ace2dd93a414
const Challenge = () => {
  const isLoggedIn = useSelector((state: RootState) => state.user.isLoggedIn)
  return (
    <RoundedContainer bgColor={theme.white} padding={0} margin={0}>
      {
        !isLoggedIn
          ? <Register />
          : <Home />
      }
    </RoundedContainer>
  );
};

export default Challenge;

const CodeText = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #a33;
  background-color: #eee;
  padding: 0 4px;
`;
const YanaAvatar = styled(Image)`
  width: 100px;
  height: 100px;
`;
const TextInstructionsContainer = styled.View`
  margin-left: 12px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;