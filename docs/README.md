# 🎯 기능 요구사항

1. 자동차와 횟수 정보 입력

   - [x] - 주어진 횟수 동안 n 대의 자동차는 전진 또는 멈출 수 있다.
   - [x] - 자동차에 이름을 부여할 수 있다. 전진하는 자동차를 출력할 때 자동차 이름을 같이 출력한다.
   - [x] - 자동차 이름은 쉼표(,)를 기준으로 구분하며 이름은 5자 이하만 가능하다.
     - 예외
     1. 쉼표로 구분되지 않은 이름이 6자 이상인 경우
     2. 쉼표로 구분된 이름이 공백이거나 아예 공백인 경우
   - [x] - 사용자는 몇 번의 이동을 할 것인지를 입력할 수 있어야 한다.
     - 예외
     1. 1번 이하의 이동을 입력한 경우

2. 레이싱 게임 진행
   - [x] - 전진하는 조건은 0에서 9 사이에서 무작위 값을 구한 후 무작위 값이 4 이상일 경우이다. 3이하이면 멈춘다.

- [x] - 자동차 경주 게임을 완료한 후 누가 우승했는지를 알려준다. 우승자는 한 명 이상일 수 있다.
- [x] - 우승자가 여러 명일 경우 쉼표(,)를 이용하여 구분한다.
- [x] - 사용자가 잘못된 입력 값을 작성한 경우 alert을 이용해 메시지를 보여주고, 다시 입력할 수 있게 한다.

# cypress 테스트 사항

1. 화면 렌더링 테스트

- 자동차 이름이 입력되면. 횟수를 입력하는 창이 뜬다.
- 횟수 정보 입력하면 우승자 뜨는 것도 테스트
- 다시 고르기 버튼을 클릭하면 자동차 이름 입력 창만 뜬다.

2. 자동차 이름, 레이싱 횟수 입력 예외 테스트

- 자동차 이름이 5글자 이상이면 alert로 메시지를 띄워준다.
- 자동차 이름이 공백인 경우 alert로 메시지를 띄워준다.
- 횟수 정보에 0 이하의 이동을 입력한 경우

3. 결과 출력 및 버튼 테스트

- 자동차 이름을 입력한 순서대로 자동차들이 생성된다.
- result의 화살표 바의 개수가 레이싱 횟수로 입력받은 값보다 작거나 같다.
- 화살표 바의 개수가 같으면 우승자에 이름이 뜬다.
