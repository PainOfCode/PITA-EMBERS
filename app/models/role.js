import DS from 'ember-data';

export default DS.Model.extend({
  postcomment: DS.attr('boolean',{defaultValue(){return false;}}),
  createticket: DS.attr('boolean',{defaultValue(){return false;}}),
  managepatch: DS.attr('boolean',{defaultValue(){return false;}}),
  readticket: DS.attr('boolean',{defaultValue(){return false;}}),
  createpost: DS.attr('boolean',{defaultValue(){return false;}}),
  manageroles: DS.attr('boolean',{defaultValue(){return false;}}),
  manageusers: DS.attr('boolean',{defaultValue(){return false;}}),
  rolename: DS.attr('string', {defaultValue(){return 'Invalid role';}}),
  user: DS.hasMany('user',{inverse:null})
});
