import Controller from '@ember/controller';

export default Controller.extend({


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
