import Route from '@ember/routing/route';

export default Route.extend({
  title: 'View and edit',
  model(params){
    return this.store.findRecord('role', params.id);
  }
});
