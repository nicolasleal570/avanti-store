import React from "react";
import { CollectionsMenu } from "./CollectionsMenu.component";
import { collectionsFixture } from "../../../../../cypress/fixtures/collections.fixture";

describe("CollectionsMenu Component", () => {
  beforeEach(() => {
    // Set the viewport like a Desktop
    cy.viewport("macbook-15");

    // Mount the component
    cy.mount(<CollectionsMenu collections={collectionsFixture} />);
  });

  it("Should render correctly", () => {
    // Check if collections list exists
    cy.get("[data-cy='collectionsItem']").contains("Collections");

    // Check if the icon exists
    cy.get("[data-cy='chevronIcon']");

    // Check if collections items have not been render
    collectionsFixture.forEach((collection) => {
      cy.get(`[data-cy='${collection.id}']`).should("not.exist");
    });
  });

  it("Should open and show the list of collections", () => {
    // Click the button
    cy.get("[data-cy='collectionsItem']").click();

    collectionsFixture.forEach((collection) => {
      cy.get(`[data-cy='${collection.id}']`).should(
        "have.attr",
        "href",
        `/collections/${collection.handle}`
      );
    });
  });

  it("Should close the list of collections", () => {
    // Click the button
    cy.get("[data-cy='collectionsItem']").click();

    cy.get("[data-cy='collectionsItem']").click();

    collectionsFixture.forEach((collection) => {
      cy.get(`[data-cy='${collection.id}']`).should("not.exist");
    });
  });
});
