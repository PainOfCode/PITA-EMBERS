import Route from '@ember/routing/route';

export default Route.extend({
  showCreate:false,
  model(params){
    return this.store.findRecord('patch', params.id);
  }
});
