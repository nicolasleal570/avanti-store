import { productsFixture } from "../fixtures/products.fixture";

describe("Product detail page", () => {
  beforeEach(() => {
    cy.viewport("macbook-16");

    // Visit the Homepage
    cy.visit("/");
  });

  it.only("Should select a featured product from the home page and navigate to detail page", () => {
    // Select a product from the fixture
    const selectedProduct = productsFixture[0];

    const productUrl = `/products/${selectedProduct.handle}`;
    // Click the product
    cy.get(`[data-cy='${productUrl}']`).click();

    // Check if the image is correct
    cy.get("[data-cy='productImage']");

    // Check if the title is correct
    cy.get("[data-cy='productTitle']").contains(selectedProduct.title);

    // Check if the price is correct
    const { currencyCode, amount } = selectedProduct.priceRange.minVariantPrice;
    const price = `${currencyCode} ${amount}`;
    cy.get("[data-cy='productPrice']").contains(price);

    // Check if the description is correct
    if (selectedProduct.description) {
      cy.get("[data-cy='productDescription']").contains(
        selectedProduct.description
      );
    }

    // Check if add to cart button is correct
    cy.get("[data-cy='addToCartButton']").contains("Add to cart");

    const recommendedProductsTitle = "Recommended products";
    const recommendedProductsDescription =
      "These recommendations are based on the product selected";

    // Check if the title of recommended products section is correct
    cy.get(`[data-cy='${recommendedProductsTitle}']`).contains(
      recommendedProductsTitle
    );

    // Check if the description of recommended products section is correct
    cy.get(`[data-cy='${recommendedProductsDescription}']`).contains(
      recommendedProductsDescription
    );

    // Check if the products list of recommended products section is correct
    cy.get(`[data-cy='recommendedProducts']`)
      .children()
      .should("have.length.gt", 0);
  });
});
