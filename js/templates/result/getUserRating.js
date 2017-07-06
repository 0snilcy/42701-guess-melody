/**
 * Created by wakedafuckup on 17.06.17.
 */

export default (item, rating = []) => {
  const ratingList = rating.filter((el) => {
    return `time` in el && `answers` in el;
  });
  ratingList.push(item);

  if (ratingList.length > 1) {
    ratingList.sort((a, b) => {
      return b.answers - a.answers || a.time - b.time;
    });

    const position = ratingList.indexOf(item) + 1;
    return Math.round(((ratingList.length - position) / ratingList.length) * 100);
  } else {
    return null;
  }
};
