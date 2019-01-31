import Controller from '@ember/controller';
import Ember from 'ember';

export default Controller.extend({
  session: Ember.inject.service(),
  firebaseApp: Ember.inject.service(),
  setupController(controller, model){
    this._super(...arguments);
    controller.set('email', '');
    controller.set('password1', '');
    controller.set('password2', '');
    controller.set('avatar', '');
    controller.set('username', '');
  },
  actions:{
    login: function(){
      this.transitionToRoute('login');
    },
    createAccount:function(email, password1,password2, username, avatar){
      if (password1 === password2 && email !== '' && username !== ''){

      {
        var password = password1;
        this.get('firebaseApp').auth().createUserWithEmailAndPassword(email,password).then(()=>{
          console.log('Successfully created user');
        }).then(()=>{
          this.get('session').open('firebase', { provider: 'password', email:email, password:password});}).catch(function(error){
            console.log(error);
          }).then(()=>{
            console.log("success creating and opening session");
            var newUser = this.store.createRecord('user',{
              username: username,
              avatar: avatar
            });

            newUser.save();
          }).then(()=>{
            console.log("Saved account and user info");
          }).then(()=>{
            this.transitionToRoute('home');
          });
      }
    }else{
        alert('Passwords do not match');
      }
    }
  }
});
