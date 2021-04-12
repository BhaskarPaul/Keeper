import React, { useState } from "react";
import "../css/AddModal.css";
import { Button } from "@material-ui/core";
import Modal from "react-modal";

Modal.setAppElement("#root");

function AddModal({
    heading,
    setHeading,
    content,
    setContent,
    modal,
    setModal,
}) {
    // for title
    const [name, setName] = useState("");

    // for details
    const [des, setDes] = useState("");

    function handleChange(event) {
        setName(event.target.value);
    }

    function handleSubmit(event) {
        setHeading(name);
        setName("");
        setContent(des);
        setDes("");
        setModal(false);
        // event.preventDefault();
    }

    function handleChangeDes(event) {
        setDes(event.target.value);
    }

    return (
        <Modal
            isOpen={modal}
            onRequestClose={() => setModal(false)}
            style={{
                content: {
                    borderRadius: `10px`,
                    border: `none`,
                    boxShadow: `rgba(100, 100, 111, 0.2) 0px 7px 29px 0px`,
                    height: "50vh",
                },
                overlay: {
                    backgroundColor: `rgba(255, 255, 255, 0.9)`,
                },
            }}
        >
            <div>
                <form className="add-modal-form" onSubmit={handleSubmit}>
                    <input
                        placeholder="Enter title"
                        value={name}
                        onChange={handleChange}
                    />
                    <textarea
                        placeholder="Enter details"
                        value={des}
                        onChange={handleChangeDes}  
                    />
                    <div className="btn">
                        <Button
                            variant="contained"
                            size="large"
                            onClick={() => handleSubmit()}
                        >
                            <span className="btn-text">Keep</span>
                        </Button>
                    </div>
                </form>
            </div>
        </Modal>
    );
}

export default AddModal;
