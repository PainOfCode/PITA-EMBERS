import Controller from '@ember/controller';
import { later, once } from '@ember/runloop';
import Ember from 'ember';

import EmberObject, {
  computed,
  observer
} from '@ember/object';

import FindQuery from 'ember-emberfire-find-query/mixins/find-query';

export default Controller.extend(FindQuery,{
auth: Ember.inject.service(),
session: Ember.inject.service(),
chat: Ember.inject.service(),
last: null,
notifications: Ember.inject.service('toast'),

myChat: computed('model.pms', function(){
  return this.get('model.pms').filter((pm)=>{
    let me = ((pm.get('sender.id') == this.get('auth.user.id')) && pm.get('sendto.id') == this.get('chat.crntChat.id'));
    let notme = ((pm.get('sendto.id') == this.get('auth.user.id')) && pm.get('sender.id') == this.get('chat.crntChat.id'));
    return me || notme;
  })
}),

newMessage:observer('model.pms.length',function(){
    if (this.get('model.users')!== undefined){

    let _that = this;

    later(function(){
      let _this = _that;


      if (_this.get('last') < _this.get('model.pms.length')){
        _this.transitionToRoute('friends.chat');
        _this.transitionToRoute('friends.chat.user', _this.get('chat.crntChat.username'));
        later(()=>{
          _this.setTop();
        },5)
      }

      _this.set('last',_this.get('model.pms.length'))
    },5)
  }
}),

setTop(){
  let chat = document.getElementById('chat_box');
  chat.scrollTop = chat.scrollHeight;
},

command(command){
  let noti = this.get('notifications')
  console.log(command);
  this.set('text', '');
  let rawCommand='';
  let _this = this;
  for (var i = 1; i < command.length;i++){
    rawCommand+= command[i];
    if(command[i] === '\n'){
      console.log('broken');
      break;
    }
  }
  switch (rawCommand) {
    case 'hello there':
      noti.success('General Kenobi','General G.:')
      this.set('text','')
    break;

    case 'help':
    window.open('/help/')
    break;

    case 'battle':
    this.set('text', 'Send battle request')
    later(function(){
      _this.set('text','')
    },2500)
    break;
    case 'rgb':
    console.log(this.get('auth.rgb'));
    _this.set('auth.rgb', true)
    later(function(){
      _this.set('auth.rgb',false)
    },30000)
    break;

    case '':

    break;

    default:
    break;

  }
},

  actions:{

    bot: function(){
      this.setTop();
    },

    sendPm: function(){
      if (this.get('text')[0].indexOf('/')>-1){
        this.command(this.get('text'));
      }else if ((this.get('text') !== '' || this.get('text') !== ' ') && !this.get('text')[0].indexOf('/')>-1){
      let user = this.get('auth.user');
      let rec;
      this.filterEqual(this.store, 'user', {'username': this.get('chat.crntChat.username')}, (data)=>{
        rec = data[0];
      let newPm = this.store.createRecord('privatemessage', {
        sender: this.get('auth.user'),
        sendto: rec,
        text: this.get('text')
      })

       var _this = this;
       user.get('sendpm').addObject(newPm);
       newPm.save();
       user.save();
       rec.get('recpm').addObject(newPm);
       rec.save().then(()=>{
         this.set('text','');
         this.transitionToRoute('friends.chat');
         this.transitionToRoute('friends.chat.user', this.get('chat.crntChat.username'));
         later(()=>{
           _this.setTop();
         },1)
       })
      })
      }
     }
  }
});
