import DS from 'ember-data';

export default DS.Model.extend({
  members: DS.hasMany('user', {inverse: null}),
  messages: DS.hasMany('groupmessage', {inverse: null}),
  name: DS.attr('string')

});
