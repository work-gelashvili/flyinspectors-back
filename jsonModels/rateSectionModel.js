const mongoose = require("mongoose");

const RateSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true,
    },
    title: {
        type: Object,
        required: true,
    },
    description: {
        type: Object,
        required: true,
    },
    icon: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model("rates", RateSchema);
