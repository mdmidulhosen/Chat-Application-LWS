import { createSlice } from "@reduxjs/toolkit";

const initialState = {

}
const ConversationsSlice = createSlice({
    name: "conversations",
    initialState,
    reducers: {}
});

// eslint-disable-next-line no-empty-pattern
export const {} = ConversationsSlice.actions;
export default ConversationsSlice.reducer