import Controller from '@ember/controller';
import Ember from 'ember';
export default Controller.extend({
  session: Ember.inject.service(),
  auth: Ember.inject.service(),

  delCmt(){
    console.log(this.get('model.comments'));
    this.get('model.comments').forEach((c)=>{
      c.destroyRecord();
    });
  },

  delPtch(){
    this.get('model').destroyRecord();
    this.transitionToRoute('patch.overview');
  },

  actions:{
    deletePatch(){

      if (this.get('model.comments._objects')){
        this.delCmt();
        this.delPtch();
      }else{
        this.delPtch();
      }

    }
  }

});
