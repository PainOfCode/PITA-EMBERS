import Controller from '@ember/controller';

export default Controller.extend({

  actions:{
    gotoNew: function(){
      window.location.replace('/patch/new');
    }
  }


});
