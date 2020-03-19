describe('Google Search', function() {
    it('Search about Warren Buffet', function() {
      cy.visit('https://www.google.com/?hl=en')        // direct to site
      cy.get('.gLFyf.gsfi').type('Warren Buffett')                       // input elon musk
      cy.get('.gLFyf.gsfi').type('{enter}')                       // input elon musk
      // cy.get('.FPdoLc.tfB0Bf .gNO89b').click()   // click button dropdown bahasa
      cy.url()                              
      .should('include', '=Warren+Buffett')
      cy.get('[title="Search"]').should('have.value', 'Warren Buffett')    
      .get('.bkWMgd:nth-child(2) .LC20lb.DKV0Md').contains('Warren Buffett')                            
    })
  })
