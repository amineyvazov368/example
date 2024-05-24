import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
const BASE_URL = "http://localhost:5050/api/"

export const modelAPI = createApi({
    reducerPath: 'modelApi',
    baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
    endpoints: (builder) => ({
        getModel:builder.query({
            query:()=>`products`
        }),

        //delete
        deleteModel:builder.mutation({
            query:(id)=>({
                method: "DELETE",
                url: `products/${id}`
            })
        }),
        getModelById: builder.query({
            query:(id)=>({
                method:"APP",
                url:`products/${id}`
            })
        }),

        postModel: builder.mutation({
            query:(newModel)=>({
                method: "POST",
                url: `products`,
                body: newModel,
                headers: {
                    "Content-Type": "application/json"
                }
            })
        })
    }),
})

export const { useGetModelQuery, useGetModelByIdQuery, useDeleteModelMutation, usePostModelMutation} = modelAPI