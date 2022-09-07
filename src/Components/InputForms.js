import Component from '../lib/core/Component.js';
import { $, $$ } from '../lib/utils/dom.js';
import {
  MAX_CAR_NAME_LENGTH,
  MIN_CAR_NAME_LENGTH,
  LONG_CAR_NAME_ERROR_MESSAGE,
  SHORT_CAR_NAME_ERROR_MESSAGE,
  LESS_RACING_COUNT_ERROR_MESSAGE,
} from '../lib/constants/constants.js';
import Car from '../lib/models/Car.js';

export default class InputForms extends Component {
  constructor($target, props) {
    super($target, props);
    this.render();
  }

  initEventListener() {
    $('.car-name-form').addEventListener('submit', e => {
      e.preventDefault();
      this.handleSubmitCar();
    });
  }

  #isValidCarName = carNameLength => {
    if (carNameLength > MAX_CAR_NAME_LENGTH) {
      return LONG_CAR_NAME_ERROR_MESSAGE;
    }

    if (carNameLength <= MIN_CAR_NAME_LENGTH) {
      return SHORT_CAR_NAME_ERROR_MESSAGE;
    }
  };

  handleSubmitCar() {
    const carNameInput = $('.car-name-input');
    const carNames = carNameInput.value.split(',').map(car => car.trim());
    carNames.forEach(car => {
      if (
        !(MIN_CAR_NAME_LENGTH < car.length && car.length <= MAX_CAR_NAME_LENGTH)
      ) {
        alert(this.#isValidCarName(car.length));
        carNameInput.value = '';
        return;
      }
    });
    this.props.setCar(carNames.map(car => new Car(car)));
    carNameInput.value = '';
    $('.race-count-form').classList.remove('hidden');
    $('.race-count-input').focus();
  }

  render() {
    $$(this.$target, '.car-name-form').innerHTML = `
          <label for="car-name">
            5자 이하의 자동차 이름을 콤마로 구분하여 입력해주세요.
          </label>
          <div class="car-name">
            <input
              class="car-name-input"
              type="text"
              placeholder="east, west, south, north, all"
            />
            <button class="car-name-btn">확인</button>
          </div>`;
    $$(this.$target, '.race-count-form').innerHTML = `
          <label for="race-count">시도할 횟수를 입력해주세요</label>
          <div class="race-count">
            <input class="race-count-input" type="text" placeholder="10" />
            <button>확인</button>
          </div>
        `;
  }
}
