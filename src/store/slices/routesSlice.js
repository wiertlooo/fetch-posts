import { createSlice } from "@reduxjs/toolkit";

const routesSlice = createSlice({
  name: "routes",
  initialState: {
    routes: [],
  },
  reducers: {
    setRoutes: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { setRoutes } = routesSlice.actions;
export default routesSlice.reducer;
