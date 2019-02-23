import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('about');
  this.route('home');
  this.route('membership');
  this.route('forum', function() {
    this.route('c', function() {
      this.route('new', function() {
        this.route('roles', function() {
          this.route('new');
          this.route('show-edit', {path: '/:id'});
        });
      });
      this.route('community',{path: '/:name'}, function() {
        this.route('new');
        this.route('posts');

        this.route('roles', function() {
          this.route('management', function() {
            this.route('user');
            this.route('roles', function() {
              this.route('user');
              this.route('edit', {path: '/:id'});
              this.route('new');
            });
          });
        });
        this.route('post', {path: '/:id'});
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

      this.route('groupchat', function() {});
    });
    this.route('reqs');

    this.route('groupchat', function() {
      this.route('new');
      this.route('chat', {path:'/:name'});
    });
  });
  this.route('settings');
  this.route('help');
});

export default Router;
