import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  body: DS.attr('string'),
  creator: DS.belongsTo('user'),
  forumcomments: DS.hasMany('forumcomment'),
  community: DS.belongsTo('forumcommunity')
});
