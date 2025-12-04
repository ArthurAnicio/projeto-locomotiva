import CardWagon from "@/features/components/Cardwagon";
import { TrainProvider } from "@/features/contexts/TrainContext";

describe("<CardWagon />", () => {
  const render = (props?: Partial<React.ComponentProps<typeof CardWagon>>) => {
    const defaultProps = {
      id: "123",
      type: "carga",
    };

    cy.mount(
      <TrainProvider>
        <CardWagon {...defaultProps} {...props} />
      </TrainProvider>
    );
  };

  it("renderiza título, imagem e botão remover", () => {
    render();

    cy.contains("carga").should("be.visible");
    cy.get('img[alt="carga"]').should("exist");
    cy.contains("Remover").should("be.visible");
  });

  it("abre o modal ao clicar em Remover", () => {
    render();

    cy.contains("Remover").click();

    cy.contains("Tem certeza que deseja remover?").should("be.visible");
  });

  it("fecha o modal ao clicar em Cancelar", () => {
    render();

    cy.contains("Remover").click();
    cy.contains("Tem certeza que deseja remover?").should("be.visible");

    cy.contains("Cancelar").click();

    cy.contains("Tem certeza que deseja remover?").should("not.exist");
  });
});