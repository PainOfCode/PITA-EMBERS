import Route from '@ember/routing/route';
import Ember from 'ember';

export default Route.extend({
  auth: Ember.inject.service(),
  model(){
    return Ember.RSVP.hash({
      users: this.store.findAll('user'),
      pms: this.store.findAll('privatemessage')
    });
  },
  setupController(controller, model){
    this._super(...arguments);
    Ember.set(controller, 'users', model.users);
    Ember.set(controller, 'pms', model.pms);
  }
});
