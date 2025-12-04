import AddWagonForm from "@/features/components/AddWagonForm";
import { TrainProvider, useTrain, WagonType } from "@/features/contexts/TrainContext";

describe("<AddWagonForm />", () => {
  const mountWithProvider = (exitSpy?: Cypress.Agent<sinon.SinonSpy>) => {
    const onExit = exitSpy ?? cy.stub().as("onExit");

    cy.mount(
      <TrainProvider>
        <AddWagonForm exit={onExit} />
      </TrainProvider>
    );

    return onExit;
  };

  it("renderiza o título e as opções de vagão", () => {
    mountWithProvider();

    cy.contains("Adicionar um Vagão").should("be.visible");
    cy.contains(WagonType.Carga).should("be.visible");
    cy.contains(WagonType.Passageiro).should("be.visible");
    cy.contains(WagonType.Combustivel).should("be.visible");
  });

  it("não adiciona vagão quando nenhum tipo está selecionado", () => {
    const onExit = mountWithProvider();

    cy.contains("Adicionar").click();

    cy.get("@onExit").should("not.have.been.called");
  });

  it("chama exit quando um tipo é selecionado e clica em Adicionar", () => {
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