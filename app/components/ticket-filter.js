import Component from '@ember/component';

export default Component.extend({
    classNames: ['ticket-filter'],
    value: '',

    init(){
        this._super(...arguments);
        let filterAction = this.get('filter');

        this.set('results', filterAction(''));

    },

    actions:{
        handleFilterEntry(){
            let filterInputValue = this.get('value');
            let filterAction = this.get('filter');
            this.set('results', filterAction(filterInputValue));

        }
    }
});
