import Header from "./";
import { render } from "@testing-library/react";

describe("Header component", () => {
  it("should render without crashing", () => {
    const { getAllByTestId } = render(<Header openModal={jest.fn()} />);

    const header = getAllByTestId("header");
    expect(header).toHaveLength(1);
  });
});
