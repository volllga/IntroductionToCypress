export class Page{
    navigate() {
        cy.visit("/");
    }

    clickItem(item, path) {
        cy.get(item).click();
        cy.url().should('include', path);
    }

    textOfItem(item, text) {
        cy.get(item).contains(text);
    }
}
