import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

interface AuthState {
  isLoggedIn: boolean;
  me?: any;
}

const initialState: AuthState = {
  isLoggedIn: !!Cookies.get("accessToken"),
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<any>) => {
      Cookies.set("accessToken", action.payload.token.access);
      Cookies.set("refreshToken", action.payload.token.refresh);
      state.isLoggedIn = true;
      state.me = action.payload;
    },
    logout: (state) => {
      Cookies.remove("accessToken");
      state.isLoggedIn = false;
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
