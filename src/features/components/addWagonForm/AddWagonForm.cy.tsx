import AddWagonForm from "@/features/components/AddWagonForm";
import { TrainProvider, WagonType } from "@/features/contexts/TrainContext";

describe("AddWagonForm", () => {
  const mountWithProvider = (exitSpy?: Cypress.Agent<sinon.SinonSpy>) => {
    const onExit = exitSpy ?? cy.stub().as("onExit");

    cy.mount(
      <TrainProvider>
        <AddWagonForm exit={onExit} />
      </TrainProvider>
    );

    return onExit;
  };

  it("Should render the title and wagon options", () => {
    mountWithProvider();

    cy.contains("Adicionar um Vagão").should("be.visible");
    cy.contains(WagonType.Carga).should("be.visible");
    cy.contains(WagonType.Passageiro).should("be.visible");
    cy.contains(WagonType.Combustivel).should("be.visible");
  });

  it("Should not add a wagon when no type has been selected.", () => {
    const onExit = mountWithProvider();

    cy.contains("Adicionar").click();

    cy.get("@onExit").should("not.have.been.called");
  });

  it("Should call 'exit' function when a type has been selected and 'Adicionar' button is clicked", () => {
    const onExit = cy.stub().as("onExit");

    cy.mount(
      <TrainProvider>
        <AddWagonForm exit={onExit} />
      </TrainProvider>
    );

    cy.contains(WagonType.Carga).click();
    cy.contains("button", "Adicionar").click();

    cy.get("@onExit").should("have.been.calledOnce");
  });
});