import Route from '@ember/routing/route';
import Ember from 'ember';

export default Route.extend({
  title: 'Friends',
  auth: Ember.inject.service(),
  model(){
    return Ember.RSVP.hash({
      users: this.store.findAll('user'),
      roles: this.store.findAll('role'),
      reqs: this.store.findAll('friendreq')
    });
  },
  setupController(controller, model){
    this._super(...arguments);
    Ember.set(controller, 'users', model.users);
    Ember.set(controller, 'roles', model.roles);
    Ember.set(controller, 'reqs', model.reqs);
  }
});
