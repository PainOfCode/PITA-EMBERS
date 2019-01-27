import { helper } from '@ember/component/helper';
import Ember from 'ember';

const {RSVP: {Promise}} = Ember;

export function getOrCreateUser(uid, username, avatar, store) {
  
  return new Promise((resolve)=>{
    store.query('user', {oderBy: 'uid', equalTo:uid}).then((records)=>{
      if(records.get('length' === 0)){
        resolve(store.createRecord('user',{
          uid: uid,
          username: username,
          avatar: avatar
        }))
      }else{
        resolve(records.get('firstObject'));
      }
    });
  });


}

export default helper(getOrCreateUser);
