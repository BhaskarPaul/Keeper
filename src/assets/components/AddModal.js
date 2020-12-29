import React, { useState } from "react";
import "../css/AddModal.css";
import { Button } from "@material-ui/core";

function AddModal({ heading, setHeading, content, setContent }) {
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
        // event.preventDefault();
    }

    function handleChangeDes(event) {
        setDes(event.target.value);
    }

    return (
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
                    <Button variant='contained' size='large' onClick={() => handleSubmit()}>
                        <span className='btn-text'>Submit</span>
                    </Button>
                </div>
            </form>
        </div>
    );
}

export default AddModal;
