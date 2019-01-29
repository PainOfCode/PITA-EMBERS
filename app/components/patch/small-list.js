import Component from '@ember/component';

export default Component.extend({
  model(){
      return this.store.findAll('patch').then(function(){console.log('success2')});
  }
});
