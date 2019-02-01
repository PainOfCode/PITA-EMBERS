import Ember from 'ember';
import FindQuery from 'ember-emberfire-find-query/mixins/find-query';



export default Ember.Route.extend(FindQuery,{
  session: Ember.inject.service(),
  auth: Ember.inject.service(),


  beforeModel: function() {
    return this.get('session').fetch().then(()=>{
      this.loadUser(this.get('session.currentUser.uid'));
      console.log('session',this.get('session.currentUser.uid'));
    }).catch(function() {
      console.log('NO session');

    });
  },

  loadUser(uid){
    console.log('loaduser for uid', uid);
    this.filterEqual(this.store, 'user', {'uid':uid},(userdata)=>{
      console.log(userdata);
    //console.log(userdata[0].username);
    this.get('auth').set('user', userdata[0]);
    })
  },

  actions: {
    signIn: function(email,password) {
      this.get('session').open('firebase', { provider: 'password', email:email, password:password}).then((data)=> {
        console.log(data.uid);
        this.loadUser(data.uid);
        this.transitionTo('home');
      })
    },
    signOut: function() {
      this.get('session').close();
      this.get('auth').set('user', null);
    },
    gotoLogin: function (){
      this.transitionToRoute('login');
    }
  }
});
