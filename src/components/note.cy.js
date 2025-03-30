describe("Note Component Tests", () => {
    beforeEach(() => {
      cy.visit("http://localhost:3000"); // Adjust URL if needed
    });
  
    it("should add a new note", () => {
      cy.get("[title='New Note']").click(); // Click on 'New Note' button
      cy.get("textarea").type("This is a test note");
      cy.contains("Add Note").click(); // Click the Add Note button
  
      cy.contains("This is a test note").should("exist"); // Verify note was added
    });
  
    it("should edit a note", () => {
      cy.contains("This is a test note").click(); // Click the note to edit
      cy.get("textarea").clear().type("Updated test note");
      cy.get("[title='Save']").click(); // Click Save button
  
      cy.contains("Updated test note").should("exist"); // Verify note was updated
    });
  
    it("should delete a note", () => {
      cy.get("[title='Delete']").first().click(); // Click delete on the first note
      cy.contains("This is a test note").should("not.exist"); // Verify it's removed
    });
  });
  