import MoviePage from '../support/pages/MoviePage';

describe('Movie Search E2E Tests (POM)', () => {
    beforeEach(() => {
        MoviePage.visit();
    });

    it('should load the home page and show the search bar', () => {
        MoviePage.searchInput.should('be.visible');
        MoviePage.searchButton.should('be.visible');
        MoviePage.checkAccessibility();
    });

    it('should search for a movie and show results', () => {
        const movieTitle = 'Batman';
        MoviePage.searchFor(movieTitle);
        MoviePage.verifyResultsContain(movieTitle);
        MoviePage.checkAccessibility();
    });

    it('should navigate to movie details and show information', () => {
        const movieTitle = 'Batman';
        MoviePage.searchFor(movieTitle);
        MoviePage.goToFirstMovieDetails();
        MoviePage.verifyOnDetailsPage();
        MoviePage.checkAccessibility();
    });

    it('should navigate back to home page from details', () => {
        MoviePage.searchFor('Batman');
        MoviePage.goToFirstMovieDetails();
        MoviePage.verifyOnDetailsPage();

        MoviePage.goToHome();
        MoviePage.verifyOnHomePage();
    });
});
