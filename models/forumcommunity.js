import DS from 'ember-data';

export default DS.Model.extend({
  content: DS.hasMany('forumpost'),
  name: DS.attr('string'),
  follower: DS.hasMany('user')
});
