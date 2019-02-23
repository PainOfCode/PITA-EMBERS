import DS from 'ember-data';

export default DS.Model.extend({
  newmessages: DS.attr('boolean', {defaultValue(){return true}}),
  newrequests: DS.attr('boolean', {defaultValue(){return true}}),
  newpatch: DS.attr('boolean', {defaultValue(){return true}}),
  newpost: DS.attr('boolean', {defaultValue(){return true}}),
  rolechanged: DS.attr('boolean', {defaultValue(){return true}}),
  user: DS.belongsTo('user', {inverse: null}),
  showprofilepic: DS.attr('boolean', {defaultValue(){return true}}),
  notifyemail: DS.attr('boolean', {defaultValue(){return false}})
});
