describe('Login Page', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000'); // Update this if needed
    });
  
    it('should allow a user to login', () => {
      cy.get('input[placeholder="Username"]').type('testuser'); // Enter username
      cy.get('input[placeholder="Password"]').type('password123'); // Enter password
      cy.get('.login-button').click(); // Click Login button
  
      // Check if redirected to main page after login
      cy.url().should('include', '/main');
      cy.contains('Welcome, testuser'); // Adjust this based on your app's response
    });
  
    it('should show an error for incorrect credentials', () => {
      cy.get('input[placeholder="Username"]').type('wronguser');
      cy.get('input[placeholder="Password"]').type('wrongpassword');
      cy.get('.login-button').click();
      
      cy.contains('An error occurred').should('be.visible'); // Adjust message based on API response
    });
  
    it('should toggle between login and register mode', () => {
      cy.contains('Need an account? Register').click();
      cy.get('.login-button').should('have.text', 'Register');
      
      cy.contains('Already have an account? Login').click();
      cy.get('.login-button').should('have.text', 'Login');
    });
  });
  