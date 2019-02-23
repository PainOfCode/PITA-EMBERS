import Route from '@ember/routing/route';

export default Route.extend({
  title: 'About us',
  model(){
    return {abt_txt:'We are mixed use case website. We offer xyz, a forum, social media, subscriptions, etc.'};
  }

});
