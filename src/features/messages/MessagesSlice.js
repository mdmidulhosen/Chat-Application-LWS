import { createSlice } from "@reduxjs/toolkit";

const initialState = {

}
const MessagesSlice = createSlice({
    name: "conversations",
    initialState,
    reducers: {}
});

// eslint-disable-next-line no-empty-pattern
export const {} = MessagesSlice.actions;
export default MessagesSlice.reducer