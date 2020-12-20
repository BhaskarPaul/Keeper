import React, { useState } from "react";
import "../css/Addtodo.css";
import AddModal from "./AddModal";

function Addtodo({ heading, setHeading, content, setContent }) {
    const [modal, setModal] = useState(false);
    const [sign, setSign] = useState(" + ");
    const [des, setDes] = useState("Click here to add new ");

    const handleModal = () => {
        if (sign === " + ") {
            setModal(true);
            setSign(" x ");
            setDes("Close ");
        } else {
            setModal(false);
            setSign(" + ");
            setDes("Click here to add new ");
        }
    };

    return (
        <div className="addtodo">
            {modal && (
                <AddModal
                    heading={heading}
                    setHeading={setHeading}
                    content={content}
                    setContent={setContent}
                />
            )}
            <span>{des} </span>
            <button onClick={handleModal}>{sign}</button>
        </div>
    );
}

export default Addtodo;
