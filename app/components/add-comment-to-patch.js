import Component from '@ember/component';
import Ember from 'ember';

export default Component.extend({
  session: Ember.inject.service(),
  auth: Ember.inject.service(),
  store: Ember.inject.service(),
  router: Ember.inject.service(),

  actions: {

    gotoLogin: function(){
      this.get('router').transitionTo('login');
    },


    sendComment: function(){
      // Create the comment
      if(this.get('comment.length') >= 10){
       var newComment = this.get('store').createRecord('comment', {
          text: this.get('comment'),
          post: this.get('patch'),
          user: this.get('auth.user')
       });

       // Get the parent post
       var post = this.get('patch');
       post.get('comments').addObject(newComment);

       // Save the comment, then save the post
       newComment.save().then(function() {
         return post.save();
       });
       this.set('comment','');
     }
    }
  }
});
