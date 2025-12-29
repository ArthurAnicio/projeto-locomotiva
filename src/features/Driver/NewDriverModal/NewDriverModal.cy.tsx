import React from "react";
import { NewDriverModal } from "@/features/Driver/NewDriverModal";

describe("<NewDriverModal />", () => {
  it("Shouldn't send with empty values and show error messages", () => {
    cy.mount(<NewDriverModal onClose={cy.spy()} />);
    cy.contains("button", "Salvar").click();

    cy.contains("Nome completo é obrigatório").should("be.visible");
    cy.contains("Email corporativo é obrigatório").should("be.visible");
    cy.contains("CHF é obrigatório").should("be.visible");
    cy.contains("Turno preferencial é obrigatório").should("be.visible");
  });

  it("Should reject CHF in invalid format and invalid email", () => {
    cy.mount(<NewDriverModal onClose={cy.spy()} />);

    cy.get('input[name="fullName"]').type("Nome Sobrenome");
    
    cy.get('input[name="email"]').type("email-invalido").blur();
    
    cy.get('input[name="chf"]').type("123456SP").blur();

    cy.get('input[name="shift"]').parent().click();
    cy.get("li").contains("Manhã").click();

    cy.contains("button", "Salvar").click({ force: true });

    cy.contains("Email inválido").should("be.visible");
    cy.contains("Formato inválido").should("be.visible");
  });

  it("Should accept valid values and call close()", () => {
    cy.mount(<NewDriverModal onClose={cy.spy().as("closeSpy")} />);
    cy.window().then((win) => cy.stub(win, "alert").as("alertStub"));

    cy.get('input[name="fullName"]').type("João da Silva");
    cy.get('input[name="email"]').type("joao.silva@empresa.com");
    cy.get('input[name="chf"]').type("SP123456");

    cy.get('input[name="shift"]').parent().click();
    cy.contains("Manhã").click();

    cy.get('input[name="overtime"]').check({ force: true });

    cy.contains("button", "Salvar").click();

    cy.get("@alertStub").should("have.been.calledOnce");
    cy.get("@closeSpy").should("have.been.calledOnce");
  });
});
