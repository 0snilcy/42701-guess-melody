/**
 * Created by wakedafuckup on 17.06.17.
 */

export default (list) => {
  return list.findIndex((item) => {
    return item.isCorrect;
  });
};
