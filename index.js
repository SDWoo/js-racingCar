/**
 * ## 🎯 기능 요구사항

1. 자동차와 횟수 정보 입력

   - [o] - 주어진 횟수 동안 n 대의 자동차는 전진 또는 멈출 수 있다.
   - [o] - 자동차에 이름을 부여할 수 있다. 전진하는 자동차를 출력할 때 자동차 이름을 같이 출력한다.
   - [o] - 자동차 이름은 쉼표(,)를 기준으로 구분하며 이름은 5자 이하만 가능하다.
     - 예외
     1. 쉼표로 구분되지 않은 이름이 6자 이상인 경우
     2. 쉼표로 구분된 이름이 공백이거나 아예 공백인 경우
   - [o] - 사용자는 몇 번의 이동을 할 것인지를 입력할 수 있어야 한다.

2. 레이싱 게임 진행
   - [o] - 전진하는 조건은 0에서 9 사이에서 무작위 값을 구한 후 무작위 값이 4 이상일 경우이다. 3이하이면 멈춘다.
    => 횟수 입력을 하면, 자동차 이름출력, 무작위 값에 따른 각 자동차의 전진여부 출력
- [o] - 자동차 경주 게임을 완료한 후 누가 우승했는지를 알려준다. 우승자는 한 명 이상일 수 있다.
- [o] - 우승자가 여러 명일 경우 쉼표(,)를 이용하여 구분한다.
- [o] - 사용자가 잘못된 입력 값을 작성한 경우 alert을 이용해 메시지를 보여주고, 다시 입력할 수 있게 한다.

*/
const $ = selector => document.querySelector(selector);
const carNameForm = $('.car-name-form');
const carNameInput = $('.car-name-input');
const raceCountForm = $('.race-count-form');
const raceCountInput = $('.race-count-input');
const racingResult = $('.racing-result');
const winner = $('.winner');

const restartBtn = $('#restart-btn');

let cars = [];
let raceCount = 0;
let winners = [];

const validateCarName = carNameLength => {
  if (carNameLength > 5) {
    return '차 이름이 5글자가 넘습니다.';
  }

  if (carNameLength <= 0) {
    return '차 이름이 공백입니다.';
  }
};

const getRandom = () => {
  const randomNum = Math.floor(Math.random() * 9);
  return randomNum;
};

const setCars = () => {
  carNameInput.value.split(',').forEach(car => {
    const trimCarName = car.trim();
    if (!(0 < trimCarName.length && trimCarName.length <= 5)) {
      alert(validateCarName(trimCarName.length));
      carNameInput.value = '';
      return;
    }

    cars.push(trimCarName);
    carNameInput.value = '';
  });
};

const setRacingCount = () => {
  raceCount = Number(raceCountInput.value.replace(/[^0-9]/g, ''));
  if (raceCount === 0) {
    alert('1이상의 숫자를 입력하세요!');
    return;
  }
  raceCountInput.value = '';
};

const setCarNameToDom = carName => {
  const carProgress = document.createElement('div');
  carProgress.className = 'car-progress';
  carProgress.innerHTML = `
    <div class="car-name-label">${carName}</div>
    `;

  racingResult.appendChild(carProgress);
};

const resetGame = () => {
  cars = [];
  raceCount = 0;
  racingResult.innerHTML = ``;
  winner.innerHTML = '';
};

const setRacingCountToDom = () => {
  const carProgresses = [...racingResult.childNodes].filter(child => {
    return child.className === 'car-progress';
  });
  const progressDOM = '<div class="progress">⬇️️</div>';
  carProgresses.forEach(carProgress => {
    for (let i = 0; i < raceCount; i++) {
      if (getRandom() < 4) break;
      carProgress.insertAdjacentHTML('beforeend', progressDOM);
    }
  });
};

const showWinners = () => {
  const carProgresses = [...racingResult.childNodes].filter(child => {
    return child.className === 'car-progress';
  });
  carProgresses.forEach(carProgress => {
    const carName = [...carProgress.childNodes].find(child => {
      return child.className === 'car-name-label';
    }).innerText;

    const progressLength = [...carProgress.childNodes].filter(child => {
      return child.className === 'progress';
    }).length;

    console.log(progressLength, raceCount);

    if (progressLength === raceCount) {
      winners.push(carName);
      console.log('a');
    }
  });
  console.log(winners);
  winner.innerText = `🏆 최종 우승자: ${winners.join(',')}🏆`;
};

carNameForm.addEventListener('submit', e => {
  e.preventDefault();
  resetGame();
  setCars();
});

raceCountForm.addEventListener('submit', e => {
  e.preventDefault();
  setRacingCount();
  cars.forEach(car => setCarNameToDom(car));
  setRacingCountToDom();
  showWinners();
});

console.log(restartBtn);
restartBtn.addEventListener('click', () => {
  resetGame();
});
