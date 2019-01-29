import DS from 'ember-data';

export default DS.Model.extend({
    comments: DS.hasMany('comment'),
    version: DS.attr('string'),
    focus: DS.attr('string'),
    details: DS.attr('string'),
    date: DS.attr('date')

});
