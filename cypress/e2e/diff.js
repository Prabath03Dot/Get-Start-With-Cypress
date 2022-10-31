// ---------------------------------------JavaScript-----------------------------------------

describe('Search Test Suite', function () {
  it('Search Test Case', function () {

    cy.visit("https://www.demoqa.com/")
        .then(() => {
            return cy.get(':nth-child(4) > :nth-child(1) > .avatar > svg')
        }).then(($element) => {
            return cy.click($element)
        }).then(() => {
            //Length Assertions
            cy.get(':nth-child(4) > .element-list > .menu-list > li').should('have.length',9);
        })    
  }) })

// ---------------------------------------Cypress--------------------------------------------

describe('Search Test Suite', function () {
  it('Search Items under Widgets Tab', function () {

  //Visit the Demo QA Website
  cy.visit("https://demoqa.com/");
  
 // Clicking on Widget Menu Item
 cy.get(':nth-child(4) > :nth-child(1) > .avatar > svg').click();

  //Verify number of items present on Widget Tab
  cy.get(':nth-child(4) > .element-list > .menu-list > li').should('have.length',9);
  })
})