import Controller from '@ember/controller';
import Ember from 'ember';

export default Controller.extend({
  session: Ember.inject.service(),
  auth: Ember.inject.service(),
  actions:{
    ban: function(user){
      user.get('comrole').forEach((role)=>{
        console.log(role);
      })
    },
    gotoBan: function(){
      this.transitionToRoute('forum.c.community.roles.management.user')
    },
    gotoManage: function(){
      this.transitionToRoute('forum.c.community.roles.management.roles')
    },
    back: function(){
      this.transitionToRoute('forum.c.community.posts')
    },
    gotoUser: function(){
      this.transitionToRoute('forum.c.community.roles.management.roles.user')
    }

  }
});
