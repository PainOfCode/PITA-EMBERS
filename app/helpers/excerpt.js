import { helper } from '@ember/component/helper';

export function excerpt(params/*, hash*/) {
  return params[0].substring(0,128);
}

export default helper(excerpt);
