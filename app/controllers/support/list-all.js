import Controller from '@ember/controller';

export default Controller.extend({
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
