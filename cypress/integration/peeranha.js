/// <reference types="Cypress" />
//npx cypress open
//https://docs.cypress.io/guides/references/configuration#cypress-json

const userEmail = "goofirstTest@gmail.com";
const userPassword = "ybsatjV5X38MEgN"

it('should navigate to the testpeeranha.io', () => {
    cy.visit("/");
    cy.get('[name="faq"]').click();
    cy.get('[name="tags"]');
});

it('go to the FAQ page from side menu', () => {
    cy.visit("/");
    cy.get('[name="faq"]').click()
    cy.get('.f1znse-0-Span-juOiwt > .d-none > span').contains("Frequently asked questions");
});

it('go to the Tags page from side menu', () => {
    cy.visit("/");
    cy.get('[name="tags"]').click();
    cy.get('.f1znse-0-Span-juOiwt > span').contains("Tags");
})

it('Log in success', () => {
    cy.visit("/");
    cy.get('.bGutLj').click();
    cy.get('.Wrapper__InputContainer-rr64xs-1 > .InputStyled-sc-1xf9t49-0 > input').type(userEmail);
    cy.get('.w-100.Button-kDSBcD.knCmMg').click();
    cy.get('#password > :nth-child(2) > .Wrapper__InputContainer-rr64xs-1 > .InputStyled-sc-1xf9t49-0 > input').type(userPassword);
    cy.get('form > .w-100').click();
    cy.get('#profile_dropdown_id', {timeout: 5000});
})