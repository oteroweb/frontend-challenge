import React from 'react';
import styled from 'styled-components/native';
import { dictionary } from '../../dictionary';
import { Text, View, Image, TouchableOpacity, TextInput, SafeAreaView, Alert } from 'react-native';
import { useSelector, useDispatch } from 'react-redux'


import type { RootState } from '../../redux/store';
import { register, setIsloggedIn, logout } from '../../redux/auth'

interface userType {
   username: string;
   email: string;
   pass: string;
   isLoggedIn: boolean;
}

const ProfileContainer = styled.View`
  align-items: center;
  justify-content: center;
  background-color: #fff;
  flex: 1;
`
const HeaderContainer = styled.View`
  flex: 2; 
  align-items:center;
  justify-content: center;
  /* margin-top:20px; */
`

const StyledProfile = styled.View`
   width: 96px;
   height: 96px;
   border-radius: 50px;
   background-color: #C4C4C4;

`
const ContainerForm = styled.View`
  flex: 2
  
`

const StyledButtonContainer = styled.View`
  min-width: 90%;
  flex: 1;
`
const StyledTouchableOpacity = styled.TouchableOpacity`
  background-color: #FFC5C5;
  padding: 10px;
  border-radius: 32px;
  height:64px;
  justify-content:center;
  align-items: center;
`
const StyledText = styled.Text`
  color: #000000;
  text-align: center;
  font-size:16px;
  font-weight:700;
  line-height:24px;
  margin-bottom: 32px;
`

const StyledLabel = styled.Text`
text-align:center;
font-weight: 700;
font-size: 12px;
line-height: 24px;
text-align: center;
color: #000000;
opacity: 0.5;

`
const StyledButtonText = styled.Text`
  color: #671111;
  text-align: center;
  font-size:16px;
  font-weight:700;
  line-height:24px;
`

const ProfileScreen = () => {
   const user = useSelector((state: RootState) => state.user)
   const dispatch = useDispatch()

   const handleLogout = () => {
      dispatch(logout(false))
   }

   return (
      <ProfileContainer>
         <HeaderContainer>
            <StyledProfile />
         </HeaderContainer>
         <ContainerForm>
            <StyledLabel> {dictionary.home.labelUserText}</StyledLabel>
            <StyledText> {user.username}</StyledText>
            <StyledLabel> {dictionary.home.labelEmailText}</StyledLabel>
            <StyledText> {user.email}</StyledText>
         </ContainerForm>
         <StyledButtonContainer>
            <StyledTouchableOpacity onPress={handleLogout} >
               <StyledButtonText> {dictionary.logout.buttonText} </StyledButtonText>
            </StyledTouchableOpacity>
         </StyledButtonContainer>
      </ ProfileContainer >
   );
};

export default ProfileScreen;














