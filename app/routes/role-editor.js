import Route from '@ember/routing/route';
import Ember from 'ember';

export default Route.extend({
  auth: Ember.inject.service(),
  session: Ember.inject.service(),
  model(){
    return this.store.findAll('role');
  }
});
