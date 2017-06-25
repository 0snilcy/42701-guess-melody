/**
 * Created by wakedafuckup on 25.06.17.
 */

export default {
  encode(obj) {
    return encodeURIComponent(JSON.stringify(obj));
  },
  decode(str) {
    return JSON.parse(decodeURIComponent(str));
  },
};
