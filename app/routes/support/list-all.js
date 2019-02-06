import Route from '@ember/routing/route';

export default Route.extend({
  title: 'Ticket list',
    model(){
        return this.store.findAll('ticket');
    }
});
