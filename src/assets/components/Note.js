import "../css/Note.css";
import React, { useState } from "react";

function Note({ id, content, title, remove, setRemove }) {
    const [view, setView] = useState("note");

    const handleClick = () => {
        setView("note-disp");
        setRemove(id);
    };

    return (
        <div className={view} onClick={handleClick}>
            <h1>
                {""} {title}
            </h1>
            <p>{content}</p>
        </div>
    );
}

export default Note;
