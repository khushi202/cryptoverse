import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const cryptoNewsHeaders = {
    'X-RapidAPI-Key': '8325092d75msh789aae5ea57314cp116c2cjsn9a262d6e6e3c',
    'X-RapidAPI-Host': 'crypto-news16.p.rapidapi.com'
}

const baseUrl = 'https://crypto-news16.p.rapidapi.com/';

const createRequest = (url) => ({ url, headers: cryptoNewsHeaders });

export const cryptoNewsApi =createApi({
    reducerPath:'cryptoNewsApi',
    baseQuery:fetchBaseQuery({baseUrl}),
    endpoints:(builder) =>({
        getCryptoNews: builder.query({
            query:()=> createRequest(`/news/top/100`)
        })
    })
  })

  export const {
    useGetCryptoNewsQuery 
  } = cryptoNewsApi;