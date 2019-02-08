import Route from '@ember/routing/route';
import Ember from 'ember';

export default Route.extend({
  title: 'Patch',
  session: Ember.inject.service(),
  auth: Ember.inject.service(),
  showCreate:false,
  model(params){
    return this.store.findRecord('patch', params.id);
  }
});
