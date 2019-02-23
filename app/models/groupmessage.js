import DS from 'ember-data';

export default DS.Model.extend({
  sender: DS.belongsTo('user', {inverse:null}),
  sendto: DS.belongsTo('groupchat', {inverse:null}),
  body: DS.attr('string'),
  sendtime: DS.attr('date', {defaultValue(){return new Date}})
});
