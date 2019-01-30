import Controller from '@ember/controller';

export default Controller.extend({


    actions: {
        setDate: function(date){
          this.set('model.date', date);
        },
        newTicket: function(){
        var subject = this.get('subject');
        var content = this.get('content');
        var title = this.get('title');
        var date = this.get('date');

        var newTicket = this.store.createRecord('ticket',{
            title: title,
            date: date,
            subject: subject,
            content: content
        })

        newTicket.save();

        this.setProperties({
            title: '',
            date: '',
            content: '',
            subject: ''
        });
        alert('Ticket created Successfully');
        window.location.replace('/support/overview');
    }

}
});
