import "../css/Footer.css";
import React from "react";
import TimeNow from "../components/TimeNow";

function Footer() {
    const Months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "Nevember",
        "December",
    ];

    const date = new Date();
    const Month = Months[date.getMonth()];
    const day = date.getDate();
    const year = date.getFullYear();

    // console.log(day);

    return (
        <div className="footer">
            <p>Copyright © {new Date().getFullYear()}</p>
            <div className="day-details">
                <TimeNow month={Month} day={day} year={year} />
            </div>
            <p className="me">Made with 💛 by Bhaskar</p>
        </div>
    );
}

export default Footer;
