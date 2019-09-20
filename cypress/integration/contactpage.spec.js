/// <reference types="Cypress" />
beforeEach(function() {
    cy.visit("http://localhost/digitalresume/contactform/index.html")
})

    it('inputs information in form', () =>{
        cy.get('#name').type('Dan'),
        cy.get('#mail').type('danbfeldman@gmail.com'),
        cy.get('#msg').type('testcypress'),
        cy.get('.submit-button')/*.click()*/
    })
    it('visits the media page', () =>{
        cy.get(':nth-child(4) > a').click()
        cy.url().should('include', '\media')
    })
    it('visits the work history page', () => {
        cy.get('li').contains('Work History').click(),
        cy.url().should('include', '/workhistory')
    })