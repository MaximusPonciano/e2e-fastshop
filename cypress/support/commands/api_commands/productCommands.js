const getAvailableProductFast = (query, zipCode) =>
  cy.request(
    `https://site.fastshop.com.br/api/io/_v/api/intelligent-search/product_search/?query=${encodeURIComponent(query)}&count=5`
  )
  .then((response) => {
    // 1. Mapeia os produtos retornados pela API de busca
    const products = response.body?.products?.map((p) => 
      p.items?.[0] && p.link && {
        name: p.productName,
        sku: p.items[0].itemId,
        link: p.link,
        itemId: p.items[0].itemId,
      }
    ).filter(Boolean) || [];

    // 2. Função recursiva para testar disponibilidade um por um
    const testAvailability = (index) => {
        index >= products.length
            ? null
            :cy.request({
        method: 'POST',
        url: 'https://site.fastshop.com.br/api/checkout/pub/orderForms/simulation?sc=1',
        body: {
          items: [{ id: products[index].itemId, quantity: 1, seller: '1' }],
          country: 'BRA',
          postalCode: zipCode,
        },
    })
      .then((sim) => {
        // Verifica se o item está disponível e tem quantidade para o CEP informado
        const isAvailable = sim.body?.items?.[0]?.availability === 'available';
        const hasStock = sim.body?.items?.[0]?.quantity > 0;

        return isAvailable && hasStock 
          ? products[index] 
          : testAvailability(index + 1);
      });
    };

    return testAvailability(0);
  });

Cypress.Commands.add('setFastShopProducts', ({ query, zipCode }) => {
  return getAvailableProductFast(query, zipCode).then((p) => {
    if (!p) throw Error(`Nenhum produto disponível para: ${query}`);
    
    // Salva nas variáveis de ambiente do Cypress para uso no teste
    Cypress.env('fast-prd-url', p.link);
    Cypress.env('fast-prd-name', p.name);
    Cypress.env('fast-prd-sku', p.sku);
  });
});