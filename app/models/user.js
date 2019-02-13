import DS from 'ember-data';

export default DS.Model.extend({
    uid: DS.attr('string'),
    username: DS.attr('string'),
    avatar: DS.attr('string'),
    comments: DS.hasMany('comment', {inverse:null, polymorphic: true}),
    role: DS.belongsTo('role', {inverse: null}),
    friend: DS.hasMany('user', {inverse: null}),
    sendpm: DS.hasMany('privatemessage', {inverse: null}), //gesendete privat nachrichten
    recpm: DS.hasMany('privatemessage',{inverse: null}), //empfangene privat nachrichten
    forumposts: DS.hasMany('forumpost'),
    forumcomments: DS.hasMany('forumcomment'),
    follow: DS.hasMany('forumcommunity'),
    online: DS.attr('boolean', {defaultValue(){return false;}}),
    recfq: DS.hasMany('friendreq', {inverse: null}),
    sendfq: DS.hasMany('friendreq', {inverse: null})
});
