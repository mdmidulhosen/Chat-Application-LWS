import { configureStore } from '@reduxjs/toolkit';
import { ApiSlice } from '../features/api/ApiSlice';
import authSliceReducer from "../features/auth/AuthSlice"
import conversationsSliceReducer from "../features/conversations/ConversationsSlice"
import messagesSliceReducer from "../features/messages/MessagesSlice"

export const store = configureStore({
  reducer: {
    [ApiSlice.reducerPath]: ApiSlice.reducer,
    auth: authSliceReducer,
    conversations: conversationsSliceReducer,
    messages: messagesSliceReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
  middleware: (getDefaultMiddlewares) => getDefaultMiddlewares().concat(ApiSlice.middleware)
});
