import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | support/ticket/new', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:support/ticket/new');
    assert.ok(route);
  });
});
