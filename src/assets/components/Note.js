import "../css/Note.css";
import React, {useState} from "react";

function Note({ id, content, title, viewNote, setViewNote }) {
    const [view, setView] = useState("note");

    const sign = "";

    // setViewNote(view === "note" ? false : true);
    // if (view === 'note') {
    //     setViewNote(false);
    // } else {
    //     setViewNote(true);
    // }

    return (
        <div className={view} onClick={() => setView("note-disp")}>
            <h1>
                {sign} {title}
            </h1>
            <p>{content}</p>
        </div>
    );
}

export default Note;
