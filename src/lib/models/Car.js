export default class Car {
  #name;
  #raceCount;
  constructor(name) {
    this.#name = name;
    this.#raceCount = 0;
  }

  handleCar() {
    this.go(Math.floor(Math.random() * 10));
  }

  go(value) {
    if (value >= 4) {
      this.#raceCount++;
    }
  }

  get name() {
    return this.#name;
  }

  get raceCount() {
    return this.#raceCount;
  }
}
