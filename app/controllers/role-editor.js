import Controller from '@ember/controller';
import Ember from 'ember';

export default Controller.extend({
  auth: Ember.inject.service(),
  session: Ember.inject.service(),

  actions:{

    newRole: function(){
      //this.transitionToRoute('role-editor.new');

      var role = this.store.createRecord('role', {
        postcomment: false,
        managepatch: false,
        createticket: false,
        readticket: false,
        createpost: false,
        manageroles: false,
        manageusers: false,
        rolename: 'Guest'
      });

      role.save();
    }
  }
});
