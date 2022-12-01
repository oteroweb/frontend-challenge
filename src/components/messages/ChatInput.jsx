import React, { useState } from "react";
import { useDispatch } from 'react-redux'
import { sendMessage } from '../../redux/auth'

import styled from 'styled-components/native';

import Icon from "@expo/vector-icons/MaterialCommunityIcons";

import { theme } from "../../theme";
const StyledContainer = styled.View`
	justify-content:center;
	background-color: ${theme.colors.white};
`
const StyledInnerContainer = styled.View`
		flex-direction: row;
		background-color: ${theme.colors.inputBackground};
		margin-right: 10px;
		border-radius: 30px;
		align-items: center;
		justify-content: space-between;
`

const StyledInputBar = styled.View`
	flex-direction: row;
	background-color: ${theme.colors.inputBackground};
	flex:1;
	margin-right: 10px;
	border-radius: 28px;
	box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.2);
	align-items: center;
   justify-content: space-between;
`

const StyledTextInput = styled.TextInput`
	background-color: transparent;
	padding-left: 20px;
	color: ${theme.colors.inputText};
	flex: 3;
	font-size: 16px;
	height: 56px;
	align-self: center;
`
const StyledTouchableOpacity = styled.TouchableOpacity`
	background-color: ${theme.colors.light};
	${({ active }) => active && `
    background: ${theme.colors.primary};;
  `}
	border-radius: 50px;
	height: 50px;
	width: 50px;
	align-items: center;
	justify-content: center;
`

const ChatInput = () => {
	const [message, setMessage] = useState("");
	const dispatch = useDispatch()


	const handleSendMessage = () => {
		if (message) {
			dispatch(sendMessage(message));
			setMessage(null);
		}
	}
	return (
		<StyledContainer>
			<StyledInnerContainer >
				<StyledInputBar >
					<StyledTextInput
						multiline
						placeholder={"Ingresa aqui tu mensaje"}
						value={message}
						onChangeText={(text) => setMessage(text)}
					/>
				</StyledInputBar>
				<StyledTouchableOpacity active={message} onPress={handleSendMessage} >
					<Icon
						name="send"
						size={23}
						color={theme.colors.white}
					/>
				</StyledTouchableOpacity>
			</StyledInnerContainer>
		</StyledContainer>
	);
};

export default ChatInput;
