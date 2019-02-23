import Route from '@ember/routing/route';
import Ember from 'ember';
import FindQuery from 'ember-emberfire-find-query/mixins/find-query';

export default Route.extend(FindQuery,{
  auth: Ember.inject.service(),
  beforeModel(){
    if (!this.get('auth.createdcommunity')){
      this.transitionTo('forum.c.new')
    }
  }

});
