import "../css/Note.css";
import React from "react";

function Note({ id, content, title, del }) {
    return (
        <div className="note" onClick={() => (del = id)}>
            <h1>
                {id + 1}. {title}
            </h1>
            <p>{content}</p>
        </div>
    );
}

export default Note;
