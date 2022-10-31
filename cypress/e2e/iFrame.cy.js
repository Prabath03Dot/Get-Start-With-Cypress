describe('Test 5 iframe', () => {
  before('Launch browser and navigate',() => {
    cy.visit('https://demoqa.com')
  } )

  it('click on alert, frames and windows', () => {
    cy.xpath("//h5[normalize-space()='Alerts, Frame & Windows']").click()
  });

  it('click on frames', () => {
    cy.xpath("//span[normalize-space()='Frames']").click()
  });

  it('check iframe loaded to DOM', () => {
    cy.frameLoaded('#frame1')
  });

  it('find Iframe innner text', () => {
    cy.iframe('#frame1').should('have.text', 'This is a sample page')
  });

})