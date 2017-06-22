/**
 * Created by zuoa on 15.06.2017.
 */

import assert from 'assert';
import getUserRating from '../templates/result/getUserRating';

describe(`Экран резултатов`, () => {
  it(`Проверка формирования рейтига`, () => {
    assert.equal(getUserRating({time: 0, answers: 10}), 83);
    assert.equal(getUserRating({time: 45, answers: 10}), 33);
    assert.equal(getUserRating({time: 33, answers: 8}), 17);
    assert.equal(getUserRating({time: 77, answers: 7}), 0);
    assert.equal(getUserRating({time: 120, answers: 0}), 0);
  });
});
