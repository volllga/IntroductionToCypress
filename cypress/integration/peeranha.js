/// <reference types="Cypress" />
//npx cypress open
//https://docs.cypress.io/guides/references/configuration#cypress-json

const userEmail = "goofirstTest@gmail.com";
const userPassword = "ybsatjV5X38MEgN";



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

it("empty email field", () =>{
    cy.visit("/");
    cy.get('.bGutLj').click(); //open modal
    cy.get('form > .w-100').click(); //click continue
    cy.get('.WarningMessage__Div-sc-1vuiik5-0 > div > span')
        .should('have.text', 'You cannot leave this field empty');
    cy.get('.justify-content-end > .IconStyled-sc-1uivf0m-0 > svg').click(); // close modal
})

it('Login/logout by email is success', () => {
    cy.visit("/");
    cy.get('.bGutLj').click();
    cy.get('.Wrapper__InputContainer-rr64xs-1 > .InputStyled-sc-1xf9t49-0 > input').type(userEmail);
    cy.get('.w-100.Button-kDSBcD.knCmMg').click();
    cy.get('#password > :nth-child(2) > .Wrapper__InputContainer-rr64xs-1 > .InputStyled-sc-1xf9t49-0 > input').type(userPassword);
    cy.get('form > .w-100').click();
    cy.get('#profile_dropdown_id', {timeout: 5000});
    cy.get('#profile_dropdown_id > :nth-child(1) > .d-flex').click();
    cy.get(':nth-child(6) > .dropdown-menu > nav > :nth-child(2)').click();
    cy.get('.bGutLj > span').should('have.text', 'Log in');
})

// it('go to the FAQ page from side menu', () => {
//     clickMenuItem('[name="faq"]',
//         '.f1znse-0-Span-juOiwt > .d-none > span',
//         "Frequently asked questions");

// function clickMenuItem(itemMenu, itemPage, value) {
//     cy.get(itemMenu).click();
//     cy.get(itemPage).contains(value);
// }
