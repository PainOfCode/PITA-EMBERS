import DS from 'ember-data';

export default DS.Model.extend({
    subject: DS.attr('string', {defaultValue(){return 'none';}}),
    content: DS.attr('string', {defaultValue(){return 'No Description';}}),
    title: DS.attr('string', {defaultValue(){return 'No title given';}}),
    date: DS.attr('date', {defaultValue() {return new Date();}})
});
