import Controller from '@ember/controller';
import Ember from 'ember';
import { later } from '@ember/runloop';

export default Controller.extend({
auth: Ember.inject.service(),
session: Ember.inject.service(),

});
