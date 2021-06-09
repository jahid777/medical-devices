import React from "react";
import Modal from "react-modal";
import CloseIcon from "@material-ui/icons/Close";
import ModalData from "./ModalData";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "500px",
  },
};
Modal.setAppElement("#root");

const ModalPopUp = ({ modalIsOpen, closeModal, productDtls }) => {
  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "10px",
          }}
        >
          <h3>PRODUCT INFORMATION :</h3>
          <button onClick={closeModal} className="btn btn-danger">
            {" "}
            <CloseIcon />{" "}
          </button>
        </div>
        <ModalData productDtls={productDtls} />
      </Modal>
    </div>
  );
};

export default ModalPopUp;
