import Ember from 'ember';
import Route from '@ember/routing/route';

export default Route.extend({
  title: 'Register',
  session: Ember.inject.service(),
  firebaseApp: Ember.inject.service()


});
