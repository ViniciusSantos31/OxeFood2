import Button from "./";
import { fireEvent, render } from "@testing-library/react";

describe("Button component", () => {
  it("Button renders correctly", () => {
    const { getAllByTestId } = render(<Button label="Button test" />);
    const button = getAllByTestId("button-component");
    expect(button).toHaveLength(1);
  });

  it("Should be able to call handleSubmit", () => {
    const handleSubmit = jest.fn();
    const { getByTestId } = render(
      <Button label="button" onClick={handleSubmit} />
    );
    const button = getByTestId("button-component");
    fireEvent.click(button);
    expect(handleSubmit).toHaveBeenCalledTimes(1);
  });

  it("Should not be able to call handleSubmit", () => {
    const handleSubmit = jest.fn();
    const { getByTestId } = render(
      <Button label="button" onClick={handleSubmit} disabled />
    );

    const button = getByTestId("button-component");
    fireEvent.click(button);
    expect(handleSubmit).toHaveBeenCalledTimes(0);
  });
});
