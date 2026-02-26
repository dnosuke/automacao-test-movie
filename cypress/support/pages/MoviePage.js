class MoviePage {
    // Selectors
    get searchInput() { return cy.get('input.form-control.me-2'); }
    get searchButton() { return cy.get('input[type="submit"], button.btn-outline-success').first(); }
    get movieCards() { return cy.get('.card', { timeout: 10000 }); }
    get firstMovieCard() { return this.movieCards.first(); }
    get movieTitle() { return cy.get('h1, h2'); }
    get movieOverview() { return cy.get('p'); }
    get navbarBrand() { return cy.contains('Search Filmes'); }

    // Actions
    visit() {
        cy.visit('/');
    }

    searchFor(title) {
        this.searchInput.clear().type(title);
        this.searchButton.click();
    }

    goToFirstMovieDetails() {
        this.firstMovieCard.click();
    }

    goToHome() {
        this.navbarBrand.click();
    }

    // Assertions
    verifyResultsContain(text) {
        this.movieCards.should('have.length.at.least', 1);
        this.movieCards.contains(text, { matchCase: false }).should('exist');
    }

    verifyOnDetailsPage() {
        cy.url().should('include', '/filme');
        this.movieTitle.should('be.visible');
        this.movieOverview.should('not.be.empty');
    }

    verifyOnHomePage() {
        cy.url().should('eq', Cypress.config().baseUrl + '/');
        this.searchInput.should('be.visible');
    }

    checkAccessibility() {
        cy.injectAxe();
        // Log violations instead of failing the test to allow reports to be generated
        cy.checkA11y(null, null, (violations) => {
            const violationData = violations.map(v => ({
                id: v.id,
                impact: v.impact,
                description: v.description,
                nodes: v.nodes.length
            }));

            cy.task('log', `${violations.length} accessibility violations detected`);
            cy.addTestContext({
                title: 'Accessibility Violations',
                value: violationData
            });
        }, true);
    }
}

export default new MoviePage();
