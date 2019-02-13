import Controller from '@ember/controller';
import Ember from 'ember';
const { computed } = Ember;
export default Controller.extend({

    auth: Ember.inject.service(),
    myReqs:computed('model.reqs', function(){
      return this.get('model.reqs').filter((req)=>{
        let fromMe = req.get('from.id') == this.get('auth.user.id');
        let toMe = req.get('to.id') == this.get('auth.user.id');
        return fromMe || toMe;
      })
    }),


      delReq(userReq){
        //Delete rec. FQs from sender and reciever
          let reciever = userReq.get('to');
          let sender = userReq.get('from');

          let useID1 = reciever.get('id');
          let useID2 = sender.get('id');

          let use1 = this.store.peekRecord('user', useID1);
          let use2 = this.store.peekRecord('user', useID2);

          use1.get('recfq').removeObject(userReq);
          use1.save();
          use2.get('sendfq').removeObject(userReq);
          use2.save();

        //Delete record of request
          let rq = this.store.findRecord('friendreq', userReq.id);
          rq.then((req)=>{
            req.destroyRecord();
            req.save().then(()=>{
              window.location.reload(true);
            });
          });
      },

  actions:{

    cancelFq: function(userReq){

      this.delReq(userReq);

    },

    acceptFq: function(userReq){

      let sender = userReq.get('from');
      let reciever = userReq.get('to');

      let useID1 = sender.get('id');
      let useID2 = reciever.get('id');

      let use1 = this.store.peekRecord('user', useID1);
      let use2 = this.store.peekRecord('user', useID2);

      use1.get('friend').addObject(use2);
      use1.save();
      use2.get('friend').addObject(use1);
      use2.save();

      this.delReq(userReq);

    }

  }

});
