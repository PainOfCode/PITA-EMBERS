import DS from 'ember-data';

export default DS.Model.extend({
  user: DS.belongsTo('user'),
  fpost: DS.belongsTo('forumpost'),
  body: DS.attr('string')
});
