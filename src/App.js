import React, { useState } from "react";
import Header from "./assets/components/Header";
import "./App.css";
import Footer from "./assets/components/Footer";
import Note from "./assets/components/Note";
import Addtodo from "./assets/components/Addtodo";
import { useEffect } from "react";

const App = () => {
    const [heading, setHeading] = useState("");
    const [content, setContent] = useState("");
    const [remove, setRemove] = useState(null);
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

    // console.log(notes);
    // console.log(typeof notes);

    /*
    taken from: https://stackoverflow.com/questions/50168088/how-to-delete-element-onclick-in-reactjs
    */

    const triggerDelete = (index) => {
        if (window.confirm("Are you sure you want to delete?")) {
            setNotes((prevNotes) => [
                ...prevNotes.slice(0, index),
                ...prevNotes.slice(index),
            ]);
        }
    };

    const whenBlank = () => {
        return (
            <div className="App">
                <h1>Hover and click notes to delete</h1>
            </div>
        );
    };

    let Notes = [...notes];

    if (Notes.length == 0) {
        return whenBlank();
    } else {
        return (
            <div className="App">
                <Header />
                <div
                    className="note-main"
                    onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        triggerDelete(remove);
                    }}
                >
                    {notes
                        .filter((v, i) => i >= 1)
                        .map((v, i) => {
                            return (
                                <div>
                                    <Note
                                        key={i}
                                        id={i}
                                        content={v.content}
                                        title={v.title}
                                        remove={remove}
                                        setRemove={setRemove}
                                    />
                                </div>
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
};

export default App;
