describe('Fixurtes', () => {
  before('passes', () => {
    cy.visit('https://demoqa.com/')
  })

  it('Click on Forms', () => {
    cy.xpath("//h5[normalize-space()='Forms']").click()
  });

  it('click on selected form', () => {
    cy.xpath("//span[normalize-space()='Practice Form']").click()
  })  

  it( 'Send data throught fixtures' , () => {
    cy.fixture('example').then((data) => {
      cy.get('#firstName').type(data.firstName)
      cy.get('#lastName').type(data.lastName)
      cy.get('#userEmail').type(data.email)
      cy.get('#userNumber').type(data.phoneNumber)
    })
  })
  
})



