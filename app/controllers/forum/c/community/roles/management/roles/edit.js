import Controller from '@ember/controller';

export default Controller.extend({

  actions:{
    save: function(){
      this.get('model').save();
      this.transitionToRoute('forum.c.community.roles.management.roles')
    },
    gotoBan: function(){
      this.transitionToRoute('forum.c.community.roles.management.user')
    },
    gotoManage: function(){
      this.transitionToRoute('forum.c.community.roles.management.roles')
    },
    back: function(){
      this.transitionToRoute('forum.c.community.posts')
    },
    gotoUser: function(){
      this.transitionToRoute('forum.c.community.roles.management.roles.user')
    }

  }
});
