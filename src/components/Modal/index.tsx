import { Component, ReactNode, useEffect, useState } from "react";
import ReactModal from "react-modal";

interface ModalProps {
  isOpen: boolean;
  setIsOpen: () => void;
  children: ReactNode;
}

interface ModalStatus {
  modalStatus: boolean;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  setIsOpen,
  children,
}): JSX.Element => {
  const [state, setState] = useState<ModalStatus>({ modalStatus: isOpen });

  useEffect(() => {
    if (state.modalStatus !== isOpen) {
      setState({ modalStatus: isOpen });
    }
  }, [isOpen]);

  return (
    <ReactModal
      data-testid="modal"
      shouldCloseOnOverlayClick={!false}
      onRequestClose={setIsOpen}
      isOpen={state.modalStatus}
      ariaHideApp={false}
      style={{
        content: {
          top: "50%",
          left: "50%",
          right: "auto",
          bottom: "auto",
          marginRight: "-50%",
          transform: "translate(-50%, -50%)",
          background: "#F0F0F5",
          color: "#000000",
          borderRadius: "8px",
          width: "736px",
          border: "none",
        },
        overlay: {
          backgroundColor: "#121214e6",
        },
      }}
    >
      {children}
    </ReactModal>
  );
};

export default Modal;
