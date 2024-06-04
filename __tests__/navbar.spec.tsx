import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { screen } from "@testing-library/dom";
import Navbar from "@/components/shared/navbar";

describe("Navbar tests", () => {
  it("should render the component", () => {
    render(<Navbar />);

    const navbar = screen.getByTestId("navbar");

    expect(navbar).toBeTruthy();
  });
});
