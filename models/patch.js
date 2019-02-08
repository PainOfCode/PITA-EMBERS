import DS from 'ember-data';

export default DS.Model.extend({
    comments: DS.hasMany('comment',{inverse:null, polymorphic:true}),
    version: DS.attr('string',{defaultValue(){return 'Unknown';}}),
    focus: DS.attr('string',{defaultValue(){return 'No Focus';}}),
    details: DS.attr('string',{defaultValue(){return 'No details given';}}),
    date: DS.attr('date', {defaultValue(){return new Date();}}),
});
