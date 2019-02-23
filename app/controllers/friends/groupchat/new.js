import Controller from '@ember/controller';
import Ember from 'ember';

export default Controller.extend({
  session: Ember.inject.service(),
  auth: Ember.inject.service(),
  notifications: Ember.inject.service('toast'),
  userselect: null,
  userselected: null,
  onefriend: null,

  actions:{
    create: function(){

      let newGrp = this.store.createRecord('groupchat',{
        name: this.get('name'),
        members: this.get('userselected')
      })

      //user.groupchats

      this.get('userselected').forEach((user)=>{
        user.get('groupchats').addObject(newGrp)
        user.save();
      })

      newGrp.save();
    },
    select:function(friend){
      let test = [this.get('auth.user')];
      let noti = this.get('notifications')

      if(this.get('onefriend') !== null){
        test = this.get('onefriend')
      }
        if(this.get('userselected.length')>=1){
          this.get('userselected').forEach((user)=>{
            if (friend.id === user.id){
              noti.warning('You cannot choose the same person twice!','')
            }else{
              test.push(friend)
              this.set('userselected',test)
              this.set('onefriend', test)

              this.set('userselect', null)
            }
          })
        }else{
          test.push(friend)
          this.set('userselected',test)
          this.set('onefriend', test)

          this.set('userselect', null)
        }



    }
  }
});
