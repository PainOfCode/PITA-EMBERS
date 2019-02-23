import DS from 'ember-data';

export default DS.Model.extend({
  creator: DS.belongsTo('user', {inverse: null}),
  posts: DS.hasMany('forumpost', {inverse:null}),
  name: DS.attr('string'),
  follower: DS.hasMany('user', {inverse:null}),
  roles: DS.hasMany('communityrole', {inverse:null}),
  description: DS.attr('string')
});
