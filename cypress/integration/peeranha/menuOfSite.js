import {Page} from "./page-objects/page";

const userEmail = "goofirstTest@gmail.com";
const userPassword = "ybsatjV5X38MEgN";
// "goosecondTest@gmail.com" "VunPqkyZh99m7TH"



describe('Menu of site',() => {
    const page = new Page();

    before(() => {
        page.navigate();
        cy.get('.bGutLj').click(); //open modal
        cy.get('.Wrapper__InputContainer-rr64xs-1 > .InputStyled-sc-1xf9t49-0 > input').type(userEmail);
        cy.get('.w-100.Button-kDSBcD.knCmMg').click();
        cy.get('#password > :nth-child(2) > .Wrapper__InputContainer-rr64xs-1 > .InputStyled-sc-1xf9t49-0 > input')
            .type(userPassword);
        cy.get('form > .w-100').click();
        cy.get('.MainLinks__Box-g9m2tw-0', {timeout:7000});
    })

    it('go to the FAQ page from side menu', () => {
        page.clickItem('[name="faq"]', '/faq');
        page.textOfItem('.f1znse-0-Span-juOiwt > .d-none > span', 'Frequently asked questions');
    })

    it('Go to the Tags page', () => {
        page.clickItem('[name="tags"]', '/tags');
        page.textOfItem('.f1znse-0-Span-juOiwt > span', "Tags");
    })

    it('Go to the Communities page', () => {
        page.clickItem('[name="communities"]', '/communities');
        page.textOfItem('.f1znse-0-Span-juOiwt > :nth-child(2) > :nth-child(1)', "Communities");
    })

    it('Go to the Tutorials page', () => {
        page.clickItem('[name="tutorials"]', '/tutorials');
        page.textOfItem('.f1znse-0-Span-juOiwt > :nth-child(2)', "Tutorials");
    })

    it('go to the Expert Q&A page from side menu', () => {
        page.clickItem('[name="experts"]', '/experts');
        page.textOfItem('.f1znse-0-Span-juOiwt > :nth-child(2)',
            "Expert Q&A");
    })
})