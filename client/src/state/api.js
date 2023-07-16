import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


//exports: 
// api: {
//     baseQuery, fetchBaseQuery, tagtypes, and query:json object
// }

export const api = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_BASE_URL }),
    reducerPath: "adminApi",
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
        //only send get requests as 
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

} = api