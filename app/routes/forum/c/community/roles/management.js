import Route from '@ember/routing/route';
import Ember from 'ember';
import FindQuery from 'ember-emberfire-find-query/mixins/find-query';

export default Route.extend(FindQuery,{
  auth: Ember.inject.service(),
  session: Ember.inject.service(),
  ban: false,
  beforeModel(){
    this.transitionTo('forum.c.community.roles.management')
  },


  //Festlegung für die berechtigungen in management
  afterModel(){
    if (this.get('session.isAuthenticated')){
      if(this.get('auth.user.comrole')){
        if(this.get('auth.chosencom')){
          let com = this.get('auth.chosencom.roles');
          let that = this;
          com.forEach((role)=>{
            if ((role.get('user.id') === that.get('auth.user.id')) && role.get('banuser')){
              that.set('ban', true);
            }
          })
        }
      }
    }
  }


  // model(){
  //   return Ember.RSVP.hash({
  //     forumcommunity: this.store.findAll('forumcommunity'),
  //     communityrole: this.store.findAll('communityrole')
  //   });
  // },
  // setupController(controller, model){
  //   this._super(...arguments);
  //   Ember.set(controller, 'forumcommunity', model.forumcommunity);
  //   Ember.set(controller, 'communityrole', model.communityrole);
  // }
});
