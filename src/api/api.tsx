import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

const enum E_API_ACTION {
    genRandomMailbox = "genRandomMailbox",
    getDomainList = "getDomainList",
    getMessages = "getMessages",
    readMessage = "readMessage",
    download = "download",

}

export const api = createApi({
    reducerPath: "requestApi",
    baseQuery: fetchBaseQuery(
        {baseUrl: "https://www.1secmail.com/api/v1/"}
    ),
    endpoints: (build) => ({
        generateRandomMailString: build.query({
            query: ({count}) => `?action=${E_API_ACTION.genRandomMailbox}&count=${count}`
        }),

        getDomainList: build.query({
            query: () => `?action=${E_API_ACTION.getDomainList}`
        })
    })
})

export const {
    useGenerateRandomMailStringQuery,
    useGetDomainListQuery
} = api;