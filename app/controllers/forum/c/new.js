import Controller from '@ember/controller';
import Ember from 'ember';

export default Controller.extend({
  session: Ember.inject.service(),
  auth: Ember.inject.service(),

  actions:{
    roleSetup: function(){

      let that = this;
      let bedingung = false;
      let forumName = this.get('model.forumcommunity.name');
      let desc = this.get('model.forumcommunity.description');

        if(desc === '' || desc === undefined){
          if(forumName.length > 20 || forumName.length < 4){
            bedingung = false;
            if (forumName.length > 20) {alert('Too long name')}
            if (forumName.length < 4) {alert('Too short name')}
          }else{
            bedingung = true;
          }

        }else{

          if(forumName.length > 20 || forumName.length < 4 || desc.length > 255){
            bedingung = false;
            if (forumName.length > 20) {alert('Too long name')}
            if (forumName.length < 4) {alert('Too short name')}
            if (desc.length > 255) {alert('Description too long')}

          }else{
            bedingung = true;
          }
        }

      if (this.get('model.forumcommunity')){
        that.get('model.forumcommunity').forEach((com)=>{
          if (com.name.toLowerCase() === forumName.toLowerCase()){
            alert('Name already taken, choose another one')
            bedingung = false;
          }
        })
      }
      if(bedingung === true){
        let newCom = this.store.createRecord('forumcommunity',{
          name: forumName,
          description: desc,
          creator: this.get('auth.user')
        })

        this.get('auth.user.comscreated').addObject(newCom);
        newCom.save();
        this.get('auth.user').save();
        this.set('auth.createdcommunity', newCom);
        this.transitionToRoute('forum.c.new.roles')
      }
    }

  }
});
