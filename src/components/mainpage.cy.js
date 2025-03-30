describe("Main Page Tests", () => {
    beforeEach(() => {
      cy.visit("http://localhost:3000"); // Adjust URL if needed
      cy.window().then((win) => {
        win.localStorage.setItem("token", "test-token");
        win.localStorage.setItem("username", "TestUser");
      });
      cy.reload();
    });
  
    it("should fetch and display notes", () => {
      cy.intercept("GET", "**/api/notes", {
        statusCode: 200,
        body: [
          { _id: "1", text: "Test Note 1", date: new Date().toISOString() },
          { _id: "2", text: "Test Note 2", date: new Date().toISOString() }
        ],
      }).as("getNotes");
  
      cy.wait("@getNotes");
      cy.contains("Test Note 1").should("exist");
      cy.contains("Test Note 2").should("exist");
    });
  
    it("should add a new note", () => {
      cy.get('button[title="New Note"]').click();
      cy.get("textarea[placeholder='Type your note...']").type("New Cypress Note");
      cy.get("button").contains("Add Note").click();
  
      cy.intercept("POST", "**/api/notes", {
        statusCode: 201,
        body: { _id: "3", text: "New Cypress Note", date: new Date().toISOString() },
      }).as("addNote");
  
      cy.wait("@addNote");
      cy.contains("New Cypress Note").should("exist");
    });
  
    it("should edit a note", () => {
      cy.intercept("PUT", "**/api/notes/*", {
        statusCode: 200,
        body: { _id: "1", text: "Updated Note", date: new Date().toISOString() },
      }).as("updateNote");
  
      cy.contains("Test Note 1").click();
      cy.get("textarea").clear().type("Updated Note").blur();
      cy.wait("@updateNote");
      cy.contains("Updated Note").should("exist");
    });
  
    it("should delete a note", () => {
      cy.intercept("DELETE", "**/api/notes/*", {
        statusCode: 200,
      }).as("deleteNote");
  
      cy.get(".delete-btn").first().click();
      cy.wait("@deleteNote");
      cy.contains("Test Note 1").should("not.exist");
    });
  
    it("should filter notes using search", () => {
      cy.get("input[placeholder='🔍 Search Notes']").type("Test Note 2");
      cy.contains("Test Note 1").should("not.exist");
      cy.contains("Test Note 2").should("exist");
    });
  
    it("should logout user", () => {
      cy.get('button[title="Logout"]').click();
      cy.url().should("include", "/login");
    });
  });
  