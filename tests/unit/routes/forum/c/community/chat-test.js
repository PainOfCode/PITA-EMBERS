import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | forum/c/community/chat', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:forum/c/community/chat');
    assert.ok(route);
  });
});
