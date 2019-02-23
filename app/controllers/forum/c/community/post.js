import Controller from '@ember/controller';
import Ember from 'ember';

export default Controller.extend({
  session: Ember.inject.service(),
  auth: Ember.inject.service(),

  actions:{
    send: function(){
      if (this.get('session.isAuthenticated')){
        if (this.get('comment.length') > 8 && this.get('comment.length') < 1024){
          let newCom = this.store.createRecord('forumcomment', {
            user: this.get('auth.user'),
            fpost: this.get('model'),
            body: this.get('comment')
          })

          this.get('model.forumcomment').addObject(newCom);
          this.get('auth.user.forumcomments').addObject(newCom);
          newCom.save();
          this.get('model').save();
          this.get('auth.user').save();
          this.set('comment', '')
        }
      }
    },
    back: function(){
      this.transitionToRoute('forum.c.community.posts')
    }
  }
});
