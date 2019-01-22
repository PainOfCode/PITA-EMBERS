import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('about');
  this.route('support', function() {
    this.route('overview');
    this.route('ticket');
    this.route('new');
    this.route('listAll');
  });
  this.route('home');
  this.route('patches');
  this.route('membership');
  this.route('forum');
});

export default Router;
