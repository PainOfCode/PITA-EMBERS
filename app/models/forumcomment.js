import DS from 'ember-data';

export default DS.Model.extend({
  user: DS.belongsTo('user', {inverse:null}),
  fpost: DS.belongsTo('forumpost', {inverse:null}),
  body: DS.attr('string'),
  replys: DS.belongsTo('forumcomment', {inverse:null})
});
