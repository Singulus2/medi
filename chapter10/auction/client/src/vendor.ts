// Polyfills
import 'angular2/bundles/angular2-polyfills';

// Angular modules
import 'angular2/platform/browser';
import 'angular2/http';
import 'angular2/router';
import 'angularfire2';
import 'firebase';

// RxJS
import 'rxjs';

// Other vendor libraries
import 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

var firebase = require("firebase/app");
  require("firebase/auth");
  require("firebase/database");
  require("firebase/storage");

  var config = {
    apiKey: "AIzaSyAsLRL-2dimMxBp6_DYd7Q-5xy8kU_JVKw",
    authDomain: "shining-inferno-5332.firebaseapp.com",
    databaseURL: "https://shining-inferno-5332.firebaseio.com",
    storageBucket: "shining-inferno-5332.appspot.com",
  };
  firebase.initializeApp(config);
