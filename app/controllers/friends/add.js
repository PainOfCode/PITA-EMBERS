import Controller from '@ember/controller';

export default Controller.extend({

init(){
  this._super(...arguments);
},

actions: {
  searchUser(param){
      if (param !==''){
        return this.get('model').filter(function(result){
          return result.get('username').toLowerCase().indexOf(param.toLowerCase()) >= 0;
        })
      }
      else{
          return this.get('model');
      }
  }
}
});
