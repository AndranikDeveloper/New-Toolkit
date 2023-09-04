import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { IPostState } from '../module/IPost';

export const postAPI = createApi({
  reducerPath: 'postAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: `http://localhost:5000`,
  }),
  tagTypes: ['Post'],
  endpoints: (build) => ({
    fetchAllPosts: build.query<IPostState[], number>({
      query: (limit: number = 10) => ({
        url: '/posts',
        params: {
          _limit: limit,
        },
      }),
      providesTags: (result) => ['Post'],
    }),
    createPost: build.mutation<IPostState, IPostState>({
      query: (post) => ({
        url: '/posts',
        method: 'POST',
        body: post,
      }),
      invalidatesTags: ['Post'],
    }),
    updatePost: build.mutation<IPostState, IPostState>({
      query: (post) => ({
        url: `/posts/${post.id}`,
        method: 'PUT',
        body: post,
      }),
      invalidatesTags: ['Post'],
    }),
    deletePost: build.mutation<IPostState, IPostState>({
      query: (post) => ({
        url: `/posts/${post.id}`,
        method: 'DELETE',
        body: post,
      }),
      invalidatesTags: ['Post'],
    }),
  }),
});
