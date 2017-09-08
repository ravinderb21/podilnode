interface AuthConfig {
  clientID: string;
  domain: string;
  callbackURL: string;
}

export const AUTH_CONFIG: AuthConfig = {
  clientID: 'm1owRQ73sumsCPXRB0fyGM360c7rgrM4',
  domain: 'podil.auth0.com',
  callbackURL: 'http://localhost:3000/callback'
};
