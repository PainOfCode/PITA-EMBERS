export default function() {
  this.namespace= '/api';

  this.get('/tickets', function(){
    return {
      data:[{
        type: 'ticket',
        id: 'first',
        attributes:{
          subject: 'Hello world',
          content: 'This is a test',
          title: '1337'
        }},{
        type: 'ticket',
        id: 'second',
        attributes:{
          subject: 'Hel world',
          content: 'This  a test',
          title: '137'
        }
      },{
        type: 'ticket',
        id: 'third',
        attributes:{
          subject: 'Hel world',
          content: 'This  a test',
          title: '137'
        }
      },{
        type: 'ticket',
        id: 'forth',
        attributes:{
          subject: 'Hel world',
          content: 'This  a test',
          title: '137'
        }
      },{
        type: 'ticket',
        id: 'sixth',
        attributes:{
          subject: 'Hel world',
          content: 'This  a test',
          title: '137'
        }
      },{
        type: 'ticket',
        id: 'seventh',
        attributes:{
          subject: 'Hel world',
          content: 'This  a test',
          title: '137'
        }
      },{
        type: 'ticket',
        id: 'eigthth',
        attributes:{
          subject: 'Hel world',
          content: 'This  a test',
          title: '137'
        }
      },{
        type: 'ticket',
        id: 'ninth',
        attributes:{
          subject: 'Hel world',
          content: 'This  a test',
          title: '137'
        }
      },{
        type: 'ticket',
        id: 'tenth',
        attributes:{
          subject: 'Hel world',
          content: 'This  a test',
          title: '137'
        }
      },{
        type: 'ticket',
        id: 'eleventh',
        attributes:{
          subject: 'Hel world',
          content: 'This  a test',
          title: '137'
        }
      }
      
  
  
  ]
  }});
  
}
