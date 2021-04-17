const mongoose = require("mongoose");

const keeperSchema = new mongoose.Schema({
    title: String,
    content: String,
    createdAt: {
        type: Date,
        default: new Date(),
    },
});

const KeeperStore = mongoose.model("keeperStore", keeperSchema);

module.exports = KeeperStore;
