import Controller from '@ember/controller';
import Ember from 'ember';

export default Controller.extend({
  session: Ember.inject.service(),
  firebaseApp: Ember.inject.service(),
  auth: Ember.inject.service(),
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
        var password = password1;
        this.get('firebaseApp').auth().createUserWithEmailAndPassword(email,password).then((data)=>{
          console.log(data);

          this.get('session').open('firebase', {
            provider: 'password',
            email:email,
            password:password
          })
          .catch(function(error){
            console.log(error);
          }).then(()=>{
            console.log("success creating and opening session");
            var newUser = this.store.createRecord('user',{
              uid: data.uid,
              username: username,
              avatar: avatar
            });
            newUser.save().then((user)=>{
              console.log("Saved account and user info");
              this.set('auth.user', user)
              this.transitionToRoute('home');
            });
          });
        })
      }
    else
        {
          alert('Passwords do not match');
        }
    }
  }
});
