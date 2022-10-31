  describe('CheckBox', () => {
  //Navigate the home page
  before('Navigate to Home page',() => {
    cy.visit('https://demoqa.com')
  } )

  context('Check box context', () => {

    //Click on Elements section
    it('Click on Elements', () => {
      cy.get(':nth-child(1) > :nth-child(1) > .card-body > h5').click()
    });
    
    //Click on CheckBox
    it('Click_on_Check_box', () => {
      cy.get(':nth-child(1) > .element-list > .menu-list > #item-1').click()
    } )

    //Click on CheckBox expand
    it('Click_on_Check_box_Expand', () => {
      cy.get('.rct-option-expand-all > .rct-icon').click()
    } )

    //Click on CheckBox expand Commands
    it('Click_on_Check_box_Expand_Commands', () => {
      cy.get('#tree-node > :nth-child(2) > :nth-child(1) > :nth-child(2) > :nth-child(1) > ol > :nth-child(2) > .rct-text > label > .rct-title').click()
    } )

    //Click on CheckBox Collapse
    it('Click_on_Check_box_Collapse', () => {
      cy.get('.rct-option-collapse-all > .rct-icon').click()
    } )

    //Make an assertion
    it('Verify_selected_checkbox', () => {
      cy.get('.text-success').contains('commands')
    } )
  });


  });
  
