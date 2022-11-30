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
  /* background: #672A11;  */
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
   /* const count = useSelector((state: RootState) => state.user.value) */
   /* const register = useSelector((state: RootState) => state.counter.isLoggedIn) */
   const dispatch = useDispatch()


   const [text, onChangeText] = React.useState("Useless Text");
   const [email, onChangeEmail] = React.useState("test@gmail.com");
   const [username, onChangeUsername] = React.useState("test3");
   const [password, onChangePassword] = React.useState("pass");

   const handleLogin = () => {
      const form: userType = {
         username: username,
         email: email,
         pass: password,
         isLoggedIn: true,
      };

      // if !(user && email && password): return Alert.alert("ingrese los datos")
      // guardar user, email y password con otro dispatch
      if (form.username && form.email && form.pass) {
         /* console.log(form) */
         dispatch(register(form))
      }
      else {
         dispatch(setIsloggedIn(false));
         return Alert.alert("ingrese los datos")
      }
   }

   return (
      <FlexRowVCenter>
         {/* <YanaAvatar source={yanaAvatar}/> */}
         {/* <TextInstructionsContainer> */}
         <HeaderContainer>
            <BigText>{dictionary.register.headerText}</BigText>
         </HeaderContainer>
         {/* <Text>Comienza editando el archivo <CodeText>src/index.tsx</CodeText></Text> */}
         {/* </TextInstructionsContainer> */}

         {/* (register == true ) ?  <componentesesion></componentesesion> :  <componentelogin></componentelogin> */}
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














