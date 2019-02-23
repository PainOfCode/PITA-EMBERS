import Route from '@ember/routing/route';
import Ember from 'ember';

export default Route.extend({
  title: 'Add a friend',
  model(){
    return Ember.RSVP.hash({
      users: this.store.findAll('user'),
      reqs: this.store.findAll('friendreq')
    });
  },
  setupController(controller, model){
    this._super(...arguments);
    Ember.set(controller, 'users', model.users);
    Ember.set(controller, 'reqs', model.reqs);
  }
});
