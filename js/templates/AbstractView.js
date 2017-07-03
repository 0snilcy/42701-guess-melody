/**
 * Created by zuoa on 20.06.2017.
 */

export default class AbstractView {
  constructor() {}

  get template() {
    throw new Error(`You need to define a template`);
  }

  get element() {
    if (!this.markup) {
      this.markup = this.render(this.template);
      this.bind();
    }

    return this.markup;
  }

  render(string) {
    const container = document.createElement(`div`);
    container.innerHTML = string;
    return container.firstElementChild;
  }

  bind() {}
}
