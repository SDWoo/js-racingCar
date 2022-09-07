import Component from '../lib/core/Component.js';

export default class RacingResult extends Component {
  constructor($target, props) {
    super($target, props);
    this.render();
  }

  render() {
    this.$target.innerHTML = `
    ${this.props.cars
      .map(
        car => `
      <div class="car-progress">
          <div class="car-name-label">${car.name}</div>
          ${`<div class="progress">⬇️️</div>`.repeat(car.raceCount)}
        </div>
    `,
      )
      .join('')}`;
  }
}
