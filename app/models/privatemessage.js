import DS from 'ember-data';

export default DS.Model.extend({
    text: DS.attr('string',{inverse: null}),
    sender: DS.belongsTo('user',{inverse: null}),
    sendto: DS.belongsTo('user',{inverse: null}),
    date: DS.attr('date',{defaultValue(){return new Date();}})
});
