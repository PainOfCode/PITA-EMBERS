import DS from 'ember-data';

export default DS.Model.extend({
    text: DS.attr('string'),
    comment: DS.belongsTo('patch')
});
