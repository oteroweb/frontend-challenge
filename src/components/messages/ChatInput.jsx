import React, { useState } from "react";
import {
	View,
	Text,
	StyleSheet,
	TextInput,
	Platform,
	TouchableOpacity,
} from "react-native";

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
const ChatInput = () => {
	const [message, setMessage] = useState("");
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
				<TouchableOpacity style={styles.sendButton}>
					<Icon
						name="send"
						size={23}
						color={theme.colors.white}
					/>
				</TouchableOpacity>
			</StyledInnerContainer>
		</StyledContainer>
	);
};

const styles = StyleSheet.create({
	container: {
		justifyContent: "center",
		backgroundColor: theme.colors.white,
	},
	replyContainer: {
		paddingHorizontal: 10,
		marginHorizontal: 10,
		justifyContent: "center",
		alignItems: "flex-start",
	},
	title: {
		marginTop: 5,
		fontWeight: "bold",
	},
	closeReply: {
		position: "absolute",
		right: 10,
		top: 5,
	},
	reply: {
		marginTop: 5,
	},
	innerContainer: {
		paddingHorizontal: 10,
		marginHorizontal: 10,
		justifyContent: "space-between",
		alignItems: "center",
		flexDirection: "row",
		paddingVertical: 10,
	},
	inputAndMicrophone: {
		flexDirection: "row",
		backgroundColor: theme.colors.inputBackground,
		flex: 3,
		marginRight: 10,
		paddingVertical: Platform.OS === "ios" ? 10 : 0,
		borderRadius: 30,
		alignItems: "center",
		justifyContent: "space-between",
	},
	input: {
		backgroundColor: "transparent",
		paddingLeft: 20,
		color: theme.colors.inputText,
		flex: 3,
		fontSize: 15,
		height: 50,
		alignSelf: "center",
	},
	rightIconButtonStyle: {
		justifyContent: "center",
		alignItems: "center",
		paddingRight: 15,
		paddingLeft: 10,
		borderLeftWidth: 1,
		borderLeftColor: "#fff",
	},
	swipeToCancelView: {
		flexDirection: "row",
		alignItems: "center",
		marginRight: 30,
	},
	swipeText: {
		color: theme.colors.description,
		fontSize: 15,
	},
	emoticonButton: {
		justifyContent: "center",
		alignItems: "center",
		paddingLeft: 10,
	},
	recordingActive: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		paddingLeft: 10,
	},
	recordingTime: {
		color: theme.colors.description,
		fontSize: 20,
		marginLeft: 5,
	},
	microphoneAndLock: {
		alignItems: "center",
		justifyContent: "flex-end",
	},
	lockView: {
		backgroundColor: "#eee",
		width: 60,
		alignItems: "center",
		borderTopLeftRadius: 30,
		borderTopRightRadius: 30,
		height: 130,
		paddingTop: 20,
	},
	sendButton: {
		backgroundColor: theme.colors.primary,
		borderRadius: 50,
		height: 50,
		width: 50,
		alignItems: "center",
		justifyContent: "center",
	},
});


export default ChatInput;
