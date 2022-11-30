import { combineReducers, configureStore } from '@reduxjs/toolkit';
import userReducer from './auth'

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
  devTools: __DEV__,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
  // .concat(??.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

