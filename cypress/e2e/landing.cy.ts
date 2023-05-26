describe("Landing page", () => {
  beforeEach(() => {
    cy.viewport("macbook-16");

    // Visit the Homepage
    cy.visit("/");
  });

  it("Should render all sections correctly", () => {
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

  it("Should select a collection and navigate to the detail", () => {
    cy.get("[data-cy='Unisex']")
      .contains("Unisex")
      .should("have.attr", "href", "/collections/unisex")
      .click();

    cy.get("[data-cy='unisex']").contains("Unisex Collection");

    cy.get("[data-cy='productsList']").children().should("have.length", 5);

    // Find the pagination buttons
    cy.get("#previousPageButton").contains("Previous page");
    cy.get("#nextPageButton").contains("Next page");
  });

});
