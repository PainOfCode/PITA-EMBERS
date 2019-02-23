import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  body: DS.attr('string'),
  creator: DS.belongsTo('user', {inverse:null, defaultValue(){return 'Anon'}}),
  forumcomment: DS.hasMany('forumcomment', {inverse:null}),
  community: DS.belongsTo('forumcommunity', {inverse:null})
  
});
