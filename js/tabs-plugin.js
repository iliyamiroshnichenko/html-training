class Tabs {
  constructor({ rootSelector, activeControlClass = "active" }) {
    this._refs = this._getRefs(rootSelector);
    this._activeControlClass = activeControlClass;
    this._bindEvents();
  }

  _getRefs(root) {
    const refs = {};
    refs.controls = document.querySelector(`${root} [data-controls]`);
    refs.panes = document.querySelector(`${root} [data-panes]`);
    return refs;
  }

  _bindEvents() {
    this._refs.controls.addEventListener("click", this._onControlsClick);
  }

  _onControlsClick(event) {
    event.preventDefault();
    if (event.target.nodeName !== "A") return;
    const currentActiveControlItem = refs.controls.querySelector(
      `.${this._activeControlClass}`
    );
  }
}

const tabs1 = new Tabs({
  rootSelector: "#tabs-1",
  activeControlClass: "controls__item--active",
});
// const tabs2 = new Tabs({
//   rootSelector: "#tabs-2",
// });
