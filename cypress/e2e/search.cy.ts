describe("Search products page", () => {
  context("Navbar in desktop mode", function () {
    this.beforeEach(() => {
      // Interceptor to know when the API respond
      cy.intercept("https://mock.shop/api").as("fetchApi");

      cy.viewport("macbook-16");

      // Visit the home page
      cy.visit("/");

      // Find and click the search bar link
      cy.get("[data-cy='searchLink']").click();
    });

    it("Should render a list with 5 products", () => {
      // Find the input label
      cy.get("label[for=query]").contains("Find a product using the title");

      // Find the input field
      cy.get("input[name=query]").should("have.attr", "value", "");

      cy.wait("@fetchApi").then((interception) => {
        if (!interception.error) {
          // The first render should show 5 products
          cy.get("#productsList").children().should("have.length", 5);

          // Find the pagination buttons
          cy.get("#previousPageButton").contains("Previous page");
          cy.get("#nextPageButton").contains("Next page");
        }
      });
    });

    it("Should find a product using the title", () => {
      // Find the the product called "Slides"
      const query = "Slides";
      cy.get("input[name=query]")
        .type(query)
        .should("have.attr", "value", query);

      cy.wait("@fetchApi").then((interception) => {
        if (!interception.error) {
          // The first render should show products with title "Slides"
          cy.get("#productsList").children().should("have.length", 1);

          // Find the pagination buttons
          cy.get("#previousPageButton")
            .contains("Previous page")
            .should("be.disabled", true);
          cy.get("#nextPageButton")
            .contains("Next page")
            .should("be.disabled", true);
        }
      });
    });

    it("Should reload the page and execute the search using the query param", () => {
      cy.visit("/search?query=Slides");

      cy.wait("@fetchApi").then((interception) => {
        if (!interception.error) {
          // Check if the input store the value
          cy.get("input[name=query]").should("have.attr", "value", "Slides");

          // The first render should show products with title "Slides"
          cy.get("#productsList").children().should("have.length", 1);

          // Find the pagination buttons
          cy.get("#previousPageButton")
            .contains("Previous page")
            .should("be.disabled", true);
          cy.get("#nextPageButton")
            .contains("Next page")
            .should("be.disabled", true);
        }
      });
    });

    it("Should render an empty state", () => {
      // Find a random product
      const query = "Jajajajaja";
      cy.get("input[name=query]")
        .type(query)
        .should("have.attr", "value", query);

      cy.wait("@fetchApi").then((interception) => {
        if (!interception.error) {
          // Find the empty state message
          cy.get("h1").contains("Sorry, nothing matched with your search.");

          // Product list should not exist
          cy.get("#productsList").should("not.exist");

          // Pagination buttons should not exist
          cy.get("#previousPageButton").should("not.exist");
          cy.get("#nextPageButton").should("not.exist");
        }
      });
    });

    it("Should navigate through the selected product", () => {
      // Find a random product
      const query = "Slides";
      cy.get("input[name=query]").type(query);

      cy.wait("@fetchApi").then((interception) => {
        if (!interception.error) {
          const productUrl = `/products/slides`;
          // Click the product with title "Slides"
          cy.get(`[data-cy='${productUrl}']`).click();
        }
      });
    });
  });

  context("Navbar in mobile mode", function () {
    this.beforeEach(() => {
      // Interceptor to know when the API respond
      cy.intercept("https://mock.shop/api").as("fetchApi");

      cy.viewport("macbook-16");

      // Visit the home page
      cy.visit("/");

      // Find and click the search bar link
      cy.get("[data-cy='searchLink']").click();
    });

    it("Should render a list with 5 products", () => {
      // Find the input label
      cy.get("label[for=query]").contains("Find a product using the title");

      // Find the input field
      cy.get("input[name=query]").should("have.attr", "value", "");

      cy.wait("@fetchApi").then((interception) => {
        if (!interception.error) {
          // The first render should show 5 products
          cy.get("#productsList").children().should("have.length", 5);

          // Find the pagination buttons
          cy.get("#previousPageButton").contains("Previous page");
          cy.get("#nextPageButton").contains("Next page");
        }
      });
    });

    it("Should find a product using the title", () => {
      // Find the the product called "Slides"
      const query = "Slides";
      cy.get("input[name=query]")
        .type(query)
        .should("have.attr", "value", query);

      cy.wait("@fetchApi").then((interception) => {
        if (!interception.error) {
          // The first render should show products with title "Slides"
          cy.get("#productsList").children().should("have.length", 1);

          // Find the pagination buttons
          cy.get("#previousPageButton")
            .contains("Previous page")
            .should("be.disabled", true);
          cy.get("#nextPageButton")
            .contains("Next page")
            .should("be.disabled", true);
        }
      });
    });

    it("Should reload the page and execute the search using the query param", () => {
      cy.visit("/search?query=Slides");

      cy.wait("@fetchApi").then((interception) => {
        if (!interception.error) {
          // Check if the input store the value
          cy.get("input[name=query]").should("have.attr", "value", "Slides");

          // The first render should show products with title "Slides"
          cy.get("#productsList").children().should("have.length", 1);

          // Find the pagination buttons
          cy.get("#previousPageButton")
            .contains("Previous page")
            .should("be.disabled", true);
          cy.get("#nextPageButton")
            .contains("Next page")
            .should("be.disabled", true);
        }
      });
    });

    it("Should render an empty state", () => {
      // Find a random product
      const query = "Jajajajaja";
      cy.get("input[name=query]")
        .type(query)
        .should("have.attr", "value", query);

      cy.wait("@fetchApi").then((interception) => {
        if (!interception.error) {
          // Find the empty state message
          cy.get("h1").contains("Sorry, nothing matched with your search.");

          // Product list should not exist
          cy.get("#productsList").should("not.exist");

          // Pagination buttons should not exist
          cy.get("#previousPageButton").should("not.exist");
          cy.get("#nextPageButton").should("not.exist");
        }
      });
    });

    it("Should navigate through the selected product", () => {
      // Find a random product
      const query = "Slides";
      cy.get("input[name=query]").type(query);

      cy.wait("@fetchApi").then((interception) => {
        if (!interception.error) {
          const productUrl = `/products/slides`;
          // Click the product with title "Slides"
          cy.get(`[data-cy='${productUrl}']`).click();
        }
      });
    });
  });
});
