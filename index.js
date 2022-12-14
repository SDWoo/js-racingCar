/**
 * ## π― κΈ°λ₯ μκ΅¬μ¬ν­

1. μλμ°¨μ νμ μ λ³΄ μλ ₯

   - [o] - μ£Όμ΄μ§ νμ λμ n λμ μλμ°¨λ μ μ§ λλ λ©μΆ μ μλ€.
   - [o] - μλμ°¨μ μ΄λ¦μ λΆμ¬ν  μ μλ€. μ μ§νλ μλμ°¨λ₯Ό μΆλ ₯ν  λ μλμ°¨ μ΄λ¦μ κ°μ΄ μΆλ ₯νλ€.
   - [o] - μλμ°¨ μ΄λ¦μ μΌν(,)λ₯Ό κΈ°μ€μΌλ‘ κ΅¬λΆνλ©° μ΄λ¦μ 5μ μ΄νλ§ κ°λ₯νλ€.
     - μμΈ
     1. μΌνλ‘ κ΅¬λΆλμ§ μμ μ΄λ¦μ΄ 6μ μ΄μμΈ κ²½μ°
     2. μΌνλ‘ κ΅¬λΆλ μ΄λ¦μ΄ κ³΅λ°±μ΄κ±°λ μμ κ³΅λ°±μΈ κ²½μ°
   - [o] - μ¬μ©μλ λͺ λ²μ μ΄λμ ν  κ²μΈμ§λ₯Ό μλ ₯ν  μ μμ΄μΌ νλ€.

2. λ μ΄μ± κ²μ μ§ν
   - [o] - μ μ§νλ μ‘°κ±΄μ 0μμ 9 μ¬μ΄μμ λ¬΄μμ κ°μ κ΅¬ν ν λ¬΄μμ κ°μ΄ 4 μ΄μμΌ κ²½μ°μ΄λ€. 3μ΄νμ΄λ©΄ λ©μΆλ€.
    => νμ μλ ₯μ νλ©΄, μλμ°¨ μ΄λ¦μΆλ ₯, λ¬΄μμ κ°μ λ°λ₯Έ κ° μλμ°¨μ μ μ§μ¬λΆ μΆλ ₯
- [o] - μλμ°¨ κ²½μ£Ό κ²μμ μλ£ν ν λκ° μ°μΉνλμ§λ₯Ό μλ €μ€λ€. μ°μΉμλ ν λͺ μ΄μμΌ μ μλ€.
- [o] - μ°μΉμκ° μ¬λ¬ λͺμΌ κ²½μ° μΌν(,)λ₯Ό μ΄μ©νμ¬ κ΅¬λΆνλ€.
- [o] - μ¬μ©μκ° μλͺ»λ μλ ₯ κ°μ μμ±ν κ²½μ° alertμ μ΄μ©ν΄ λ©μμ§λ₯Ό λ³΄μ¬μ£Όκ³ , λ€μ μλ ₯ν  μ μκ² νλ€.

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
    return 'μ°¨ μ΄λ¦μ΄ 5κΈμκ° λμ΅λλ€.';
  }

  if (carNameLength <= 0) {
    return 'μ°¨ μ΄λ¦μ΄ κ³΅λ°±μλλ€.';
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
    alert('1μ΄μμ μ«μλ₯Ό μλ ₯νμΈμ!');
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
  const progressDOM = '<div class="progress">β¬οΈοΈ</div>';
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
  winner.innerText = `π μ΅μ’ μ°μΉμ: ${winners.join(',')}π`;
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
