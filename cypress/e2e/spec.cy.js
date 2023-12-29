describe('My First Test', () => {
  it('Visits the app root url', () => {
    cy.visit('/').get('.i1').type('123').get('.operator').select('+').get('.i2').type('321').get('.resultBtn').trigger('click')
    cy.get('.resultCalc').should((elem) => {
      expect(elem.text()).to.equal('444.00');
    })
    cy.get('.resultCalc').should('have.css', 'color', 'rgb(0, 128, 0)')
  });

  it('Проверка ввода 0', () => {
    cy.visit('/').get('.operator').select('/').get('.i2').type('0')

    cy.get('.i2').should('have.value', '')
  });

  it('Проверка ввода G в шестнадцатеричной системе', () => {
    cy.visit('/').get('.radix').select('16').get('.i1').type('G')

    cy.get('.i2').should('have.value', '')
  });

  it('Проверка ввода G в шестнадцатеричной системе', () => {
    cy.visit('/').get('.radix').select('16').get('.i1').type('G')

    cy.get('.i2').should('have.value', '')
  });

  it('Проверка ввода только цифр в инпуты', () => {
    cy.visit('/').get('.i1').type('G')

    cy.get('.i2').should('have.value', '')
  });
})