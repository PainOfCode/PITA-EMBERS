import Controller from '@ember/controller';
import Ember from 'ember';

export default Controller.extend({
  auth: Ember.inject.service(),
  session: Ember.inject.service(),
  onlinestatus: Ember.inject.service()
});
