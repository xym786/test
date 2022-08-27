describe('test baidu', () => {
  it('open baidu', () => {
    cy.visit('https://www.baidu.com');
    cy.url().should('include', 'baidu');
    cy.contains('新闻');
  });

  it('suggestions with keyword "cypress"', () => {
    cy.visit('https://www.baidu.com');
    cy.get('input[name=wd]').type('cypress');
    cy.get('.bdsug-overflow').then((items) => {
      items.each((index, item) => {
        console.log('🚀 ~ items.each ~ item', item);
        expect(item.innerText).contains('cypress');
        expect(item.innerText).toContain('cypress');
      });
      items[2].click();
    });
  });

  it('search "cypress" with baidu', () => {
    cy.visit('https://www.baidu.com');
    // cy.get('input[name=wd]').type('cypress');
    // cy.contains('百度一下').click();
    cy.get('input[name=wd]').type('cypress{enter}');
    cy.url().should('include', 'wd=cypress');
  });
});
