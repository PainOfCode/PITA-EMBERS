import Controller from '@ember/controller';
import Ember from 'ember';

export default Controller.extend({
auth: Ember.inject.service(),
  actions: {
    create: function(){
      if (this.get('name.length')>8){
        alert('Name is to long')
      }else{
        let newRole = this.store.createRecord('communityrole',{
          createpost: this.get('createpost'),
          comment: this.get('comment'),
          deleteposts: this.get('deleteposts'),
          deletecomment: this.get('deletecomment'),
          banuser: this.get('banuser'),
          name: this.get('name'),
          community: this.get('auth.chosencom')
        })

        this.get('auth.chosencom.roles').addObject(newRole);
        newRole.save()
        this.get('auth.chosencom').save();
        this.set('createpost', false)
        this.set('comment', false)
        this.set('deleteposts', false)
        this.set('banuser', false)
        this.set('deletecomment', false)
        this.set('name', '')
      }

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
