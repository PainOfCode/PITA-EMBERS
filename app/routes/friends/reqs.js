import Route from '@ember/routing/route';
import Ember from 'ember';

export default Route.extend({
  auth: Ember.inject.service(),
  title: 'Friend requests'/*,
  model(){
    this.filterEqual(this.store, 'friendreq', {'from':this.get('auth.user.id')},(userdata)=>{

    })
  }*/


});
