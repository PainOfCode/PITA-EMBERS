import Component from '@ember/component';
import Ember from 'ember';

export default Component.extend({
  session: Ember.inject.service(),
  auth: Ember.inject.service(),
  store: Ember.inject.service(),

  actions: {
    sendComment: function(){
      console.log(this.get('patch'), 'patch oj');
       var newComment = this.get('store').createRecord('comment', {
          text: this.get('comment'),
          comment: this.get('patch')
       });
      // console.log('nc',newComment);
      newComment.save().then(()=>{
            console.log('kommentar gesendet');
       });
    }
  }
});
