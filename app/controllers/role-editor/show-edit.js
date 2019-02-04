import Controller from '@ember/controller';

export default Controller.extend({
    actions:{

      applyChanges: function(){

        this.get('model').save().then(()=>{
          console.log('Applied changes');
        });


      }
    }
});
