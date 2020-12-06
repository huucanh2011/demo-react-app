import { UserManager } from "oidc-client";
import { Constants } from "../helpers/AuthConstants";

const oidcConfigs = {
  authority: Constants.stsAuthority,
  client_id: Constants.clientId,
  redirect_uri: `${Constants.clientRoot}signin-callback.html`,
  silent_redirect_uri: `${Constants.clientRoot}silent-renew.html`,

  post_logout_redirect_uri: `${Constants.clientRoot}`,
  response_type: "code",
  scope: Constants.clientScope,
};

export class AuthService {
  userManager;

  constructor() {
    this.userManager = new UserManager(oidcConfigs);
  }

  getUser() {
    return this.userManager.getUser();
  }

  login() {
    return this.userManager.signinRedirect();
  }

  renewToken() {
    return this.userManager.signinSilent();
  }

  logout() {
    return this.userManager.signoutRedirect();
  }
}
