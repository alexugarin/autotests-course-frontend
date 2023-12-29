import { When, Then } from "@badeball/cypress-cucumber-preprocessor";

When("I visit main", () => {
  cy.visit("/");
});

Then("I should see a input", () => {
  cy.get(".i1").should(
    "have.attr",
    "placeholder",
    "Введите число"
  );
});

Then("I input value and click on button", () => {
  cy.get('.i1').type('123').get('.operator').select('+').get('.i2').type('321').get('.resultBtn').trigger('click')
});

Then("I see result and right color result text", () => {
  cy.get('.resultCalc').should((elem) => {
    expect(elem.text()).to.equal('444.00');
  })
  cy.get('.resultCalc').should('have.css', 'color', 'rgb(0, 128, 0)')
});

Then("I select operator div and input 0", () => {
  cy.visit('/').get('.operator').select('/').get('.i2').type('0')

  cy.get('.i2').should('have.value', '')
});

Then("I select radix 16 and input G", () => {
  cy.visit('/').get('.radix').select('16').get('.i1').type('G')

  cy.get('.i2').should('have.value', '')
});

Then("I select radix 8 and input 9", () => {
  cy.visit('/').get('.radix').select('8').get('.i1').type('9')

  cy.get('.i2').should('have.value', '')
});

Then("I input G in 10 radix", () => {
  cy.visit('/').get('.i1').type('G')

  cy.get('.i2').should('have.value', '')
});