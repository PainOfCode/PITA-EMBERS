import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | role-editor/new', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:role-editor/new');
    assert.ok(route);
  });
});
