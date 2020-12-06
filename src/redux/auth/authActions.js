import { authSlice } from "./authSlice";
import { AuthService } from "../../services/AuthService";

const { actions } = authSlice;

const authService = new AuthService();

export const loginAsync = () => (dispatch) => {
  dispatch(actions.clearAuthenticated());
  authService.login();
};

export const logoutAsync = () => (dispatch) => {
  authService.logout();
  dispatch(actions.clearAuthenticated());
};

export const getUserAsync = () => (dispatch) => {
  authService.getUser().then((user) => {
    if (user) {
      dispatch(actions.authenticated(user));
    } else {
      console.log("You are not sign in");
      dispatch(loginAsync());
    }
  });
};

export const renewTokenAsync = () => (dispatch) => {
  authService
    .renewToken()
    .then((user) => {
      if (user) {
        dispatch(actions.authenticated(user));
      }
    })
    .catch(() => {
      console.warn("Token is expired");
      dispatch(logoutAsync());
    });
};

export const { authenticated, clearAuthenticated, cancelSignIn } = actions;
