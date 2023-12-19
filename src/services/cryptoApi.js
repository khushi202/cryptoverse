import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const cryptoApiHeaders = {
    'X-RapidAPI-Key': '8325092d75msh789aae5ea57314cp116c2cjsn9a262d6e6e3c',
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
}

const baseUrl = 'https://coinranking1.p.rapidapi.com/';

const createRequest = (url) => ({ url, headers: cryptoApiHeaders });
  export const cryptoApi =createApi({
    reducerPath:'cryptoApi',
    baseQuery:fetchBaseQuery({baseUrl}),
    endpoints:(builder) =>({
        getCryptos:builder.query({
            query:(count)=> createRequest(`/coins?limit=${count}`)
        }),
        getCryptoDetails: builder.query({
          query:(coinId)=> createRequest(`/coin/${coinId}`)
        }),
        getCryptoHistory: builder.query({
          query: ({ coinId, timePeriod }) => createRequest(`coin/${coinId}/history?timePeriod=${timePeriod}`),
        }),
        getExchanges: builder.query({
          query: (coinId) => createRequest(`/coin/${coinId}/exchanges`)
        })
    })
  })
  export const {
    useGetCryptosQuery,
    useGetCryptoDetailsQuery,
    useGetCryptoHistoryQuery,
    useGetExchangesQuery,
  } = cryptoApi;