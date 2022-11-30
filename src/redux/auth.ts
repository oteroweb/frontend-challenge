import { createSlice, createSelector } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface UserState {
   username: string;
   email: string;
   pass: string;
   isLoggedIn: boolean;
}

interface IsLoggedInType {
   isLoggedIn?: boolean
}

const initialState: UserState = {
   // value: 0,
   user: "",
   email: "",
   isLoggedIn: false,
   messages: []
}
export const authSlice = createSlice({
   name: 'user',
   initialState,
   reducers: {
      register: (state, action: PayloadAction<UserState>) => {
         // console.log(state)
         // console.log(action.payload)
         state.username = action.payload.username;
         state.email = action.payload.email;
         state.isLoggedIn = action.payload.isLoggedIn as boolean
      },
      setIsloggedIn: (state, action: PayloadAction<IsLoggedInType>) => {
         state.isLoggedIn = action.payload as boolean
      },
      logout: (state, action: PayloadAction<IsLoggedInType>) => {
         console.log("hola")
         state.isLoggedIn = false
      },
   },
})


export const { register, setIsloggedIn, logout } = authSlice.actions
export default authSlice.reducer
const selectSelf = (state) => state
export const isLoggedInSelector = createSelector(
   selectSelf,
   (state) => state.isLoggedIn
)
