/**
 * Created by zuoa on 09.06.2017.
 */

import assert from 'assert';
import getCorrectId from '../templates/levelArtist/getCorrectId';
import dataList from '../templates/levelArtist/model';

const list = [...dataList];

describe(`Экран определения артиста`, () => {
  it(`Поиск корректного ответа`, () => {
    assert.equal(getCorrectId(list[0].answers), 2);
    assert.equal(getCorrectId(list[1].answers), 2);
    assert.equal(getCorrectId(list[2].answers), 2);
    assert.equal(getCorrectId(list[list.length - 1].answers), 0);
  });
});
