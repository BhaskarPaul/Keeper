import "../css/Note.css";
import React, { useState } from "react";

function Note({ content, title }) {
    return (
        <div className="note">
            <h1>
                {""} {title}
            </h1>
            <p>{content}</p>
        </div>
    );
}

export default Note;
