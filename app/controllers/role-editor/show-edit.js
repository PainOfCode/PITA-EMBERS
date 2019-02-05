import Controller from '@ember/controller';
import Ember from 'ember';

export default Controller.extend({
  auth: Ember.inject.service(),
  session: Ember.inject.service(),
    actions:{

      applyChanges: function(){

        this.get('model').save().then(()=>{
          console.log('Applied changes');
          this.transitionToRoute('role-editor');
        });


      }
    }
});
