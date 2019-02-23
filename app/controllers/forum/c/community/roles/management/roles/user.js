import Controller from '@ember/controller';
import Ember from 'ember';

export default Controller.extend({
  session: Ember.inject.service(),
  auth: Ember.inject.service(),
  selectedRole: null,
  notifications: Ember.inject.service('toast'),

  actions:{
    select: function(user){
      let that = this;
      let slct = this.get('selectedRole')
      if (slct === '' || slct === undefined || slct === null){
        let noti =  this.get('notifications');
        noti.error('Please chose a role before trying to assign a user!','Role assignment')
      }else{
        user.get('comrole').forEach((userrole)=>{
          if (userrole.get('community.id') === that.get('auth.chosencom.id')){
            user.get('comrole').removeObject(userrole)
            that.get('auth.chosencom.roles').forEach((comrole)=>{
              comrole.get('user').forEach((userin)=>{
                if (userin.id === user.id){
                  comrole.get('user').removeObject(user)
                  comrole.save();
                }
              })
            })
            user.save();
          }
        })

            let role = this.get('selectedRole')
            role.get('user').addObject(user);
            role.save();
            this.get('auth.chosencom').save();
            user.get('comrole').addObject(role);
            user.save();
      }
    },
    setRole: function(role){
      this.set('selectedRole', null)
      this.set('selectedRole', role)
    },
    gotoBan: function(){
      this.set('selectedRole', null)
      this.transitionToRoute('forum.c.community.roles.management.user')
    },
    gotoManage: function(){
      this.set('selectedRole', null)
      this.transitionToRoute('forum.c.community.roles.management.roles')
    },
    back: function(){
      this.set('selectedRole', null)
      this.transitionToRoute('forum.c.community.posts')
    },
    gotoUser: function(){
      this.set('selectedRole', null)
      this.transitionToRoute('forum.c.community.roles.management.roles.user')
    }

  }
});
