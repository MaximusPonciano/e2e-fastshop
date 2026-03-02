describe('Accessing the product page', () => {

    it('Validate Product Detail Page', () => {
        cy.visitProductDetailPage(Cypress.env('fast-prd-url'));
    });
});

