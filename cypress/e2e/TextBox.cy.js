describe('TextBox', () => {

  //Navigate the home page
  before('Navigate to Home page',() => {
    cy.visit('https://demoqa.com')
  } )

  //Get the title of the page
  it('title of the page', () => {
    cy.log('title' , cy.title())
  });

  //Click on Elements section
  it('Click on Elements', () => {
    cy.get(':nth-child(1) > :nth-child(1) > .card-body > h5').click()
  });
  
  //Click on textBox menu
  it('Navigate to textBox', () => {
    cy.get(':nth-child(1) > .element-list > .menu-list > #item-0 > .text').click()
  }) 
  
  //Wait 2000ms
  it('wait 2 Seconds', () => {
    cy.wait(2000)
  });
  
  //Send keywords to the forms
  it('Send Keywords to text box', () => {
    cy.get("#userName").type('Hello99')
    cy.get('#userEmail').type('hello@gmail.com')
    cy.get('#currentAddress').type('north str')
    cy.get('#permanentAddress').type('north str')
  })

  //Submit
  it('submit text box', () => {
    cy.get('#submit').click()
  } )

  //Make an assertion contains
  it('Verfiy the userName', () => {
    cy.get('#name').contains('Hello99')
  } )  
  
  //Make an assertion should
  it('Verfiy the userName', () => {
    cy.get('#email').should('have.text' , 'Email:hello@gmail.com')
  } )

})