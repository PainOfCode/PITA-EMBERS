import Controller from '@ember/controller';
import Ember from 'ember';

export default Controller.extend({
  session: Ember.inject.service(),
  firebaseApp: Ember.inject.service(),
  auth: Ember.inject.service(),
  notifications: Ember.inject.service('toast'),

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
      if (password1 === password2 && email.length >= 10 && (username.length >= 6 && username.length <= 12)){
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
            let newSet= this.store.createRecord('setting');
            newSet.save();
            var newUser = this.store.createRecord('user',{
              uid: data.uid,
              username: username,
              avatar: avatar,
              settings: newSet
            });


            newUser.save().then((user)=>{
              let noti = this.get('notifications')
              noti.info('You are logged in now','Logged in', {timeOut: 2000})
              noti.success('Created account successfully','Success', {timeOut: 2000})
              this.set('auth.user', user)
              this.transitionToRoute('home');
            });
          });
        })
      }
    }
  }
});
