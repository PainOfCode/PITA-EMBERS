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
  })

});
