/**
 * Created by wakedafuckup on 17.06.17.
 */

export default (list) => {
  let correct;
  let i = 0;
  do {
    correct = i;
  } while (!list[i++].correct);
  return correct;
}