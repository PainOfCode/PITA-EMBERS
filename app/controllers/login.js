import Controller from '@ember/controller';

export default Controller.extend({

  actions:{
    register: function(){
      this.transitionToRoute('createaccount');
    }
  }

});
