import test = require('blue-tape');

import dotty = require('dotty');

test('dotty exists', (t) => {
  t.plan(1);
  t.notEqual(dotty, undefined);
});
