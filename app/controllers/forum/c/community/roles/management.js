import Controller from '@ember/controller';
import Ember from 'ember';

export default Controller.extend({
  session: Ember.inject.service(),
  auth: Ember.inject.service(),
  notifications: Ember.inject.service('toast'),
  danger: true,

  actions:{
    deleteForum: function(){
      let noti = this.get('notifications')
      if (this.get('danger')){
        noti.warning('If you want to delete this forum, please click again!','Are you sure?', {timeOut:20000})
        this.set('danger', false);
      }else{
        this.set('danger', true)
        let that = this;
        let cm = this.get('auth.chosencom');
        let creator = this.store.peekRecord('user',cm.get('creator.id'));


        //console.log('comments remove');
        this.get('auth.chosencom.posts').forEach((postcomment)=>{
          postcomment.get('forumcomment').forEach((comment)=>{
            comment.destroyRecord();
          })
        })

        //console.log('roles remove');
        this.get('auth.chosencom.roles').forEach((role)=>{
          if (role.get('community.id') === that.get('auth.chosencom.id')){
            role.destroyRecord();
          }
        })

        //console.log('follower remove');
        this.get('auth.chosencom.follower').forEach((follower)=>{
          if (follower.get('user.id') === that.get('auth.chosencom.id')){
            follower.destroyRecord();
          }
        })

        //console.log('content remove');
        this.get('auth.chosencom.posts').forEach((content)=>{
          content.destroyRecord();
        })



        //console.log('Creator remove');
        creator.get('comscreated').removeObject(cm);

        let yes = true;
        if (yes){
          cm.destroyRecord();
          this.set('auth.chosencom', null);
          this.transitionToRoute('forum');
        }
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
