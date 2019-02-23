import Controller from '@ember/controller';
import Ember from 'ember';

export default Controller.extend({
  auth: Ember.inject.service(),
  session: Ember.inject.service(),
  actions:{
    filterCommunity(param){
      if(param === '*'){
        return this.get('model.forumcommunity')
      }else
        if (param !==''){

          return this.get('model.forumcommunity').filter(function(result){
            return result.get('name').toLowerCase().indexOf(param.toLowerCase()) >= 0;
          })
        }else if (param===''){
          if(this.get('auth.user.follow.length')>0 && this.get('session.isAuthenticated')){
            return this.get('auth.user.follow');
          }
          else{
            return this.get('model.forumcommunity')
          }
        }
    }
  }
});
