describe('Comparar dois smartphones pela barra de pesquisa', () => {
  it('passes', () => {
    cy.visit('https://www.tudocelular.com/compare/');
    cy.get("input[id='sb1_text']").type("Apple iPhone 15 Pro Max");
    cy.get("div[id='autocomplete1']").get("li[id='phone8890']").click();
    cy.get("input[id='sb1_text']").type("Apple iPhone 14 Pro Max");
    cy.get("div[id='autocomplete1']").get("li[id='phone8095']").click();
    cy.get("div[id='comparabtn']").contains('a', 'Comparar >').click();
    cy.contains('li', 'Sistema Operacional').should('be.visible');  
  })
})
describe('Comparar dois smartphones selecionados na listagem de lançamento', () => {
  it('passes', () => {
    cy.visit('https://www.tudocelular.com/compare/');
    cy.get('a[title="aggiungere vivo V40 Pro al confronto"]').click();
    cy.get('a[title="aggiungere Poco M6 Plus al confronto"]').click();
    cy.get("div[id='comparabtn']").contains('a', 'Comparar >').click();
    cy.contains('li', 'Sistema Operacional').should('be.visible');  
  })
})


describe('Validar mensagem de que é necessario pelo menos 2 smartphones ', () => {
  it('passes', () => {
    cy.visit('https://www.tudocelular.com/compare/');
    cy.get('a[title="aggiungere Poco M6 Plus al confronto"]').click();
    cy.on('window:alert', (text) => {
      expect(text).to.equal('É necessário selecionar, ao menos, dois celulares.');
    });
    cy.get("div[id='comparabtn']").contains('a', 'Comparar >').click();
  })
})


describe('Validar ação de usar uma compração preselecionada com sucesso', () => {
  it('passes', () => {
    cy.visit('https://www.tudocelular.com/compare/');
    cy.get('a[title="Samsung Galaxy A55 com Samsung Galaxy A35"]').click();
    cy.contains('li', 'Sistema Operacional').should('be.visible');
  })
})


