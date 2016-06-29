import {bootstrap} from '@angular/platform/browser';
import {enableProdMode} from '@angular/core';
import {FORM_PROVIDERS} from '@angular/common';
import {HTTP_PROVIDERS} from '@angular/http';
import {ROUTER_PROVIDERS} from '@angular/router';
import {FIREBASE_PROVIDERS,defaultFirebase, AngularFire, FirebaseRef} from 'angularfire2';

if (webpack.ENV === 'production') {
  enableProdMode();
}

import ApplicationComponent from './app/components/application/application';
import {ONLINE_AUCTION_SERVICES} from './app/services/services';

bootstrap(ApplicationComponent, [
  FORM_PROVIDERS,
  HTTP_PROVIDERS,
  ROUTER_PROVIDERS,
  FIREBASE_PROVIDERS,
  defaultFirebase({
    apiKey: "AIzaSyAsLRL-2dimMxBp6_DYd7Q-5xy8kU_JVKw",
    authDomain: "shining-inferno-5332.firebaseapp.com",
    databaseURL: "https://shining-inferno-5332.firebaseio.com",
    storageBucket: "shining-inferno-5332.appspot.com",
  }),
  ONLINE_AUCTION_SERVICES
]).catch(console.error.bind(console));
