import Service from '@ember/service';
import { later } from '@ember/runloop';
import Ember from 'ember';

export default Service.extend({
auth: Ember.inject.service(),
session: Ember.inject.service(),

lastaction: '',

refresh(){
  let _this = this;

  if(_this.get('session.isAuthenticated')){
    later(function(){
      _this.set('auth.user.lastaction', new Date());
      _this.get('auth.user').save();
      _this.refresh();
    },5000);
  }else{
    later(function(){
      _this.refresh();
    }, 2000)
  }

},
init(){
  this._super(...arguments);
  this.refresh();
}


});
