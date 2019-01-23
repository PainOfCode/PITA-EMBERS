import { helper } from '@ember/component/helper';

const subjectList = [
  'Bug-report',
  'Feature-request',
  'Forum',
  'Unban'
]

export function ticketFilter([subject]) {
  if (subjectList.includes(subject)){
    return 'Defined';
  }
  return 'Undefined';
}

export default helper(ticketFilter);
