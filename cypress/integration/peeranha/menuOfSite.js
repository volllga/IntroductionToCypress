const userEmail = "goofirstTest@gmail.com";
const userPassword = "ybsatjV5X38MEgN";

describe('Menu of site',() => {
    before(() => {
        cy.visit("/");
        cy.get('.bGutLj').click(); //open modal
        cy.get('.Wrapper__InputContainer-rr64xs-1 > .InputStyled-sc-1xf9t49-0 > input').type(userEmail);
        cy.get('.w-100.Button-kDSBcD.knCmMg').click();
        cy.get('#password > :nth-child(2) > .Wrapper__InputContainer-rr64xs-1 > .InputStyled-sc-1xf9t49-0 > input').type(userPassword);
        cy.get('form > .w-100').click();
    })

    it('My feed is active', () => {
        cy.get('a.sc-1lkwpuz-1-A-bJefwH[name="tags"]').click();
        cy.get('.f1znse-0-Span-juOiwt > span').contains("Tags");

    })
})