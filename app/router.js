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
    this.route('ticket', {path:'/:id'});
    this.route('new');
    this.route('listAll');
  });
  this.route('home');
  this.route('membership');
  this.route('forum', function() {
    this.route('posts', {path: '/:titleurl'});
  });
  this.route('login');
  this.route('createaccount');
  this.route('patch', function() {
    this.route('patches', {path:'/:id'});
    this.route('overview');
    this.route('new');
  });
});

export default Router;
