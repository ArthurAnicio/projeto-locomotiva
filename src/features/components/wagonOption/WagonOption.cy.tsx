import { TrainProvider, WagonType } from "@/features/contexts/TrainContext";
import { WagonOption } from ".";

describe("WagonOption", () => {

  const mountWagonOption = (type:WagonType) => {
    const onSelect = cy.stub().as("onSelect");
    cy.mount(
      <TrainProvider>
        <WagonOption
          type={type}
          actualType={WagonType.None}
          selecionar={onSelect}
        />
      </TrainProvider>
    );
  }

  it("Should render the image and the title of the card", () => {
    mountWagonOption(WagonType.Carga)
    cy.contains(WagonType.Carga).should("be.visible");
    cy.get('img[alt="carga"]').should("be.visible");
  });

  it("Should call 'selecionar' function when the card is clicked", () => {
    mountWagonOption(WagonType.Passageiro)
    cy.contains(WagonType.Passageiro).click();
    cy.get("@onSelect").should("have.been.calledOnceWith", WagonType.Passageiro);
  });

  it("Should apply the selected style when actualType is equal to type", () => {
    mountWagonOption(WagonType.Combustivel)
    cy.contains(WagonType.Combustivel)
      .parent()               
      .should("have.css", "box-shadow");
  });
});