const mongoose = require("mongoose");

const ConditionsSchema = new mongoose.Schema({
    title: {
        type: String,
        required: false,
    },
    description: {
        type: String,
        required: false,
    }
});

module.exports = mongoose.model("conditions", ConditionsSchema);
