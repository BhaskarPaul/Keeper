import React, { useState, useEffect } from "react";
import "../css/Addtodo.css";
import AddModal from "./AddModal";

function Addtodo({ heading, setHeading, content, setContent }) {
    const [modal, setModal] = useState(false);
    const [sign, setSign] = useState(" + ");
    const [des, setDes] = useState("Click here to add new ");

    const handleModal = () => {
        if (sign === " + ") {
            setModal(true);
        } else {
            setModal(false);
        }
    };

    // useEffect(() => {
    //     handleModal();
    // }, [modal, setModal]);

    return (
        <div className="addtodo">
            {modal && (
                <AddModal
                    heading={heading}
                    setHeading={setHeading}
                    content={content}
                    setContent={setContent}
                    modal={modal}
                    setModal={setModal}
                />
            )}
            <span>{des} </span>
            <button onClick={handleModal}>{sign}</button>
        </div>
    );
}

export default Addtodo;
