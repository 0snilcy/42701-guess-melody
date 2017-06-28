/**
 * Created by wakedafuckup on 28.06.17.
 */

import defaultAdapter from './adapter';

export default class BaseModel {
  get urlRead() {
    throw new Error(`Abstract method. Define the url for model.`);
  }

  get urlWrite() {
    throw new Error(`Abstract method. Define the url for model.`);
  }

  load(adapter = defaultAdapter) {
    return fetch(this.urlRead)
      .then((resp) => resp.json())
      .then(adapter.preprocess);
  }

  send(data, adapter = defaultAdapter) {
    const settings = {
      body: adapter.toServer(data),
      headers: {
        'Content-Type': `application/json`
      },
      method: `POST`
    };

    return fetch(this.urlWrite, settings);
  }
}
