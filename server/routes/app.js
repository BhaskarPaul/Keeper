const express = require("express");
const router = express.Router();
const KeeperStore = require("../models/keeper.model");

router.get("/", (req, res) => {
    KeeperStore.find((err, docs) => {
        if (err) {
            console.log(err);
            return res.status(404).json(err);
        }
        return res.json(docs);
    });
});

router.post("/addKeep", (req, res) => {
    const userKeep = req.body;

    const newUserKeep = new KeeperStore(userKeep);

    newUserKeep.save((err, result) => {
        if (err) {
            console.log(err);
            return res.status(404).json(err);
        }
        return res.status(200).json("success");
    });
});

router.delete("/deleteKeep/:id", (req, res) => {
    const keeperId = req.params.id;

    KeeperStore.deleteOne({ _id: keeperId }, (err) => {
        if (err) {
            console.log(err);
            return res.status(404).json(err);
        }
        return res.status(200).json("deleted successfully");
    });
});

module.exports = router;
