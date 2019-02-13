import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | friends/reqs', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:friends/reqs');
    assert.ok(route);
  });
});
