require("dotenv/config");
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();

// middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// databse connection
mongoose.connect(
    process.env.DATABASE_URL,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => console.log("Database conencted !!! ")
);

app.use("/api", require("./routes/app"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started at port ${PORT}`));
