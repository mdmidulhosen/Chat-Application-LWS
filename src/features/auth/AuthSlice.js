import { createSlice } from "@reduxjs/toolkit";

const initialState = {

}
const AuthSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {}
});

// eslint-disable-next-line no-empty-pattern
export const {} = AuthSlice.actions;
export default AuthSlice.reducer