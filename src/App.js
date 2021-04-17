import React, { useState, useEffect } from "react";
import Header from "./assets/components/Header";
import "./App.css";
import Footer from "./assets/components/Footer";
import axios from "axios";
import Note from "./assets/components/Note";
import Addtodo from "./assets/components/Addtodo";
import { API } from "./private/api";
import { ScaleLoader } from "react-spinners";

const App = () => {
    const [heading, setHeading] = useState("");
    const [content, setContent] = useState("");
    const [remove, setRemove] = useState(null);
    const [notes, setNotes] = useState([]);

    const triggerDelete = (index) => {
        axios
            .delete(`${API}deleteKeep/${index}`)
            .then((response) => console.log(response))
            .catch((err) => console.log(err));
    };

    useEffect(() => {
        axios
            .get(API)
            .then((response) => setNotes([...response.data]))
            .catch((err) => console.log(err));

        return () => whenBlank();
    }, [notes, setNotes, heading, setHeading, content, setContent]);

    const whenBlank = () => {
        return (
            <div className="loader">
                <ScaleLoader />
            </div>
        );
    };

    const mainContent = () => {
        return (
            <>
                <div className="App">
                    <Header />
                    {notes.length > 0 ? (
                        <div className="note-main">
                            {notes.map((note, idx) => {
                                return (
                                    <div
                                        key={idx}
                                        onClick={() => triggerDelete(note._id)}
                                    >
                                        <Note
                                            id={idx}
                                            content={note.content}
                                            title={note.title}
                                            remove={remove}
                                            setRemove={setRemove}
                                        />
                                    </div>
                                );
                            })}
                        </div>
                    ) : (
                        whenBlank()
                    )}
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
            </>
        );
    };

    return mainContent();
};

export default App;
