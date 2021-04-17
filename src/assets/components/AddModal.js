import React, { useState } from "react";
import "../css/AddModal.css";
import axios from "axios";
import { Button } from "@material-ui/core";
import { API } from "../../private/api";
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
        setContent(des);

        axios
            .post(`${API}addKeep`, { title: name, content: des })
            .then((response) => console.log(response.data))
            .catch((err) => console.log(err));

        setName("");
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
                    backgroundColor: `black`,
                },
                overlay: {
                    backgroundColor: `rgba(1, 1, 1, 0.5)`,
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
