import ModalDeleteWagon from "@/features/components/ModalDeleteWagon";
import { TrainProvider, useTrain , WagonType } from "@/features/contexts/TrainContext";

const Wrapper: React.FC<{ id: string; onCancel: () => void }> = ({
  id,
  onCancel,
}) => (
  <TrainProvider>
    <ModalDeleteWagon id={id} cancel={onCancel} />
  </TrainProvider>
);

describe("ModalDeleteWagon", () => {
  it("Should render the text and the buttons", () => {
    const onCancel = cy.stub();

    cy.mount(<Wrapper id="123" onCancel={onCancel} />);

    cy.contains("Tem certeza que deseja remover?").should("be.visible");
    cy.contains("Confirmar").should("be.visible");
    cy.contains("Cancelar").should("be.visible");
  });

  it("Should call 'cacel' function when 'Cancelar' button is clicked", () => {
    const onCancel = cy.stub().as("onCancel");

    cy.mount(<Wrapper id="123" onCancel={onCancel} />);

    cy.contains("Cancelar").click();

    cy.get("@onCancel").should("have.been.calledOnce");
  });

  it("Should remove the wagon and call 'cancel' function when 'Confirmar' button is clicked", () => {
    const onCancel = cy.stub().as("onCancel");

    const TestComponent = () => {
      const { wagons, addWagon } = useTrain();

      if (wagons.length === 0) {
        addWagon({
          id: "123",
          type: WagonType.Carga,
          length: 10,
          weight: 10,
        });
      }

      return <ModalDeleteWagon id="123" cancel={onCancel} />;
    };

    cy.mount(
      <TrainProvider>
        <TestComponent />
      </TrainProvider>
    );

    cy.contains("Confirmar").click();

    cy.get("@onCancel").should("have.been.calledOnce");
  });
});