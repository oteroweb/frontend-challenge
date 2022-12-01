import { useEffect } from 'react';
import { createSlice, createSelector } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface RootState {
   username: string;
   email: string;
   pass: string;
   messages?: object;
   isLoggedIn: boolean;
}

interface IsLoggedInType {
   isLoggedIn?: boolean
}

const initialState: RootState = {
   username: "123123123",
   email: "12312312",
   pass: "123123",
   isLoggedIn: false,
   messages: [
      'Hola Humano, ¿Como estas?',
      'Estoy muy bien gracias',
      'Hola Humano, ¿Como estas?',
      'Hola Yana',
      'Hola Humano, ¿Como estas?',
      'Hola Yana',
      'Hola Humano, ¿Como estas?',
      'Hola Yana',
      'Hola Humano, ¿Como estas?',
      'Hola Yana',
      'Hola Humano, ¿Como estas?',
      'Hola Yana',
      'Hola Humano, ¿Como estas?',
      'Hola Yana',
      'Hola Humano, ¿Como estas?',
      'Hola Yana',
      'Hola Humano, ¿Como estas?',

   ],
}
export const rootSlice = createSlice({
   name: 'user',
   initialState,
   reducers: {
      register: (state, action: PayloadAction<RootState>) => {
         state.username = action.payload.username;
         state.email = action.payload.email;
         state.isLoggedIn = action.payload.isLoggedIn as boolean
      },
      setIsloggedIn: (state, action: PayloadAction<IsLoggedInType>) => {
         state.isLoggedIn = action.payload as boolean
      },
      sendMessage: (state, action: PayloadAction<IsLoggedInType>) => {
         state.messages.unshift(action.payload);
         state.messages.unshift("Hola Humano, ¿Como estas?");
      },
      logout: (state) => {
         state.isLoggedIn = false
      },
   },
})


export const { register, setIsloggedIn, logout, sendMessage } = rootSlice.actions
export default rootSlice.reducer
const selectSelf = (state) => state
export const isLoggedInSelector = createSelector(
   selectSelf,
   (state) => state.isLoggedIn
)
