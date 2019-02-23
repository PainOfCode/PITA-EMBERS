import Route from '@ember/routing/route';
import Ember from 'ember';

export default Route.extend({
    session: Ember.inject.service(),
    auth: Ember.inject.service(),
    notifications: Ember.inject.service('toast'),
    beforeModel(){

      let noti = this.get('notifications')
      this.get('session');
      this.set('auth.chosencom', null)
      this.set('auth.rgb', null)
      this.set('auth.createdcommunity', null)
      this.set('auth.user', null)
      this.session.close().then(console.log('closed session'));
      noti.info('You have been logged out','Logged out', {timeOut:1500})
      this.transitionTo('login');
    }
});
