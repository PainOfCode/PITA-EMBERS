import Controller from '@ember/controller';
import Ember from 'ember';
import EmberObject, {
  computed,
  observer
} from '@ember/object';

export default Controller.extend({
  session: Ember.inject.service(),
  auth: Ember.inject.service(),
  notfollowed: true,
  notifications: Ember.inject.service('toast'),

  actions:{
    createPost: function(){
      this.transitionToRoute('forum.c.community.new')
    },
    manage: function(){
      this.transitionToRoute('forum.c.community.roles.management')
    },
    follow: function(){
      let count = 0;
      let that = this;
      let noti = this.get('notifications')
      if (this.get('session.isAuthenticated')){
        if (this.get('auth.user.follow.length')>0){
          this.get('auth.user.follow').forEach((followed)=>{
            console.log('Follow filter');
            count++;
            if (followed.id === this.get('auth.chosencom.id')){
              noti.warning('You already follow c/'+this.get('auth.chosencom.name'),'')
              console.log(that.get('auth.user.follow.length'));
              count = this.get('auth.user.follow.length')*(-629);
              console.log(count);
            }
            if (count === that.get('auth.user.follow.length')){
              this.get('auth.user.follow').addObject(this.get('auth.chosencom'))
              this.get('auth.chosencom.follower').addObject(this.get('auth.user'))
              this.get('auth.user').save();
              this.get('auth.chosencom').save().then(()=>{
                noti.success('You now follow c/'+this.get('auth.chosencom.name'),'Follow')
              });
            }
          })
        }else{
          this.get('auth.user.follow').addObject(this.get('auth.chosencom'))
          this.get('auth.chosencom.follower').addObject(this.get('auth.user'))
          this.get('auth.user').save();
          this.get('auth.chosencom').save().then(()=>{
            let noti = this.get('notifications')
            noti.success('You now follow c/'+this.get('auth.chosencom.name'),'Follow')
          });
        }
      }else{
        noti.error('You need to be logged in first!', 'Error')
        this.transitionToRoute('login')
      }
    }
  }

});
