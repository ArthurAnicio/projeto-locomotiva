import { TrainProvider, WagonType } from "@/features/contexts/TrainContext";
import { WagonOption } from ".";

describe("WagonOption", () => {
  it("renderiza a imagem e o título", () => {
    const onSelect = cy.stub();

    cy.mount(
      <TrainProvider>
        <WagonOption
          type={WagonType.Carga}
          actualType={WagonType.None}
          selecionar={onSelect}
        />
      </TrainProvider>
    );

    cy.contains(WagonType.Carga).should("be.visible");
    cy.get('img[alt="carga"]').should("be.visible");
  });

  it("chama selecionar ao clicar", () => {
    const onSelect = cy.stub().as("onSelect");

    cy.mount(
      <TrainProvider>
        <WagonOption
          type={WagonType.Passageiro}
          actualType={WagonType.None}
          selecionar={onSelect}
        />
      </TrainProvider>
    );

    cy.contains(WagonType.Passageiro).click();

    cy.get("@onSelect").should("have.been.calledOnceWith", WagonType.Passageiro);
  });

  it("aplica o estilo de selecionado quando actualType === type", () => {
    const onSelect = cy.stub();

    cy.mount(
      <TrainProvider>
        <WagonOption
          type={WagonType.Combustivel}
          actualType={WagonType.Combustivel}
          selecionar={onSelect}
        />
      </TrainProvider>
    );

    cy.contains(WagonType.Combustivel)
      .parent()               
      .should("have.css", "box-shadow");
  });
});