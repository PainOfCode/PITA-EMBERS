import Route from '@ember/routing/route';
import Ember from 'ember';

export default Route.extend({
  title: 'Friends',
  auth: Ember.inject.service(),
  model(){
    return this.store.findAll('user');
  }
});
