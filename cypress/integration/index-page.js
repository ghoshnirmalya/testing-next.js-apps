describe("Index page", () => {
  beforeEach(() => {
    cy.log(`Visiting http://localhost:3000`);
    cy.visit("/");
  });

  it("should have a logo ", () => {
    cy.get(".brand.header-brand img");
  });

  it("should have a hero section with a title, paragraph and button ", () => {
    cy.get(".hero .hero-title");
    cy.get(".hero .hero-paragraph");
    cy.get(".hero .hero-cta > .button");
  });

  it("should have a clients section with two images ", () => {
    cy.get(".clients .list-reset img").should("have.length", 2);
  });
});
