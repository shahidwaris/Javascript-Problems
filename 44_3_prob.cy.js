describe('Language Preference Example', () => {
  beforeEach(()=>{
    cy.visit('http://127.0.0.1:5500/index.html');
  })

  it('displays the default message in English', () => {
    cy.get('#message').should('have.text', 'This is an example of language preference.');
  });

  it('displays the message in Spanish when "Español" is clicked', () => {
    cy.contains('Español').click();
    cy.get('#message').should('have.text', 'Este es un ejemplo de preferencia de idioma.');
  });

  it('displays the message in French when "Français" is clicked', () => {
    cy.contains('Français').click();
    cy.get('#message').should('have.text', 'Ceci est un exemple de préférence de langue.');
  });

  it('saves the language preference in sessionStorage', () => {
    cy.contains('Español').click();
    cy.reload();
    cy.get('#message').should('have.text', 'Este es un ejemplo de preferencia de idioma.');
  });

  it('redirects to the index page after setting the language preference', () => {
    cy.contains('Français').click();
    cy.url().should('include', '/index.html');
  });

  it('stores the selected language in sessionStorage', () => {
    cy.contains('Español').click();
    cy.window().its('sessionStorage.language').should('equal', 'es');
    cy.contains('Français').click();
    cy.window().its('sessionStorage.language').should('equal', 'fr');
    cy.contains('English').click();
    cy.window().its('sessionStorage.language').should('equal', 'en');
  });
});
