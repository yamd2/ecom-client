import { configureStore } from "@reduxjs/toolkit";
import authReudcer from "./pages/login/authSlice.js";

const store = configureStore({
  reducer: {
    user: authReudcer,
  },
});

export default store;
