import Controller from '@ember/controller';
import Ember from 'ember';

export default Controller.extend({
  auth: Ember.inject.service(),
  session: Ember.inject.service(),
  showUser: true,
  actions:{

    toggleUser:function(){
      this.toggleProperty('showUser');
    },

    gotoManageUsers: function(){
      this.transitionToRoute('role-editor.usermanagement');
    }
  }
});
