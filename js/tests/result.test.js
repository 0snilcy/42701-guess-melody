/**
 * Created by zuoa on 15.06.2017.
 */

import assert from 'assert';
import getUserRating from '../templates/result/getUserRating';

const rating = [{"time": 0, "answers": 10, "date": 1498741482488}, {"time": 0, "answers": 10, "date": 1498741495856}, {"time": 0, "answers": 10, "date": 1498741508268}, {"time": 0, "answers": 10, "date": 1498741800794}, {"time": 32, "answers": 8, "date": 1498741815669}, {"time": 32, "answers": 8, "date": 1498741821138}, {"time": 55, "answers": 7, "date": 1498741841133}, {"time": 35, "answers": 6, "date": 1498741848685}, {"time": 35, "answers": 6, "date": 1498742036784}, {"time": 35, "answers": 6, "date": 1498742477633}, {"time": 35, "answers": 6, "date": 1498742612137}, {"time": 35, "answers": 6, "date": 1498743031342}, {"time": 35, "answers": 6, "date": 1498743135785}, {"time": 90, "answers": 8, "date": 1498814758897}];

describe(`Экран резултатов`, () => {
  it(`Проверка формирования рейтига`, () => {
    assert.equal(getUserRating({time: 0, answers: 10}, rating), 67);
    assert.equal(getUserRating({time: 45, answers: 10}, rating), 73);
    assert.equal(getUserRating({time: 33, answers: 8}, rating), 53);
    assert.equal(getUserRating({time: 77, answers: 7}, rating), 40);
    assert.equal(getUserRating({time: 120, answers: 0}, rating), 0);
  });
});
