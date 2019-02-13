import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Controller | forum/c/community', function(hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function(assert) {
    let controller = this.owner.lookup('controller:forum/c/community');
    assert.ok(controller);
  });
});
