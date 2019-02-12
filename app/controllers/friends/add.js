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



    if (notme === true && notsend === true){

      let fq = this.store.createRecord('friendreq',{
        to: param,
        from: this.get('auth.user')
      });


      //Manuelles hinzufügen, von der beziehung in dem sinne
      let toUser = this.store.peekRecord('user', param.id);

      toUser.get('recfq').addObject(fq);
      fq.save().then(()=>{
        toUser.save();
      });
    }
  }
}
});
