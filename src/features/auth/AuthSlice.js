import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    accessToken: undefined,
    user: undefined
}
const AuthSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        userLoggedIn: (state, action) => {
            state.accessToken = action.payload.accessToken;
            state.user = action.payload.user;
        },
        userLoggedOut: (state) => {
            state.accessToken = undefined;
            state.user = undefined;
        }
    }
});

// eslint-disable-next-line no-empty-pattern
export const {userLoggedIn, userLoggedOut} = AuthSlice.actions;
export default AuthSlice.reducer