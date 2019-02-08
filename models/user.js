import DS from 'ember-data';

export default DS.Model.extend({
    uid: DS.attr('string'),
    username: DS.attr('string'),
    avatar: DS.attr('string'),
    comments: DS.hasMany('comment', {inverse:null, polymorphic: true}),
    role: DS.belongsTo('role', {inverse: null}),
    friend: DS.hasMany('user', {inverse: 'friend'}),
    pm: DS.hasMany('privatemessage', {inverse: 'sender'}), //Privat nachrichten
    forumposts: DS.hasMany('forumpost'),
    forumcomments: DS.hasMany('forumcomment'),
    follow: DS.hasMany('forumcommunity')
});
