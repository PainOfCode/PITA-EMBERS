import Route from '@ember/routing/route';

export default Route.extend({
  title: 'About us',
  model(){
    return {abt_txt:'[text goes here]'};
  }

});
