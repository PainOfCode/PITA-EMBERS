import Controller from '@ember/controller';

export default Controller.extend({
    actions:{
        filterBySubject(param){
            if (param !==''){
                return this.store.query('ticket', {subject:param});
            }else{
                return this.store.findAll('ticket');
            }
        }
    }
});
