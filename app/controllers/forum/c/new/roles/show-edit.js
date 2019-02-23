import Controller from '@ember/controller';
import Ember from 'ember';
import EmberObject, {
  computed,
  observer
} from '@ember/object';

export default Controller.extend({
  session: Ember.inject.service(),
  auth: Ember.inject.service(),

that: computed('model', function(){
  return this.get('model').filter((data)=>{
    console.log(data);
  })
}),

actions:{
  saveChanges: function(){
    this.get('model').save();
  }
}

});
