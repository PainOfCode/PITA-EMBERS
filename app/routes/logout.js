import Route from '@ember/routing/route';
import Ember from 'ember';

export default Route.extend({
    session: Ember.inject.service(),

    beforeModel(){
      this.get('session');
      this.session.close().then(console.log('closed session'));
      this.transitionTo('login');
    }
});
