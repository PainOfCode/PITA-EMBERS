import Controller from '@ember/controller';
import Ember from 'ember';
const { computed } = Ember;

export default Controller.extend({
  auth: Ember.inject.service(),
  session: Ember.inject.service(),
  chat: Ember.inject.service(),
  actions:{
    chatWith: function(friend){
      this.set('chat.crntChat', friend);
      console.log(this.get('chat.crntChat.username'));
      this.transitionToRoute('friends.chat.user', this.get('chat.crntChat.username'));
    }
  }

});
