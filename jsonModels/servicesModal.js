const mongoose = require("mongoose");

const ServicesSchema = new mongoose.Schema({
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
    }
});

module.exports = mongoose.model("services", ServicesSchema);
