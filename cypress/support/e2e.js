import 'allure-cypress';
// Importação dos comandos organizados por pasta (conforme seu padrão)
import './commands/api_commands/productCommands'; 
import './commands/pdpCommands';


// Impede que o teste falhe por erros internos do site da Fast Shop
Cypress.on('uncaught:exception', () => false);

// Oculta overlays ou modais chatos antes do carregamento (como o de cookies)
Cypress.on('window:before:load', (win) => {
  cy.hideOverlays(win); 
});

before(() => {
  // 1. Carrega a fixture de endereços
  cy.fixture('addressData.json').then((addressData) => {

    cy.setFastShopProducts({
      query: 'iphone', 
      zipCode: addressData[0].zipCode, 
    });
  });
});