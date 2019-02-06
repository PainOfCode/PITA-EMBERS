import Route from '@ember/routing/route';

export default Route.extend({
  title: ('Ticket'),
  model(params){
    return this.store.findRecord('ticket', params.id);
  }
});
