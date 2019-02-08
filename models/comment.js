import DS from 'ember-data';

export default DS.Model.extend({
    text: DS.attr('string'),
    user: DS.belongsTo('user', {inverse: null}),
    post: DS.belongsTo('patch', {inverse: null})
});
