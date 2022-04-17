/// <reference types="Cypress" />
//npx cypress open
//https://docs.cypress.io/guides/references/configuration#cypress-json

import {HomePage} from "./page-objects/page";

const userEmail = "goofirstTest@gmail.com";
const userPassword = "ybsatjV5X38MEgN";
const userEmailWrong = "goo22firstTest@gmail.com";
const userPasswordWrong = "ybsatjV5X38MEg";
const alertNoAccount = "Account with given email isn't registered yet"

describe('test suit Login by email', () => {
    const page = new Page();

    beforeEach(() => {
        page.navigate();
        cy.get('.bGutLj').click(); //open modal
    })

    it('layout of Log in modal', () => {
        cy.get('.ebhjEC > span').should('have.text', 'Log in');
        cy.get('.Footer__Heading-sc-4wnvxq-2 > span').should('have.text', 'Login via wallet');
        cy.get('.Footer__MetaMaskButton-sc-4wnvxq-1'); //button METAMASK
        cy.get('.Footer__MetaMaskButton-sc-4wnvxq-1 > .mr-2 > svg'); //button METAMASK
        cy.get('.IdontHaveAnAccount__Base-dm4we9-0 > :nth-child(1)').should('have.text', "I don't have an account.");
        cy.get('.Wrapper__InputContainer-rr64xs-1 > .InputStyled-sc-1xf9t49-0 > input').type(userEmail);
        cy.get('form > .w-100').click(); //click continue
        cy.get('.Checkbox__Input-sc-17ym8cg-2').should('not.be.checked');// checkbox doesn't checked
        cy.get('.Checkbox__Input-sc-17ym8cg-2').click();
        cy.get('.Checkbox__Input-sc-17ym8cg-2').should('be.checked');
        cy.get('.align-items-center > .Button-kDSBcD > span').should('have.text', 'I forgot password');
        cy.get('.justify-content-end > .IconStyled-sc-1uivf0m-0 > svg').click(); // close modal

    })

    it("empty email field", () =>{
        cy.get('form > .w-100').click(); //click continue
        cy.get('.Wrapper__InputContainer-rr64xs-1 > .InputStyled-sc-1xf9t49-0 > input')
            .should('have.css', 'border', '1px solid rgb(252, 102, 85)');
        cy.get('#email .WarningMessage__Div-sc-1vuiik5-0 > div > span')
            .should('have.text', 'You cannot leave this field empty');
        cy.get('.justify-content-end > .IconStyled-sc-1uivf0m-0 > svg').click(); // close modal
    })

    it("empty password field", () =>{
        cy.get('.Wrapper__InputContainer-rr64xs-1 > .InputStyled-sc-1xf9t49-0 > input').type(userEmail);
        cy.get('form > .w-100').click(); //click continue
        cy.get('form > .w-100').click(); //click continue
        cy.get('.WarningMessage__Div-sc-1vuiik5-0 > div > span')
            .should('have.text', 'You cannot leave this field empty');
        cy.get('.justify-content-end > .IconStyled-sc-1uivf0m-0 > svg').click(); // close modal
    })

    it('Login/logout by email is success', () => {
        cy.get('.Wrapper__InputContainer-rr64xs-1 > .InputStyled-sc-1xf9t49-0 > input').type(userEmail);
        cy.get('.w-100.Button-kDSBcD.knCmMg').click();
        cy.get('#password > :nth-child(2) > .Wrapper__InputContainer-rr64xs-1 > .InputStyled-sc-1xf9t49-0 > input').type(userPassword);
        cy.get('form > .w-100').click();
        cy.get('#profile_dropdown_id', {timeout: 12000});
        cy.get('#profile_dropdown_id > :nth-child(1) > .d-flex').click();
        cy.get(':nth-child(6) > .dropdown-menu > nav > :nth-child(2)').click();
        cy.get('.bGutLj > span').should('have.text', 'Log in');
    })

    it('Wrong email', () => {
        cy.get('.Wrapper__InputContainer-rr64xs-1 > .InputStyled-sc-1xf9t49-0 > input').type(userEmailWrong);
        cy.get('.w-100.Button-kDSBcD.knCmMg').click();
        cy.get('#password > :nth-child(2) > .Wrapper__InputContainer-rr64xs-1 > .InputStyled-sc-1xf9t49-0 > input').type(userPassword);
        cy.get('form > .w-100').click();
        cy.get('.Toast-y7p5aj-0');
        cy.get('.flex-grow-1').should('have.text', alertNoAccount);

    })

    it('Wrong password', () => {
        cy.get('.Wrapper__InputContainer-rr64xs-1 > .InputStyled-sc-1xf9t49-0 > input').type(userEmail);
        cy.get('.w-100.Button-kDSBcD.knCmMg').click();
        cy.get('#password > :nth-child(2) > .Wrapper__InputContainer-rr64xs-1 > .InputStyled-sc-1xf9t49-0 > input').type(userPasswordWrong);
        cy.get('form > .w-100').click();
        cy.get('.Toast-y7p5aj-0');
        cy.get('.flex-grow-1').should('have.text', "Wrong password");

    })

    it('Close alert. Wrong email and password', () => {
        cy.get('.Wrapper__InputContainer-rr64xs-1 > .InputStyled-sc-1xf9t49-0 > input').type(userEmailWrong);
        cy.get('.w-100.Button-kDSBcD.knCmMg').click();
        cy.get('#password > :nth-child(2) > .Wrapper__InputContainer-rr64xs-1 > .InputStyled-sc-1xf9t49-0 > input').type(userPasswordWrong);
        cy.get('form > .w-100').click();
        cy.get('.Toast-y7p5aj-0');
        cy.get('.flex-grow-1').should('have.text', alertNoAccount);
        cy.get('.Toast-y7p5aj-0 > .mr-3').click();
    })

})
