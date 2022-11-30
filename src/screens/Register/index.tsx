import React from 'react';
import styled from 'styled-components/native';
import { dictionary } from '../../dictionary';
import { Text, View, TouchableOpacity, TextInput, SafeAreaView, Alert } from 'react-native';
import { useSelector, useDispatch } from 'react-redux'


import type { RootState } from '../../redux/store';
import { register, setIsloggedIn } from '../../redux/auth'

interface userType {
   username: string;
   email: string;
   pass: string;
   isLoggedIn: boolean;
}

const FlexRowVCenter = styled.View`
  flex: 1;
  background-color: #FFFFFF;
  align-items: center;
  justify-content: center;
`;
const HeaderContainer = styled.View`
  flex: 1; 
  align-items:center;
  justify-content: center;
`
const BigText = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: #000;
`;
const ContainerForm = styled.View`
  flex: 3;
min-width:90%;
`

const StyledTextInput = styled.TextInput`
border-radius:32px;
font-weight: 400;
background-color:#F0F6FA;
padding:20px;
font-size: 16px;
line-height: 24px;
height:64px;
color:#000000;
margin-bottom: 12px;
`

const StyledButtonContainer = styled.View`
flex: 1;
min-width:80%;

`
const StyledTouchableOpacity = styled.TouchableOpacity`
  background-color: rgb(255, 135, 85);
  padding: 10px;
  min-width:90%;
  border-radius: 32px;
  height:64px;
  justify-content:center;
  align-items: center;
`


const StyledText = styled.Text`
  color: #672A11;
  text-align: center;
  size:16px;
  /* vertical-align:center; */
  font-weight:700;
  line-height:24px;
`

const Register = () => {
   const dispatch = useDispatch()
   const [email, onChangeEmail] = React.useState("");
   const [username, onChangeUsername] = React.useState("");
   const [password, onChangePassword] = React.useState("");

   const handleLogin = () => {
      const form: userType = {
         username: username,
         email: email,
         pass: password,
         isLoggedIn: true,
      };

      if (form.username && form.email && form.pass) {
         dispatch(register(form))
      }
      else {
         dispatch(setIsloggedIn(false));
         return Alert.alert("ingrese los datos")
      }
   }

   return (
      <FlexRowVCenter>
         <HeaderContainer>
            <BigText>{dictionary.register.headerText}</BigText>
         </HeaderContainer>
         <ContainerForm>
            <StyledTextInput onChangeText={onChangeEmail} value={email} placeholder={dictionary.register.userInputText} keyboardType="text" />
            <StyledTextInput onChangeText={onChangeUsername} value={username} placeholder={dictionary.register.emailInputText} keyboardType="text" />
            <StyledTextInput onChangeText={onChangePassword} value={password} placeholder={dictionary.register.passInputText} keyboardType="text" />
         </ContainerForm>
         <StyledButtonContainer>
            <StyledTouchableOpacity onPress={handleLogin} >
               <StyledText> {dictionary.register.buttonText} </StyledText>
            </StyledTouchableOpacity>
         </StyledButtonContainer>
      </FlexRowVCenter >
   );
};

export default Register;














