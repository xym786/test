describe('big wheel activirty', () => {
  before(() => {
    cy.viewport('iphone-x');
  });
  it('big wheel page', () => {
    cy.visit('/big-wheel');
    cy.get('.pointer').click();
    cy.get('.plate')
      .should('has.attr', 'style')
      .should('contain', 'transform:rotate(5.625turn)');
    cy.on('windows:alert', (msg) => {
      expect(msg).toEqual('获得京豆');
    });
  });
});
