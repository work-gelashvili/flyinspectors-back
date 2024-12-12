const mongoose = require("mongoose");

const ContactsSchema = new mongoose.Schema({
    call: {
        type: Object,
        required: true,
    },
    email: {
        type: Object,
        required: true,
    },
    address: {
        type: Object,
        required: true,
    }
});

module.exports = mongoose.model("contacts", ContactsSchema);
