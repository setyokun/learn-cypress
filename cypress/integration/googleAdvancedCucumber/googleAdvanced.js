// import { Given } from "cypress-cucumber-preprocessor/steps";

Given('I open Google Advanced Page', () => {
  cy.visit('https://www.google.com/advanced_search?hl=en')            //open site
})

When('I search {string}', (title) => {
    cy.get('[name="as_q"]').type(title)                               //type elon musk to advanced search
    cy.get('#lr_button').click()                                      //click button
    cy.get('.goog-menuitem[value="lang_it"]').click()                 //click dropdown language
    cy.get('[id="as_qdr_button"]').click()                            //choose language
    cy.get('#as_qdr_menu [value="w"]').click()                        //click dropdown time
    cy.get('[type="submit"]').click()                                 //choose time
  })

Then('I can see result about Elon Musk', () => {
  cy.url()
  .should('include', 'as_q=Elon+Musk')                                //verify url include - elon musk
  .should('include', 'lr=lang_it')                                    //verify url include - language
  .should('include', 'as_qdr=w')                                      //verify url include - time  
  cy.get('[title="Search"]').should('have.value', 'Elon Musk')        //verify content - elon musk
  .get('[aria-label="Search Italian pages"]').contains('Search Italian pages')  //verify content - language 
  .get('[aria-label="Past week"]').contains('Past week')              //verify content - time
})

