import Controller from '@ember/controller';
import Ember from 'ember';

export default Controller.extend({
  session: Ember.inject.service(),
  auth: Ember.inject.service(),

  init(){
      this._super(...arguments);
  },
    actions:{
        filterBySubject(param){
            if (param !==''){
              return this.get('model').filter(function(result){
                return result.get('subject').toLowerCase().indexOf(param.toLowerCase()) >= 0;
              })
            }
            else{
                return this.get('model');
            }
        }
    }
});
