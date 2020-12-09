import "../css/Note.css";
import React from "react";

function Note({ id, content, title }) {
    return (
        <div className="note">
            <h1>
                {id + 1}. {title}
            </h1>
            <p>{content}</p>
        </div>
    );
}

export default Note;
