import Controller from '@ember/controller';

export default Controller.extend({


  actions: {

    setDate: function(date){
      this.set('model.date', date);
    },


    saveTicket: function(){
      //ID des Tickets
      this.get('model').save().then(()=>{
        console.log('success');
        this.transitionToRoute('support.overview');
      }).catch(function(error){
        console.log(error);
      });
    },


    deleteTicket: function(){
      this.get('model').destroyRecord().then(()=>{
        this.transitionToRoute('support.overview');
      });
    }
  }

});
