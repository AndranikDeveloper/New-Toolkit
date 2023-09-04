import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/dist/query/react'
import { IPostState } from '../module/IPost'

export const postAPI = createApi({
    reducerPath: 'postAPI',
    baseQuery: fetchBaseQuery({
        baseUrl: `https://jsonplaceholder.typicode.com`
    }),
    endpoints: (build) => ({
        
        
        fetchAllPosts: build.query<IPostState[], number>({
            query: (limit: number = 5) => ({
                url: '/posts',
                params: {
                    _limit: limit
                }
            })
        })
    })
    
})