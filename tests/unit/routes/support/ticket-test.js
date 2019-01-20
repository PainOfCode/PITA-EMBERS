import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | support/ticket', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:support/ticket');
    assert.ok(route);
  });
});
