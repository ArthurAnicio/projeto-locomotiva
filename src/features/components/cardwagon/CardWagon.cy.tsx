import CardWagon from "@/features/components/Cardwagon";
import { TrainProvider, WagonType } from "@/features/contexts/TrainContext";

describe("CardWagon", () => {
  const render = () => {
    cy.mount(
      <TrainProvider>
        <CardWagon id="123" type={WagonType.Carga} />
      </TrainProvider>
    );
  };

  it("Should render the title, image and remove button", () => {
    render();

    cy.contains("carga").should("be.visible");
    cy.get('img[alt="carga"]').should("exist");
    cy.contains("Remover").should("be.visible");
  });

  it("Should open the modal when 'Remover' button is clicked", () => {
    render();

    cy.contains("Remover").click();

    cy.contains("Tem certeza que deseja remover?").should("be.visible");
  });

  it("Should close the modal when 'Cancelar' button is clicked", () => {
    render();

    cy.contains("Remover").click();
    cy.contains("Tem certeza que deseja remover?").should("be.visible");

    cy.contains("Cancelar").click();

    cy.contains("Tem certeza que deseja remover?").should("not.exist");
  });
});