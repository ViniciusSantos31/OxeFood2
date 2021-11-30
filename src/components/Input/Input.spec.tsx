import { render } from "@testing-library/react";
import Input from ".";

jest.mock("@unform/core", () => ({
  useField() {
    return {
      fieldName: "email",
      defaultValue: "",
      error: "",
      registerField: jest.fn(),
    };
  },
}));

describe("Input component", () => {
  it("should be able to render", () => {
    const handleChange = jest.fn();
    const { getAllByTestId } = render(
      <Input
        name="email"
        onChange={handleChange}
        type="email"
        placeholder="Digite seu email"
      />
    );

    expect(getAllByTestId("input-component")).toHaveLength(1);
  });
});
