import Controller from '@ember/controller';
import Ember from 'ember';

export default Controller.extend({
auth: Ember.inject.service(),
session: Ember.inject.service(),

  actions:{
    saveCreate: function(){

      var newRole = this.store.createRecord('role', {
        postcomment: this.comment,
        createticket: this.createTicket,
        managepatch: this.patches,
        readticket: this.answerTicket,
        createpost: this.post,
        manageroles: this.roles,
        manageusers: this.users,
        rolename: this.get('rolename')
      });

      newRole.save().then(()=>{
        this.transitionToRoute('role-editor');
      });

    }
  }
});
