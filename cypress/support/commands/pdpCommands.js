Cypress.Commands.add('visitProductDetailPage', (productLink) => {
  cy.visit(productLink);
  cy.wait(5000);
});