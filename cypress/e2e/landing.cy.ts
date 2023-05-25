describe("Landing page", () => {
  it("Should render all sections correctly", () => {
    // Visit the Homepage
    cy.visit("/");

    // Check if banner is defined
    cy.get("span.sr-only").contains("Men");
    cy.get("span.sr-only").contains("Women");
    cy.get("span.sr-only").contains("Unisex");
    cy.get("h3").contains(
      "Discover the style that defines you in an exceptional place."
    );
    cy.get("a").contains("Shop now");
    cy.get("p").contains(
      "Our exclusive collection is meticulously designed for the modern urban dweller, capturing the essence of luxury and sophistication"
    );

    // Check if customer experience section is defined
    cy.get("h2").contains("We provide best customer experiences");
    cy.get("p").contains(
      "We ensure our customer have the best shopping experience"
    );
    cy.get("div#listOfServices").children().should("have.length", 4);

    // Check if featured products section is defined
    cy.get("h2").contains("Featured products");
    cy.get("#featuredProducts").children().should("have.length", 3);
  });
});
