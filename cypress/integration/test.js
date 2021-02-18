describe('App', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  })

  it('should have a title', () => {
    cy.get('h1').should('contain', 'Turing Cafe Reservation')
  })

  
})