import Route from '@ember/routing/route';
import Ember from 'ember';

export default Route.extend({
  session: Ember.inject.service(),
  setupController(controller, model){
    this._super(...arguments);
    controller.set('email', '');
    controller.set('password', '');
  }
});
