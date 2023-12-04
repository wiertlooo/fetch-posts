import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { postsApi } from "./apis/postsApi";
import routesSlice, { setRoutes } from "./slices/routesSlice";

export const store = configureStore({
  reducer: {
    [postsApi.reducerPath]: postsApi.reducer,
    routes: routesSlice,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(postsApi.middleware);
  },
});

setupListeners(store.dispatch);

export const { useFetchPostQuery, useFetchPostsQuery, useFetchAuthorQuery } =
  postsApi;

export { setRoutes };
