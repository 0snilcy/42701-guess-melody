/**
 * Created by zuoa on 15.06.2017.
 */

import assert from 'assert';

describe(`Array`, () => {
  describe(`#indexOf()`, () => {
    it(`should return -1 when the value is not present`, () => {
      assert.equal(0, [1, 2, 3].indexOf(4));
    });
  });
});
