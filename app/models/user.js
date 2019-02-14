import DS from 'ember-data';
import Ember from 'ember';
const { computed } = Ember;

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
    lastaction: DS.attr('date'),
    online: computed('lastaction', function(){
      //8250ms pro aktaulisierung + delay schon bzw spielraum
      return ((new Date().getTime())-(this.get('lastaction').getTime()) < 8250);
    }),
    recfq: DS.hasMany('friendreq', {inverse: null}),
    sendfq: DS.hasMany('friendreq', {inverse: null})
});
