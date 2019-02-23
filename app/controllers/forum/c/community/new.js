import Controller from '@ember/controller';
import Ember from 'ember';

export default Controller.extend({
auth: Ember.inject.service(),
session: Ember.inject.service(),
firebaseApp: Ember.inject.service(),
notifications: Ember.inject.service('toast'),

  actions:{
    cancel:function(){
      let noti = this.get('notifications')
      this.set('title','')
      this.set('body','')
      noti.warning('Canceled creation of post', 'Canceled')
      this.transitionToRoute('forum.c.community.posts')
    },
    submit: function(){
      let noti = this.get('notifications')
      if (this.get('title.length')>12 || this.get('title.length') < 64 || this.get('body.length')< 1024){
        let good = true;
        let user;

        if(this.get('session.isAuthenticated')){
          user = this.get('auth.user');
        }else{
          user = undefined;
        }

        let newPost = this.store.createRecord('forumpost',{
          title: this.get('title'),
          body: this.get('body'),
          community: this.get('auth.chosencom'),
          creator: user
        })

        if (good){
          this.get('auth.chosencom.posts').addObject(newPost);
          if (this.get('auth.user')){
            this.get('auth.user.forumposts').addObject(newPost);
            newPost.save()
            this.get('auth.chosencom').save().then(()=>{
              noti.success('Created post: '+this.get('title'),'')
              this.set('body','');
              this.set('title','');
              this.transitionToRoute('forum.c.community.posts')
            })
          }else{
            newPost.save();
            this.get('auth.chosencom').save().then(()=>{
              noti.success('Created post: '+this.get('title'),'')
              this.set('body','');
              this.set('title','');
              this.transitionToRoute('forum.c.community.posts')
            })
          }
        }
      }
    }
  }
});

// To save to firebase cloud start with this
// firebaseApp: Ember.inject.service(),
// actions: {
//   doSomething() {
//     const storageRef = this.get('firebaseApp').storage();
//   }
// }
