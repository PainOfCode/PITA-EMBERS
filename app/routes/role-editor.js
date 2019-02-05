import Route from '@ember/routing/route';
import Ember from 'ember';

export default Route.extend({
  auth: Ember.inject.service(),
  session: Ember.inject.service(),
  model(){
    return Ember.RSVP.hash({
      users: this.store.findAll('user'),
      roles: this.store.findAll('role')
    });
  },
  setupController(controller, model){
    this._super(...arguments);
    Ember.set(controller, 'users', model.users);
    Ember.set(controller, 'roles', model.roles);
  }
});
