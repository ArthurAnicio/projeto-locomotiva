import React from "react";
import AddWagonForm from "./index";
import { TrainProvider } from "@/features/Train/contexts/TrainContext";
import { WagonType } from "../../types";

describe("AddWagonForm", () => {
  const mountWithProvider = () => {
    const onExit = cy.stub().as("onExit");

    cy.mount(
      <TrainProvider>
        <AddWagonForm exit={onExit} />
      </TrainProvider>
    );

    return cy.get("@onExit");
  };

  it("Should render the title and wagon options", () => {
    mountWithProvider();

    cy.get("body").then(() => {
      cy.get('[data-testid="add-wagon-title"]').should("exist");
    });

    cy.get('[data-testid="add-wagon-title"]').should("exist");
    
    cy.contains("carga").should("exist");
    cy.contains("passageiro").should("exist");
    cy.contains("combustivel").should("exist");
  });

  it("Should not add a wagon when no type has been selected", () => {
    mountWithProvider();

    cy.contains("Adicionar").click({ force: true });

    cy.get("@onExit").should("not.have.been.called");
  });

  it("Should call 'exit' function when a type has been selected and 'Adicionar' button is clicked", () => {
    const onExit = cy.stub().as("onExit");

    cy.mount(
      <TrainProvider>
        <AddWagonForm exit={onExit} />
      </TrainProvider>
    );

    // Scroll + click nos tipos de vagão
    cy.contains(WagonType.Carga).scrollIntoView().click({ force: true });
    
    // Botão com force para elementos sobrepostos
    cy.contains("button", "Adicionar").click({ force: true });

    cy.get("@onExit").should("have.been.calledOnce");
  });
});
