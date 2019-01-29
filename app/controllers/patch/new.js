import Controller from '@ember/controller';

export default Controller.extend({
  actions:{
  createPatch: function(){
    var newPatch = this.store.createRecord('patch',{
        version: '0.0.1',
        date: new Date(),
        details: 'hello world',
        focus: 'starting'
    })

    newPatch.save().then(function(){
      console.log("success");
    });
  }}
});
