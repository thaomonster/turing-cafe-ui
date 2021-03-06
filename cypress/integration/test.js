describe('App', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  })

  it('Should have a title', () => {
    cy.get('h1').should('contain', 'Turing Cafe Reservation');
  })

  it('Should have a form section with 4 inputs', () => {
    cy.get('form')
      .get('input')
      .should('have.length', 4)
      .and('be.visible')
  })

  it('Should contain reservations', () => {
    cy.get('.card').should('have.length', 9);
  })

  it('Should have a name, date, time and number of guest on reservation card', () => {
    cy.get('.card').each(card => {
      cy.get(card)
        .find('h2')
        .and('be.visible')
        .get('p')
        .and('be.visible')
    })
  })

  it('Should test user flow for making a reservation', () => {
    cy.get("input[name='name']")
      .type('Turtle')
      .get("input[name='date']")
      .type('2021-09-02')
      .get("input[name='time']")
      .type('17:30')
      .get("input[name='number']")
      .type('8')
      .get('button')
      .click()
      .get('.card').should('have.length', 10)
  })
})