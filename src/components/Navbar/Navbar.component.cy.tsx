import React from "react";
import { Navbar } from "./Navbar.component";
import { collectionsFixture } from "../../../cypress/fixtures/collections.fixture";
import { navbarRoutes } from "@/constants/navbarRoutes.constants";

describe("Navbar Component", () => {
  context("Navbar in desktop mode", function () {
    it("Should render correctly in desktop mode", () => {
      // Set the viewport like a Desktop
      cy.viewport("macbook-15");

      // Mount the component
      cy.mount(<Navbar collections={collectionsFixture} />);

      // Check if the logo is defined
      cy.get("[data-cy='logo']").should("have.attr", "src", "/avanti.svg");

      // Check if the main menu is defined correctly
      cy.get("[data-cy='mainMenu']").children().should("have.length", 4);

      // Check if the menu items are defined
      cy.get("li").contains("Collections");
      cy.get("li > a").contains("Most Wanted");
      cy.get("li > a").contains("New Arrival");
      cy.get("li > a").contains("Brands");

      // Check if the search link is defined
      cy.get("[data-cy='searchLink']").should("have.attr", "href", "/search");

      // Check if the bag button is defined
      cy.get("[data-cy='bagLink']");

      // Check if the profile button is defined
      cy.get("[data-cy='userLink']");
    });
  });

  context("Navbar in mobile mode", function () {
    this.beforeEach(() => {
      // Set the viewport like a Desktop
      cy.viewport("iphone-xr");

      // Mount the component
      cy.mount(<Navbar collections={collectionsFixture} />);
    });

    it("Should render correctly", () => {
      // Check if the logo is defined
      cy.get("[data-cy='logo']").should("have.attr", "src", "/avanti.svg");

      // Check if the search link is defined
      cy.get("[data-cy='searchLink']").should("have.attr", "href", "/search");

      // Check if the bag button is defined
      cy.get("[data-cy='hamburgerIcon']");
    });

    it("Should open the menu", () => {
      // Click the hamburger icon
      cy.get("[data-cy='hamburgerIcon']").click();

      // Check if collections list exists
      cy.get("[data-cy='collectionsItem']");

      // Check if generic links render correctly
      navbarRoutes.forEach((link) => {
        cy.get(`[data-cy='${link.label}']`).should(
          "have.attr",
          "href",
          link.href
        );
      });

      cy.get("[data-cy='Shopping Cart']").should(
        "have.attr",
        "href",
        "/work-in-progress"
      );

      cy.get("[data-cy='Profile']").should(
        "have.attr",
        "href",
        "/work-in-progress"
      );
    });

    it("Should close the menu", () => {
      // Click the hamburger icon
      cy.get("[data-cy='hamburgerIcon']").click();

      // Click the hamburger icon
      cy.get("[data-cy='hamburgerIcon']").click();

      // Check if collections list exists
      cy.get("[data-cy='collectionsItem']").should("not.exist");
    });
  });
});
