export default function() {
  this.namespace= '/api';

  this.passthrough('https://www.googleapis.com/**');
  this.passthrough('https://securetoken.googleapis.com/**');

}
