import { createSlice } from "@reduxjs/toolkit";

const initialAuthState = {
  authToken: "",
  user: null,
  cancelled: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {
    authenticated: (state, action) => {
      if (state.cancelled) {
        console.log("Sign in has been cancelled");
        return state;
      }
      console.log("You are authenticated");
      return Object.assign({}, state, {
        authToken: action.payload.access_token,
        user: action.payload,
      });
    },
    clearAuthenticated: () => {
      return Object.assign({}, initialAuthState);
    },
    cancelSignIn: (state) => {
      console.log("Sign in has been cancelled");
      return Object.assign({}, state, { cancelled: true });
    },
  },
});
