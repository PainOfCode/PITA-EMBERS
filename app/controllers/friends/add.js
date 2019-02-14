import Controller from '@ember/controller';
import Ember from 'ember';

export default Controller.extend({

auth: Ember.inject.service(),
init(){
  this._super(...arguments);
},

actions: {

  searchUser(param){
      if (param !==''){
        return this.get('model.users').filter(function(result){
          return result.get('username').toLowerCase().indexOf(param.toLowerCase()) >= 0;
        })
      }
      else{
          return this.get('model.users');
      }
  },


  sendFQ: function(param){

    let notme = false;
    if (this.get('auth.user.id') === param.id){
        notme = false;
    }else{
      notme = true;
    }

    let count = 0;
    let notsend = false;

    let notfriends = true;

    if (this.get('model.reqs.length')>0 && this.get('auth.user') !== null){
      this.get('model.reqs').forEach((data)=>{
        count++;
        //console.log(data.from.content.id); <- ID des senders
        if(data.from.content.id === this.get('auth.user.id') && data.to.content.id === param.id){
          notsend = false;
          count = (this.get('model.reqs.length')*-100);
        }else if(count === (this.get('model.reqs.length'))){
          notsend = true;
        }else if(count === (this.get('model.reqs.length')*-100)){
          notsend = false;
        }
      })
    }else{
      notsend = true;
    }


    //Friend count und logik, das man nicht schon als freund von der personen geaddet wurde
    let count_f = 0;

    if(this.get('auth.user.friend.length')>0){
      this.get('auth.user.friend').forEach((friend)=>{
        count++;
        if(friend.id === param.id){
          notfriends = false;
          count_f = (this.get('auth.user.friend.length')*-100);
        }else if(count_f === this.get('auth.user.friend.length')){
          notfriends = true;
        }else if(count_f === (this.get('auth.user.friend.length')*-100)){
          notfriends = false;
        }
      })
    }else{
      notfriends = true;
    }


     let notrecieved = false;
     let count_v = 0;

     if (this.get('model.reqs.length')>0){
       this.get('model.reqs').forEach((data)=>{
         count_v++;
         console.log(data.to.content.id);
         if(data.to.content.id === this.get('auth.user.id') && data.from.content.id === param.id){
           notrecieved = false;
           count_v = (this.get('model.reqs.length')*(-100));
           console.log('hello world');
         }else if(count_v === this.get('model.reqs.length')){
           notrecieved = true;
         }else if(count_v === (this.get('model.reqs.length')*(-100))){
           notrecieved = false;
         }
       })
     }else{
        notrecieved = true;
     }

    //Alle bedingungen mit namen, wo die req hingehen hätte sollen
    console.log('Not me: ',notme,'Not recieved: ',notrecieved,'Not friends: ',notfriends,'Not send: ',notsend,'to user: ',param.username);

    if (notme === true && notsend === true && notfriends === true && notrecieved === true){

      let fq = this.store.createRecord('friendreq',{
        to: param,
        from: this.get('auth.user')
      });


      //Manuelles hinzufügen, von der beziehung in dem sinne
      let toUser = this.store.peekRecord('user', param.id);
      let fromUser = this.store.peekRecord('user', this.get('auth.user.id'));

      fromUser.get('sendfq').addObject(fq);
      fq.save().then(()=>{
        fromUser.save();
      });

      toUser.get('recfq').addObject(fq);
      fq.save().then(()=>{
        toUser.save();
      });
    }
  }
}
});
