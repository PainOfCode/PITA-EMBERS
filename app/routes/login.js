import Route from '@ember/routing/route';
import Ember from 'ember';

export default Route.extend({
  title: 'Login',
  session: Ember.inject.service(),
  setupController(controller, model){
    this._super(...arguments);
    controller.set('email', '');
    controller.set('password', '');
  }
});
