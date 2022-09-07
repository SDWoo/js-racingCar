describe('자동차 경주 게임', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:8080/');
  });

  it('자동차 이름 입력 시, 레이싱 횟수 창이 보여진다.', () => {
    cy.get('.car-name-input').type('dong,woo,shin');
    cy.get('.car-name-btn').click();
    cy.get('.race-count-form').should('be.visible');
  });

  it('자동차 이름이 5글자 이상이면 alert로 메시지를 띄워준다.', () => {});

  // it('자동차 이름이 공백인 경우 alert로 메시지를 띄워준다.', () => {
  //   cy.get('')
  // });
});
