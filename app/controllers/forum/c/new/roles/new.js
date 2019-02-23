import Controller from '@ember/controller';
import Ember from 'ember';
import FindQuery from 'ember-emberfire-find-query/mixins/find-query';

export default Controller.extend(FindQuery,{
  session: Ember.inject.service(),
  auth: Ember.inject.service(),

  actions:{
    createRole: function(){

      let com;
      this.filterEqual(this.get('store'), 'forumcommunity', {'id':this.get('auth.createdcommunity.id')}, (data)=>{
        com = data[0];

        let newRole = this.store.createRecord('communityrole',{
          banuser: this.get('model.communityrole.banuser'),
          deleteposts: this.get('model.communityrole.deleteposts'),
          deletecomment: this.get('model.communityrole.deletecomment'),
          comment: this.get('model.communityrole.comment'),
          createpost: this.get('model.communityrole.createpost'),
          name: this.get('model.communityrole.name'),
          community: this.get('auth.createdcommunity')
        })

        com.get('roles').addObject(newRole);
        newRole.save();
        this.set('model.communityrole.createpost', false)
        this.set('model.communityrole.comment', false)
        this.set('model.communityrole.deleteposts', false)
        this.set('model.communityrole.banuser', false)
        this.set('model.communityrole.deletecomment', false)
        this.set('model.communityrole.name', '')
      })
    }
  }
});
