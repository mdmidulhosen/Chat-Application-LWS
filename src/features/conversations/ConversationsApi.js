import { ApiSlice } from "../api/ApiSlice";

export const ConversationsApi = ApiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getConversations: builder.query({
            query: (email) => `conversations?participants_like=${email}&_sort=timestamp&_order=desc&_page=1&_limit=${process.env.REACT_APP_CONVERSATION_PER_PAGE}`
        })
    })
});

export const {useGetConversationsQuery} = ConversationsApi;