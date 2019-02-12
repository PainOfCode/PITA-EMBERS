import DS from 'ember-data';

export default DS.Model.extend({
  from: DS.belongsTo('user', {inverse:null}),
  to: DS.belongsTo('user', {inverse: null}),
  date: DS.attr('date', {defaultValue(){return new Date();}})
});
