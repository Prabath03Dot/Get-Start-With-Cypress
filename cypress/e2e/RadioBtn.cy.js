describe('Radio Button', () => {
  //Navigate the home page
  before('Navigate to Home page',() => {
    cy.visit('https://demoqa.com')
  } )

  //Click on Elements section
  it('Click on Elements', () => {
    cy.get(':nth-child(1) > :nth-child(1) > .card-body > h5').click()
  });

  it('Click on Radio Buttons', () => {
    cy.xpath("//span[normalize-space()='Radio Button']").click()
  })

  it('Click on Yes', ()=> {
    cy.xpath("//label[normalize-space()='Yes']").click()
  }) 
  
  it('Verify on yes', ()=> {
    cy.xpath("//p[@class='mt-3']").contains('Yes')
  })  

})