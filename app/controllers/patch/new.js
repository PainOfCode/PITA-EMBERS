import Controller from '@ember/controller';

export default Controller.extend({
  actions:{
  newPatch: function(){

    var version = this.get('version');
    var focus = this.get('focus');
    var details = this.get('details');



    var newPatch = this.store.createRecord('patch',{
        version: version,
        date: new Date(),
        details: details,
        focus: focus
    })

    newPatch.save().then(function(){
      console.log("success");
    });

    this.setProperties({
      version: '',
      details: '',
      focus: ''
    });

    alert('Successfully created patch');
    window.location.replace('/patch/overview/');
  }}
});
