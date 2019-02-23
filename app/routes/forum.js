import Route from '@ember/routing/route';
import Ember from 'ember';

export default Route.extend({
  title: 'Forum',
  auth: Ember.inject.service(),
  beforeModel(){
    this.set('auth.chosencom', null)
  },
  model(){
    return Ember.RSVP.hash({
      forumcommunity: this.store.findAll('forumcommunity'),
      communityrole: this.store.findAll('communityrole')
    });
  },
  setupController(controller, model){
    this._super(...arguments);
    Ember.set(controller, 'forumcommunity', model.forumcommunity);
    Ember.set(controller, 'communityrole', model.communityrole);
  }
});
