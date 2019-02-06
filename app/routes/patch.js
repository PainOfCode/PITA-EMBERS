import Route from '@ember/routing/route';
import Ember from 'ember';

export default Route.extend({
  title: 'Patchnotes',
  session: Ember.inject.service(),
  auth: Ember.inject.service(),
  model(){
    return this.store.findAll('patch');
  }

});
