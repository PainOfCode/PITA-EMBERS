'use strict';

module.exports = function(environment) {
  let ENV = {
    modulePrefix: 'praktika',
    environment,
    locationType: 'auto',
    // ...
    torii: {
      sessionServiceName: 'session'
    },
    
    firebase: {
      apiKey: 'AIzaSyB1r5K0mOW189bcngexCwPH8RMDiLFuy80',
      authDomain: 'pita-45a6f.firebaseapp.com',
      databaseURL: 'https://pita-45a6f.firebaseio.com',
      storageBucket: 'pita-45a6f.appspot.com',
      projectId: 'pita-45a6f',
      storageBucket: 'pita-45a6f.appspot.com',
      messagingSenderId: '772245822398'
    },
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
    ENV.APP.autoboot = false;
  }

  if (environment === 'production') {
    // here you can enable a production-specific feature
  }

  return ENV;
};
