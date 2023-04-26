describe('Counter App', () => {
    it('should increment count when + button is clicked', () => {
      cy.visit('http://localhost:3000/');
      cy.get('p').contains('0');
      cy.get('button').contains('+').click();
      cy.get('p').contains('1');
    });
  
    it('should decrement count when - button is clicked', () => {
      cy.visit('http://localhost:3000/');
      cy.get('p').contains('0');
      cy.get('button').contains('-').click();
      cy.get('p').contains('-1');
    });
  });
  