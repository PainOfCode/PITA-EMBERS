import Route from '@ember/routing/route';

export default Route.extend({
  title: 'Ticket overview',
  model(){

      return this.store.findAll('ticket');

  }
});
