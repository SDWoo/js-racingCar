describe('자동차 경주 게임', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:8080/');
  });

  const testCarNameInput = value => {
    cy.get('.car-name-input').type(value);
    cy.get('.car-name-btn').click();
  };

  const testRacingCount = value => {
    cy.get('.race-count-input').type(value);
    cy.get('.race-count-btn').click();
  };

  it('자동차 이름 입력 시, 레이싱 횟수 창이 보여진다.', () => {
    testCarNameInput('dong,woo,shin');
    cy.get('.race-count-form').should('be.visible');
  });

  it('자동차 이름이 5글자 이상이면 alert로 메시지를 띄워준다.', () => {
    testCarNameInput('dooong, woo, shin');
    cy.on('window:alert', t => {
      expect(t).to.contains('차 이름이 5글자가 넘습니다.');
    });
  });

  it('자동차 이름이 공백인 경우 alert로 메시지를 띄워준다.', () => {
    testCarNameInput('a,b,,c');
    cy.on('window:alert', t => {
      expect(t).to.contains('차 이름이 공백입니다.');
    });
  });

  it('레이싱 횟수에 0이하의 수를 입력한 경우 alert로 메시지를 띄워준다.', () => {
    testCarNameInput('a,b,c,d');
    testRacingCount('0');
    cy.on('window:alert', t => {
      expect(t).to.contains('1회 이상의 횟수를 입력해주세요.');
    });
  });

  it('레이싱 횟수 입력 시, 게임 결과 창과 우승자 창이 보여진다.', () => {
    testCarNameInput('a,b,c,d');
    testRacingCount('1');
    cy.get('.car-progress').should('have.css', 'display', 'block');
    cy.get('.winner').should('have.css', 'display', 'block');
  });

  it('자동차 이름을 입력한 순서대로 자동차들이 생성된다.', () => {
    const cars = ['a', 'b', 'c', 'd'];
    testCarNameInput('a,b,c,d');
    testRacingCount('2');
    cy.get('.car-name-label').each((v, i) => {
      cy.get(v).should('have.text', cars[i]);
    });
  });
});
