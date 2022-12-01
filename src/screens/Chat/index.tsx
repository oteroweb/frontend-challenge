import * as React from 'react';
import styled from 'styled-components/native';

import ChatInput from "../../components/messages/ChatInput";
import { useFonts, Raleway_400Regular } from '@expo-google-fonts/raleway';
import { useSelector } from 'react-redux'
import type { RootState } from '../redux/store';

const StyledChatView = styled.View`
  flex: 1;
  background-color: #fff;
`
const StyledDate = styled.Text`
  height: 40px;
  text-align:center;
  transform: scaleY(-1);
  font-family: Raleway_400Regular;
  font-size: 12px;
  line-height: 16px;
  color: #6C8080;
`
const StyledScrollView = styled.ScrollView.attrs(props => ({
  contentContainerStyle: {
    padding: 16,
  },
}))`
  transform: scaleY(-1)
`;

const StyledOddMessage = styled.View`
  flex-direction: row-reverse;
  transform: scaleY(-1);
`
const StyledOddBubble = styled.View`
${(props) =>
    props.class === undefined &&
    `
     margin-horizontal: ${props.marginHorizontal || 6};
     margin-vertical: ${props.marginHorizontal || 8};
     border-radius: ${props.paddingTop || 20}
   `}
   background-color: #3B9391;
   height: 40px;
   gap:10;
   padding: 8px 16px;
   
`
const StyledOddText = styled.Text`
    color:white;
    font-size: 14;
    line-height: 24;
    font-weight:400;
    height: 24px;
    flex: none;
    order: 0;
    flex-grow: 0;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
`
const StyledEvenMessage = styled.View`
  flex-direction: row;
  transform: scaleY(-1);
`
const StyledEvenBubble = styled.View`
${(props) =>
    props.class === undefined &&
    `
     margin-horizontal: ${props.marginHorizontal || 6};
     padding-vertical: ${props.paddingVertical || 12};
     padding-horizontal: ${props.paddingHorizontal || 16};
     border-radius: ${props.paddingTop || 20}
   `}
   background-color: #F0F6FA;
`
const StyledEvenText = styled.Text`
    color:#4B5959;
    font-size: 14;
    line-height: 24px;
    font-weight:400;
`
const Chat = () => {
  const messages = useSelector((state: RootState) => state.messages)
  let [fontsLoaded] = useFonts({
    Raleway_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }

  let today = new Date();

  const nameOfMonthUS = today.toLocaleString('es-ES', {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const NameOfDay = fecha => [
    'Dom.',
    'Lun.',
    'Mar.',
    'Mie.',
    'Jue.',
    'Vie.',
    'Sáb.',
  ][new Date(fecha).getDay()];
  /* not completed */
  let formattedDate = NameOfDay(today) + " " + today.getDay() + " de " + nameOfMonthUS + '-';
  /* Jue. 4 de Junio - 11:00 AM */
  return (
    <StyledChatView>
      <StyledScrollView
      >
        {
          messages.map((text, i) => {
            const odd = i % 2;

            return (
              (odd)
                ? <StyledOddMessage key={i}>
                  <StyledOddBubble>
                    <StyledOddText > {text} </StyledOddText>
                  </StyledOddBubble>
                </ StyledOddMessage>
                :
                <StyledEvenMessage key={i}>
                  <StyledEvenBubble>
                    <StyledEvenText > {text}  </StyledEvenText>
                  </StyledEvenBubble>
                </ StyledEvenMessage>

            );
          })
        }
        {/* formatdate pending */}
        <StyledDate> Jue. 4 de Junio - 11:00 AM  </StyledDate>
      </StyledScrollView>
      <ChatInput />
    </StyledChatView >
  );
};

export default Chat;
