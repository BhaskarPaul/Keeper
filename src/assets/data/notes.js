import React from "react";

function notes({ heading, setHeading,content, setContent }) {

    const createObject = {
        title : heading,
        content : content,
    };

    const datas = [];
    datas.push(createObject);

    return <div></div>;
}

export default notes;
