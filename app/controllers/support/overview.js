import Controller from '@ember/controller';

export default Controller.extend({
    actions:{
        filterBySubject(param){
/*return this.store.findAll('ticket').then((results)=> {
    return {query: param, results: results.filter(function(result){
      return result.get('subject').indexOf(param) >= 0;
*/
            if (param !==''){
              return this.store.findAll('ticket').then((results)=> {
                  return {query: param, results: results.filter(function(result){
                    return result.get('subject').indexOf(param) >= 0;})}})
            }
            else{
                return this.store.findAll('ticket').then((results)=> {
                    return {query: param, results: results};
                });
            }
        }
    }
});
