import Controller from '@ember/controller';
import Ember from 'ember';

export default Controller.extend({
  auth: Ember.inject.service(),
  session: Ember.inject.service(),
selected: false,

  actions:{
    selectRole: function(rolename){
      this.set('selectedRole', rolename);
    },
    gotoSelection: function(){
      this.transitionToRoute('role-editor.usermanagement.user');
    },
    selectUser: function(userdata){
      userdata.set('role', this.get('selectedRole'));
      userdata.save().then(console.log('hell', userdata));
    }
  }
});
