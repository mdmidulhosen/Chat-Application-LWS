import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query"

export const ApiSlice = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.REACT_APP_API_URL}),
    tagTypes: [],
    endpoints: (builder) => ({
        
    })
    })