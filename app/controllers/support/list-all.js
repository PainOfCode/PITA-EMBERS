import Controller from '@ember/controller';

export default Controller.extend({
    actions:{
        filterBySubject(param){
            if (param !==''){
                return this.store.query('ticket', {subject:param}).then((results)=> {return {query: param, results:results};});
            }else{
                return this.store.findAll('ticket').then((results)=> {
                    return {query: param, results: results};
                });
            }
        }
    }
});
