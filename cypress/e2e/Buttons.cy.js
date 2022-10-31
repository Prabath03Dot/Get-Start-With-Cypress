describe('Buttons', () => {
  //Navigate the home page
  before('Navigate to Home page',() => {
    cy.visit('https://demoqa.com')
  } )

  //Click on Elements section
  it('Click on Elements', () => {
    cy.get(':nth-child(1) > :nth-child(1) > .card-body > h5').click()
  });

  context('Buttons', () => {

    it('Click on Buttons', () => {
      cy.get(':nth-child(1) > .element-list > .menu-list > #item-4').click()
    })

    it('Click on DoubleClick', ()=> {
      cy.get('#doubleClickBtn').dblclick()
    }) 
    
    it('Click on Right Click', ()=> {
      cy.get('#rightClickBtn').rightclick()
    })  

  });
})