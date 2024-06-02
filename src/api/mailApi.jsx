import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";


export const mailApi = createApi({
    baseQuery: fetchBaseQuery(
        {baseUrl: "https://www.1secmail.com/api/v1/" }),
    tagTypes: ['getMail'],
    endpoints : (build) => ({
        getRandomMail : build.query({
            query : () => '?action=genRandomMailbox&count=1',
            transformResponse : (response) => ({
                randomMail: response[0],
                login : response[0].match(/.+(?=@)/g)[0],
                domain: response[0].match(/(?<=@).+/g)[0]
            })
        }),
        getCurrentMessage : build.query({
            query : ({ login, domain }) => `?action=getMessages&login=${login}&domain=${domain}`
        })
    }),
})


export const { useGetRandomMailQuery, useGetCurrentMessageQuery } = mailApi;