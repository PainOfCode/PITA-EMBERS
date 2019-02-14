import Controller from '@ember/controller';
import Ember from 'ember';
const { computed } = Ember;
import FindQuery from 'ember-emberfire-find-query/mixins/find-query';

export default Controller.extend(FindQuery,{
auth: Ember.inject.service(),
session: Ember.inject.service(),
chat: Ember.inject.service(),

myChat: computed('model.pms', function(){
  return this.get('model.pms').filter((pm)=>{
    let me = pm.get('sender.id') == this.get('auth.user.id');
    let notme = pm.get('sendto.id') == this.get('auth.user.id');
    return me || notme;
  })
}),

  actions:{
    sendPm: function(){
      let user = this.get('auth.user');
      let rec;
      console.log(this.get('chat.crntChat'));
      this.filterEqual(this.store, 'user', {'username': this.get('chat.crntChat.username')}, (data)=>{
        rec = data[0];
      let newPm = this.store.createRecord('privatemessage', {
        sender: this.get('auth.user'),
        sendto: rec,
        text: this.get('text')
      })


       user.get('sendpm').addObject(newPm);
       newPm.save();
       user.save();
       rec.get('recpm').addObject(newPm);
       rec.save().then(()=>{
         this.set('text','');
         this.transitionToRoute('friends.chat');
         this.transitionToRoute('friends.chat.user', this.get('chat.crntChat.username'));
       })
      })
     }
  }
});
