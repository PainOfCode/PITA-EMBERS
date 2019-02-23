import Ember from 'ember';
import Route from '@ember/routing/route';
import FindQuery from 'ember-emberfire-find-query/mixins/find-query';

export default Route.extend(FindQuery,{
auth: Ember.inject.service(),
  model(param){
    let name = param.name;
    let that = this;

    this.filterEqual(this.store,'forumcommunity', {'name':name}, function(data){
      that.set('auth.chosencom', data[0])

      let cmrole = that.get('auth.chosencom.roles').filter((cr)=>{
        let rolematch = that.get('auth.user.comrole').filterBy('id', cr.get('id'));
        if(rolematch.length){
          return true;
        }
        return false;
      });
      that.set('auth.chosencomrole', cmrole.get('firstObject'))
    })

    return this.get('auth.chosencom');
  }
});
