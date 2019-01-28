import Controller from '@ember/controller';

export default Controller.extend({
  init(){
      this._super(...arguments);
  },
    actions:{
        filterBySubject(param){
            if (param !==''){
              return this.get('model').filter(function(result){
                return result.get('subject').indexOf(param) >= 0;
              })
            }
            else{
                return this.get('model');
            }
        }
    }
});
