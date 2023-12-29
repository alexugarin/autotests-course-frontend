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