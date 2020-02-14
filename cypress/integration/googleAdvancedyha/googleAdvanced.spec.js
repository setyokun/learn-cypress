describe('Google advanced Search', function() {
    it('Search about Elon Musk', function() {
      cy.visit('https://www.google.com/advanced_search?hl=en')
      cy.get('[name="as_q"]').type('Elon Musk')
      cy.get('#lr_button').click()
      cy.get('.goog-menuitem[value="lang_it"]').click()
      cy.get('[id="as_qdr_button"]').click()
      cy.get('#as_qdr_menu [value="w"]').click()
      cy.get('[type="submit"]').click()
      cy.url()
      .should('include', 'as_q=Elon+Musk')
      .should('include', 'lr=lang_it')
      .should('include', 'as_qdr=w')
      cy.get('[title="Search"]')
      .should('have.value', 'Elon Musk')    
      .get('[aria-label="Search Italian pages"]')
      .contains('Search Italian pages')
      .get('[aria-label="Past week"]')
      .contains('Past week')
    })
  })