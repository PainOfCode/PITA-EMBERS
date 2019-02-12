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
    this.route('chatroom');

    this.route('c', function() {
      this.route('community', {path: '/:name'}, function() {
        this.route('chat');
        this.route('posts');
      });
    });
  });
  this.route('login');
  this.route('createaccount');
  this.route('patch', function() {
    this.route('patches', {path:'/:id'}, function() {});
    this.route('overview');
    this.route('new');
  });
  this.route('logout');
  this.route('role-editor', function() {
    this.route('new');
    this.route('show-edit', {path: '/:id'});
    this.route('usermanagement', function() {});
  });
  this.route('friends', function() {
    this.route('add');
    this.route('chat', function() {
      this.route('user', {path:'/:name'});
    });
    this.route('reqs');
  });
  this.route('settings');
});

export default Router;
