import { render } from "@testing-library/react";
import Modal from ".";

describe("Modal component", () => {
  it("should be able to render", () => {
    const { getAllByText } = render(
      <Modal isOpen={true} setIsOpen={jest.fn()}>
        Teste Modal
      </Modal>
    );
    expect(getAllByText("Teste Modal")).toHaveLength(1);
  });
});
