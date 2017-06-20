/**
 * Created by wakedafuckup on 17.06.17.
 */

import rating from './rating';

export default (item) => {
  const ratingList = rating.slice();
  ratingList.push(item);
  ratingList
    .sort((a, b) => a.time - b.time)
    .sort((a, b) => b.answers - a.answers);
  const position = ratingList.indexOf(item) + 1;
  return Math.round(((ratingList.length - position) / ratingList.length) * 100);
};
