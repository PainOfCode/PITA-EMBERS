import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | patch/new', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:patch/new');
    assert.ok(route);
  });
});
