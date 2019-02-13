import Route from '@ember/routing/route';
import Ember from 'ember';

export default Route.extend({
  auth: Ember.inject.service(),
  title: 'Friend requests'

});
