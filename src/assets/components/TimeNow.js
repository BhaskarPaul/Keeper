import React, { useState } from "react";
import "../css/timeNow.css";

function TimeNow(props) {
    const time = new Date().toLocaleTimeString();

    const [timeNow, setTimeNow] = useState(time);

    const updateTime = () => {
        setTimeNow(new Date().toLocaleTimeString());
    };

    setInterval(updateTime, 1000);

    return (
        <div className="time-stamp">
            <h1>{timeNow}</h1>
            <h1>{props.month} {props.day}, {props.year}</h1>
        </div>
    );
}

export default TimeNow;
