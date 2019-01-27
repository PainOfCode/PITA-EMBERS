export default function() {
  this.namespace= '/api';

  let tickets = [{
        type: 'ticket',
        id: 'first',
        attributes:{
          date: '',
          subject: 'Bug-report',
          content: 'I found this one bug...',
          title: 'Please fix'
        }},{
        type: 'ticket',
        id: 'second',
        attributes:{
          date: '',
          subject: 'Feature-request',
          content: 'I have this one feature in mind that...',
          title: 'Please add this feature'
        }
      },{
        type: 'ticket',
        id: 'third',
        attributes:{
          date: '',
          subject: 'Unban',
          content: 'Im not toxic anymore, pls...',
          title: 'I changed, I promise'
        }
      },{
        type: 'ticket',
        id: 'forth',
        attributes:{
          date: '',
          subject: 'Forum',
          content: 'There is this one user that...',
          title: 'HELP ME'
        }
      },{
        type: 'ticket',
        id: 'fifth',
        attributes:{
          date: '',
          subject: 'Technical',
          content: 'It keeps on crashing out of nowhere...',
          title: 'What can I do?'
        }
      }];
 

  this.get('/tickets', function(db, request){
    if (request.queryParams.subject !== undefined){
      let filteredTickets = tickets.filter(function(i){
        return i.attributes.subject.toLowerCase().indexOf(request.queryParams.subject.toLowerCase()) !== -1;
      });
      return {data: filteredTickets};
    } else{
      return {data: tickets};
    }
  })
  
 };
