import React, { useState } from "react";
import Header from "./assets/components/Header";
import "./App.css";
import Footer from "./assets/components/Footer";
import Note from "./assets/components/Note";
import Addtodo from "./assets/components/Addtodo";
import { useEffect } from "react";

function App() {
    const [heading, setHeading] = useState("");
    const [content, setContent] = useState("");
    const [viewNote, setViewNote] = useState(false);
    const [notes, setNotes] = useState([]);
    // const [display, setDisplay] = useState(null);

    // useEffect(() => {
    //     if (notes.length == 0) {
    //         setDisplay(false);
    //     }
    // });

    useEffect(() => {
        setNotes([...notes, { title: heading, content: content }]);
    }, [heading, content]);

    return (
        <div className="App">
            <Header />
            <div className="note-main">
                {notes.filter((value, idx) => (idx >= 1)).reverse().map((v, i) => {
                    return (
                        <Note
                            key={i}
                            id={i}
                            content={v.content}
                            title={v.title}
                            viewNote={viewNote}
                            setViewNote={setViewNote}
                        />
                    );
                })}
            </div>
            <div className="todo">
                <Addtodo
                    heading={heading}
                    setHeading={setHeading}
                    content={content}
                    setContent={setContent}
                />
            </div>
            <Footer />
        </div>
    );
}

export default App;
