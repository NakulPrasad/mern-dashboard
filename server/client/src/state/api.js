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
        "Performance",
        "Dashboard",
        "Add User",
        "Admin"
    ],
    endpoints: (build) => ({
        getUser: build.query({
            query: (id) => `general/user/${id}`,
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
        }),
        getSales: build.query({
            query: () => `sale/sales`,
            providesTags: ['Sales']
        }),
        getDashboard: build.query({
            query: () => 'general/dashboard',
            providesTags: ["Dashboard"]
        }),
        addUser: build.mutation({
            query: (newUser) => ({
                url: '/management/adduser',
                method: 'POST',
                body: newUser
            }),
            providesTags: ["Add User"]
        }),
        getUsers: build.query({
            query: () => 'management/users',
            providesTags: ["Admin"]
        }),
        editUser: build.mutation({
            query: ({ User, id }) => ({
                url: `/management/edit/user/${id}`,
                method: 'PUT',
                body: User
            }),
            providesTags: ["Edit User"]
        }),
        deleteUser: build.mutation({
            query: (id) => ({
                url: `/management/edit/user/${id}`,
                method: 'DELETE',
            }),
        }),
    }),

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
    useGetSalesQuery,
    useGetDashboardQuery,
    useAddUserMutation,
    useGetUsersQuery,
    useEditUserMutation,
    useDeleteUserMutation,

} = api