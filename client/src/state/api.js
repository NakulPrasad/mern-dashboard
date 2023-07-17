import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

//MAKES GET REQUESTS TO BACKEND

export const api = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_BASE_URL }),
    reducerPath: "adminApi", //name in redux store
    tagTypes: [
        "User",
        "Products",
        "Customers",
        "Transactions",
        "Geography",
        "Sales",
        "Admins",
        "Performance",
        "Dashboard",
    ],
    endpoints: (build) => ({
        getUser: build.query({
            query: (id) => `general/user/${id}`, //saves json object of that id form db
            providesTags: ["User"],
        }),
        getProducts: build.query({
            query: () => `client/products`, //saves json object PRODUCT + STATS
            providesTags: ["Products"],
        }),
        getCustomers: build.query({
            query: () => `client/customers`, //saves json user without password
            providesTags: ["Customers"]
        }),
        getTransactions: build.query({
            query: ({ page, pageSize, sort, search }) => ({
                url: "client/transactions",
                method: "GET",
                params: { page, pageSize, sort, search },
            }),
            providesTags: ["Transactions"],
        }),
        getGeography: build.query({
            query: () => 'client/geography',
            providesTags: ['Geography']
        })
    })
})

export const {
    //single user json object
    useGetUserQuery,
    //all product+stats json objext
    useGetProductsQuery,
    //user with role:user
    useGetCustomersQuery,
    useGetTransactionsQuery,
    useGetGeographyQuery,

} = api