describe('WebTables', () => {
  //Navigate the home page
  before('Navigate to Home page',() => {
    cy.visit('https://demoqa.com')
  } )

  //Click on Elements section
  it('Click on Elements', () => {
    cy.get(':nth-child(1) > :nth-child(1) > .card-body > h5').click()
  });
  
  context('Web_Tables', () => {

    it('Click on web Tables', () => {
      cy.get(':nth-child(1) > .element-list > .menu-list > #item-3').click()
    })

    it('Click on add web tables', ()=> {
      cy.get('#addNewRecordButton').click()
    })    
    
    it('Send Text on fields', ()=> {
      cy.get('#firstName').type('Hello')
      cy.get("#lastName").type('Moto')
      cy.get('#userEmail').type('hello@gmail.com')
      cy.get('#age').type(25)
      cy.get('#salary').type(20000)
      cy.get('#department').type('QA')
      
    })

    it('Click on Submit', () => {
      cy.get('#submit').click()
    });
  });

})
