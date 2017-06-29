/**
 * Created by wakedafuckup on 28.06.17.
 */

export default new class defaultAdapter {
  preprocess(data) {
    return data;
  }

  toServer(data) {
    return {
      time: data.time,
      answers: data.correctAnswers
    };
  }
}();
