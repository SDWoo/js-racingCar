import InputForms from './InputForms.js';
import RacingResult from './RacingResult.js';
import WinnerContainer from './WinnerContainer.js';
import Component from '../lib/core/Component.js';
import { $ } from '../lib/utils/dom.js';

export default class App extends Component {
  cars;
  raceCounts;
  winners;

  constructor($target, props) {
    super($target, props);
    this.reset();
  }

  initState() {
    this.cars = [];
    this.raceTimes = 0;
    this.winners = [];
  }

  setCar = newCar => {
    this.cars = newCar;
  };

  setRacingCount = racingCount => {
    this.raceCounts = racingCount;
  };

  setWinners = () => {
    this.winners = [
      ...this.cars
        .filter(car => {
          return car.raceCount === this.raceCounts;
        })
        .map(winner => {
          return winner.name;
        }),
    ];
  };

  mountTemplate = () => {
    this.$target.innerHTML = `
    <h1 class="title">🏎️ 자동차 경주 게임🏁</h1>
      <section class="forms">
        <form class="car-name-form">
        </form>
        <form class="race-count-form hidden">
        </form>
      </section>
      <section class="racing-result"></section>
      <section class="winner-container"></section>
    `;
  };

  mountChildTemplate = () => {
    new InputForms($('.forms'), {
      setCar: this.setCar,
      setRacingCount: this.setRacingCount,
      mountRacingResult: this.mountRacingResult,
      race: this.race,
    });
  };

  mountRacingResult = () => {
    new RacingResult($('.racing-result'), {
      cars: this.cars,
    });
  };

  mountWinnerContainer = () => {
    new WinnerContainer($('.winner-container'), {
      winners: this.winners,
      reset: this.reset,
    });
  };

  reset = () => {
    this.initState();
    this.render();
  };

  race = () => {
    this.cars.forEach(car => {
      for (let i = 0; i < this.raceCounts; i++) {
        car.handleCar();
      }
    });
    this.setWinners();
    this.mountWinnerContainer();
  };
}
