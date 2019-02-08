import DS from 'ember-data';

export default DS.Model.extend({
    text: DS.attr('string'),
    sender: DS.belongsTo('user'),
    sendto: DS.belongsTo('user'),
    date: DS.attr('date',{defaultValue(){return new Date();}})
});
