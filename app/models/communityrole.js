import DS from 'ember-data';

export default DS.Model.extend({
    community: DS.belongsTo('forumcommunity', {inverse:null}),
    user: DS.hasMany('user', {inverse:null}),
    name: DS.attr('string'),
    createpost: DS.attr('boolean', {defaultValue(){return true}}),
    comment: DS.attr('boolean', {defaultValue(){return true}}),
    banned: DS.attr('boolean', {defaultValue(){return false}}),
    deleteposts: DS.attr('boolean', {defaultValue(){return false}}),
    deletecomment: DS.attr('boolean', {defaultValue(){return false}}),
    banuser: DS.attr('boolean', {defaultValue(){return false}})
});
