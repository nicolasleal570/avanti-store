import React from "react";
import { NavbarLg } from "./NavbarLg.component";
import { collectionsFixture } from "@/utils/tests/collectionsFixture.utils";
import { navbarRoutes } from "@/constants/navbarRoutes.constants";

describe("NavbarLg Component", () => {
  it("Should render correctly", () => {
    // Set the viewport like a Desktop
    cy.viewport(1280, 720);

    // Mount the component
    cy.mount(<NavbarLg collections={collectionsFixture} />);

    // Check if the logo is defined
    cy.get("img[src='/avanti.svg']");

    // Check if the main menu is defined correctly
    cy.get("ul#mainMenu").children().should("have.length", 4);

    // Check if the menu items are defined
    cy.get("li").contains("Collections");
    cy.get("li > a").contains("Most Wanted");
    cy.get("li > a").contains("New Arrival");
    cy.get("li > a").contains("Brands");

    // Check if the icon buttons are defined
    cy.get("a[href='/search']");
    cy.get("button#bagLink > svg");
    cy.get("button#userLink > svg");
  });
});
