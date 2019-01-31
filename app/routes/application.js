import Ember from 'ember';
export default Ember.Route.extend({
  session: Ember.inject.service(),


  beforeModel: function() {
    return this.get('session').fetch().then((session)=>{
      console.log('session', session);
    }).catch(function() {
      console.log('NO session');

    });
  },
  
  actions: {
    signIn: function(email,password) {

      this.get('session').open('firebase', { provider: 'password', email:email, password:password}).then(function(data) {
        console.log(data);
      }).catch(function(error){
        console.log(error);
      }).then(()=>{
        this.transitionTo('home');
      });
    },
    signOut: function() {
      this.get('session').close();
    }
  }
});
