import Controller from '@ember/controller';

export default Controller.extend({


  actions: {

    setDate: function(date){
      this.set('model.date', date);
    },


    saveTicket: function(){
      //ID des Tickets
      this.get('model').save().then(function(){
        console.log('success');
        window.location.replace('/support/overview');
      }).catch(function(error){
        console.log(error);
      });
    },


    deleteTicket: function(){
      this.get('model').destroyRecord().then(function(){
        window.location.replace('/support/overview');
      });
    }
  }

});
