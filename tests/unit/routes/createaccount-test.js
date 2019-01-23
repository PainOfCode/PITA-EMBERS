import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | createaccount', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:createaccount');
    assert.ok(route);
  });
});
