/**
 * Created by wakedafuckup on 17.06.17.
 */

export default (item, rating) => {
  const ratingList = rating.filter((el) => `time` in el && `answers` in el);

  ratingList.push(item);
  ratingList
    .sort((a, b) => a.time - b.time)
    .sort((a, b) => b.answers - a.answers);

  const position = ratingList.indexOf(item) + 1;
  return Math.round(((ratingList.length - position) / ratingList.length) * 100);
};
