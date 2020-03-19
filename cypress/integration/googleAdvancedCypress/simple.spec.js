describe('My First Test', function() {
    it('Visits the Kitchen Sink', function() {
      cy.viewport('iphone-xr','landscape')
      cy.visit('https://example.cypress.io')
      cy.contains('type').click()
        // Should be on a new URL which includes '/commands/actions'
      cy.url().should('include', '/commands/actions')
       // Get an input, type into it and verify that the value has been updated
      cy.get('.action-email')
      .type('setyokun@email.com')
      .should('have.value', 'setyokun@email.com')    
    
    })
  })