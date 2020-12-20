import React, { useState } from "react";
import Header from "./assets/components/Header";
import "./App.css";
import Footer from "./assets/components/Footer";
import Note from "./assets/components/Note";
import Addtodo from "./assets/components/Addtodo";

var notes = [];

function App() {
    const [heading, setHeading] = useState("");
    const [content, setContent] = useState("");
    const [del, setDel] = useState(null);

    if (heading !== "" && content !== "") {
        notes.unshift({ title: heading, content: content });
    }
    // const len = notes.length;

    console.log(del);

    return (
        <div className="App">
            <Header />
            <div className="note-main">
                {notes.map((v, i) => {
                    if (i % 2 == 0) {
                        return (
                            <Note
                                title={v.title}
                                content={v.content}
                                id={i / 2}
                            />
                        );
                    }
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
