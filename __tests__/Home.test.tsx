import { render, screen } from "@testing-library/react";
import Home from "../src/app/page"

describe("Home Page", () => {
  it("should render the home page", () => {
    render(<Home />);
  })
})