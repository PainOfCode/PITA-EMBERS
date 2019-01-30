import Controller from '@ember/controller';

export default Controller.extend({

  actions:{
    deletePatch(){
      this.get('model').destroyRecord().then(function(){
        alert('Deletion successfull');
        window.location.replace('/patch/overview/');
      });
    }
  }

});
