// Custom command to add context to Mochawesome report
Cypress.Commands.add('addTestContext', (context) => {
    cy.once('test:after:run', (test) => {
        // This is passed to the reporter
        test.context = [].concat(test.context || [], context);
    });
});
