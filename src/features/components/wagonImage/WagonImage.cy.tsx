import WagonImage from "@/features/components/wagonImage";

describe("<WagonImage />", () => {
  it("renderiza a imagem de carga", () => {
    cy.mount(
      <WagonImage type="carga" width={100} heigth={100} />
    );

    cy.get('[data-cy="wagon-image"]')
      .should("have.attr", "alt", "carga")
      .and("have.attr", "src")
      .should("include", "vagaoCarga.svg");
  });

  it("renderiza a imagem de passageiro", () => {
    cy.mount(
      <WagonImage type="passageiro" width={100} heigth={100} />
    );

    cy.get('[data-cy="wagon-image"]')
      .should("have.attr", "alt", "passageiro")
      .and("have.attr", "src")
      .should("include", "vagaoTransporte.svg");
  });

  it("renderiza a imagem de combustivel", () => {
    cy.mount(
      <WagonImage type="combustivel" width={100} heigth={100} />
    );

    cy.get('[data-cy="wagon-image"]')
      .should("have.attr", "alt", "combustivel")
      .and("have.attr", "src")
      .should("include", "vagaoCombustivel.svg");
  });


  it("renderiza a imagem padrão quando type é inválido", () => {
    cy.mount(
      <WagonImage type="outro" width={100} heigth={100} />
    );

    cy.get('[data-cy="wagon-image"]')
      .should("have.attr", "alt", "outro")
      .and("have.attr", "src")
      .should("include", "none.svg");
  });
});