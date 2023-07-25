import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Restaurants } from '../pages/Home'

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/efood'
  }),
  endpoints: (builder) => ({
    getRestaurants: builder.query<Restaurants[], void>({
      query: () => '/restaurantes'
    }),
    getMenuRestaurant: builder.query<Restaurants, string>({
      query: (id) => `/restaurantes/${id}`
    })
  })
})

export const {useGetRestaurantsQuery, useGetMenuRestaurantQuery} = api
export default api
