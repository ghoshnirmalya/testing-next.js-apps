describe("Index page", () => {
  beforeEach(() => {
    cy.log(`Visiting http://localhost:3000`);
    cy.visit("/");
  });

  /**
   * Header section
   */
  it("should have a logo", () => {
    cy.get(".brand.header-brand img").should("have.length", 1);
  });

  /**
   * Hero section
   */
  it("should have a hero section with a title, description and a button", () => {
    cy.get(".hero .hero-title").should("have.length", 1);
    cy.get(".hero .hero-paragraph").should("have.length", 1);
    cy.get(".hero .hero-cta > .button").should("have.length", 1);
  });

  /**
   * Clients section
   */
  it("should have a clients section with two images", () => {
    cy.get(".clients img").should("have.length", 2);
  });

  /**
   * Features section
   */
  it("should have a features section with a title, description and four cards with an image, title and description", () => {
    cy.get(".features .section-title").should("have.length", 1);
    cy.get(".features .section-paragraph").should("have.length", 1);
    cy.get(".features .feature").should("have.length", 4);
    cy.get(".features .feature .feature-icon").should("have.length", 4);
    cy.get(".features .feature .feature-title").should("have.length", 4);
    cy.get(".features .feature .text-sm").should("have.length", 4);
  });

  /**
   * Testimonials section
   */
  it("should have a testimonials section with a title and two cards with a description and author name", () => {
    cy.get(".testimonials .section-title").should("have.length", 1);
    cy.get(".testimonials .testimonial").should("have.length", 2);
    cy
      .get(".testimonials .testimonial .testimonial-body")
      .should("have.length", 2);
    cy
      .get(".testimonials .testimonial .testimonial-name")
      .should("have.length", 2);
  });

  /**
   * Pricing section
   */
  it("should have a pricing section with a title and one card with a description, price and a CTA", () => {
    cy.get(".pricing .section-title").should("have.length", 1);
    cy.get(".pricing .pricing-table").should("have.length", 1);
    cy
      .get(".pricing .pricing-table .pricing-table-title")
      .should("have.length", 1);
    cy
      .get(".pricing .pricing-table .pricing-table-price")
      .should("have.length", 1);
    cy
      .get(".pricing .pricing-table .pricing-table-cta")
      .should("have.length", 1);
  });

  /**
   * FAQs section
   */
  it("should have a FAQs section with a title and two FAQs", () => {
    cy.get(".pricing .pricing-faqs h4").should("have.length", 1);
    cy.get(".pricing .pricing-faqs .accordion li").should("have.length", 2);
  });

  /**
   * CTA section
   */
  it("should have a CTA section with a title and a button", () => {
    cy.get(".cta .section-title").should("have.length", 1);
    cy.get(".cta .cta-cta").should("have.length", 1);
  });

  /**
   * Footer section
   */
  it("should have a footer section with a logo and three social links", () => {
    cy.get(".site-footer .brand img").should("have.length", 1);
    cy.get(".site-footer .footer-social-links li").should("have.length", 3);
  });
});
