import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const postsApi = createApi({
  reducerPath: "posts",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com",
  }),
  endpoints(builder) {
    return {
      fetchPosts: builder.query({
        query: () => ({
          url: "/posts",
          method: "GET",
        }),
      }),
      fetchPost: builder.query({
        query: (id) => ({
          url: `/posts/${id}`,
          method: "GET",
        }),
      }),
      fetchAuthor: builder.query({
        query: (userId) => ({
          url: `/users/${userId}`,
          method: "GET",
        }),
      }),
    };
  },
});

export const { useFetchPostsQuery, useFetchPostQuery, useFetchAuthorQuery } =
  postsApi;

export { postsApi };
