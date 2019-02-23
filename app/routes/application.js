import Ember from 'ember';
import FindQuery from 'ember-emberfire-find-query/mixins/find-query';



export default Ember.Route.extend(FindQuery,{
  session: Ember.inject.service(),
  auth: Ember.inject.service(),
  onlinestatus: Ember.inject.service(),
  notifications: Ember.inject.service('toast'),
  beforeModel: function() {
    // let noti = this.get('notifications')
    // noti.info('text', 'title')
    return this.get('session').fetch().then(()=>{
      this.loadUser(this.get('session.currentUser.uid'));
    }).catch(function() {

    });
  },

  loadUser(uid){
    this.filterEqual(this.store, 'user', {'uid':uid},(userdata)=>{
    //console.log(userdata[0].username);
    this.get('auth').set('user', userdata[0]);
    })
  },


  actions: {
    signIn: function(email,password) {
      this.get('session').open('firebase', { provider: 'password', email:email, password:password}).then((data)=> {
        this.loadUser(data.uid);
        let noti = this.get('notifications')
        noti.success('Successfully logged in','Logged in', {timeOut:1500})
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
