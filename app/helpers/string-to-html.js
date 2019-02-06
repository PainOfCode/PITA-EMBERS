import { helper } from '@ember/component/helper';

export function stringToHtml(params) {
  console.log(params);
  let input = params[0];
  return input.replace(/\n/g, '<br>');
}

export default helper(stringToHtml);
