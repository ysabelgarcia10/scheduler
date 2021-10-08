describe("Appointments", () => {
  beforeEach(() => {
    cy.request("GET", "/api/debug/reset")

    cy.visit("/");

    cy.contains("Monday");
  });

  it("should book an interview", () => {
    cy.visit("/")
    cy.contains("Monday")

    //click on add button
    cy.get("[alt=Add]")
      .first()
      .click()
    
    //enters their name
    cy.get("[data-testid=student-name-input]")
      .type("Lydia Miller-Jones", { delay: 100 })

    //select an interviewer
    cy.get("[alt='Sylvia Palmer']").click()

    //saves
    cy.contains("Save").click()

    cy.contains(".appointment__card--show", "Lydia Miller-Jones");
    cy.contains(".appointment__card--show", "Sylvia Palmer");
  });

  it("should edit an interview", () => {
    cy.get("[alt=Edit]")
      .first()
      .click({ force: true });
  
    cy.get("[data-testid=student-name-input]").clear().type("Lydia Miller-Jones", { delay: 100 });
    cy.get("[alt='Tori Malcolm']").click();
  
    cy.contains("Save").click();
  
    cy.contains(".appointment__card--show", "Lydia Miller-Jones");
    cy.contains(".appointment__card--show", "Tori Malcolm");
  });

  it("should cancel an interview", () => {
    cy.get("[alt=Delete]")
      .first()
      .click({ force: true });

    cy.contains("Confirm").click();

    cy.contains("Deleting").should("exist");
    cy.contains("Deleting").should("not.exist");

    cy.contains(".appointment__card--show", "Archie Cohen")
    .should("not.exist");
  });
});