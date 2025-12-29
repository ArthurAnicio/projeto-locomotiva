import WagonImage from "@/features/Train/components/WagonImage";
import { WagonType } from "../../types";

describe("WagonImage", () => {
  
  const mountWagonImage = (type: WagonType) => {
    cy.mount(<WagonImage type={type} width={100} heigth={100} />);
  };

  const setSvg = (type: WagonType) => {
    switch (type) {
      case WagonType.Carga:
        return "vagaoCarga.svg";
      case WagonType.Passageiro:
        return "vagaoTransporte.svg";
      case WagonType.Combustivel:
        return "vagaoCombustivel.svg";
      case WagonType.None:
        return "none.svg";
    } 
  }

  const cyWagonImage = (type: WagonType) => {
    cy.get('[data-cy="wagon-image"]')
                 .should("have.attr", "alt", type)
                 .and("have.attr", "src")
                 .should("include", setSvg(type));
  } 

  it("Should render the charge image", () => {
    mountWagonImage(WagonType.Carga);
    cyWagonImage(WagonType.Carga);
  });

  it("Should render the passenger image", () => {
    mountWagonImage(WagonType.Passageiro);
    cyWagonImage(WagonType.Passageiro);
  });

  it("Should render the fuel image", () => {
    mountWagonImage(WagonType.Combustivel);
    cyWagonImage(WagonType.Combustivel);
  });

  it("Should render the default image when the type is none", () => {
    mountWagonImage(WagonType.None);
    cyWagonImage(WagonType.None);
  });
});
