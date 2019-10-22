import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';
import 'hammerjs';

Amplify.configure(awsconfig);

// const oauth = {
//   domain: 'prototypepresurgerytimeout.auth.us-east-1.amazoncognito.com',
//   scope: ['phone', 'email', 'profile', 'openid', 'aws.cognito.signin.user.admin'],
//   redirectSignIn: 'http://localhost:4200/',
//   redirectSignOut: 'http://localhost:4200/',
//   responseType: 'code' // or 'token', note that REFRESH token will only be generated when the responseType is code
// };

// Auth.configure({
//   oauth:oauth
// });

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule);
