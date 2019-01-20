import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('about');
  this.route('support', function() {
    this.route('ticket', function() {
      this.route('new');
      this.route('lists');
    });
  });
  this.route('home');
});

export default Router;
