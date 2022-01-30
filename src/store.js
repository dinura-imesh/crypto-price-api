class Store {
  static instance = new Store();
  _data = [];
  setData(data) {
    this._data = data;
  }

  getData() {
    return this._data;
  }
}

module.exports = Store;
