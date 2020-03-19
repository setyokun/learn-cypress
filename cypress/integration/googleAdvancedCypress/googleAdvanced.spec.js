describe('Google advanced Search', function() {
    it('Search about Elon Musk', function() {
      cy.viewport('iphone-xr','landscape')
      cy.visit('https://www.google.com/advanced_search?hl=en')        // direct to site
      cy.get('[name="as_q"]').type('Elon Musk')                       // input elon musk
      cy.get('#lr_button').click()                                    // click button dropdown bahasa
      cy.get('.goog-menuitem[value="lang_it"]').click()               // click pilihan bahasa
      cy.get('[id="as_qdr_button"]').click()                          // click button dropdown time
      cy.get('#as_qdr_menu [value="w"]').click()                      // click pilihan time
      cy.get('[type="submit"]').click()                               // click submit 
      cy.url()                              
      .should('include', 'as_q=Elon+Musk')                            // validasi url : elon musk 
      .should('include', 'lr=lang_it')                                // validasi url : bahasa italia
      .should('include', 'as_qdr=w')                                  // validasi url : past week 
      cy.get('[title="Search"]')
      .should('have.value', 'Elon Musk')                              // validasi content : elon musk
      .get('[aria-label="Search Italian pages"]')                     
      .contains('Search Italian pages')                               // validasi content : bahasa italia
      .get('[aria-label="Past week"]')
      .contains('Past week')                                          // validasi content : past week
    })
  })
