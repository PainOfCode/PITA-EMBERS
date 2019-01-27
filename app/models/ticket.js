import DS from 'ember-data';

export default DS.Model.extend({
    subject: DS.attr('string'),
    content: DS.attr('string'),
    title: DS.attr('string'),
    date: DS.attr('date', {defaultValue() {return new Date();}})
});
