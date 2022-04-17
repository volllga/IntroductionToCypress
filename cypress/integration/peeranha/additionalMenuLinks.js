import {Page} from "./page-objects/page";


describe('Additional Right Menu Links. viewport 1000, 771', () => {
    const homePage = new Page();

    beforeEach(() => {
        cy.viewport(1000, 771);
        homePage.navigate();
    })

    it('go to the About page from side menu', () => {
        homePage.clickItem('[href="/about"]', '/about');
    })

})