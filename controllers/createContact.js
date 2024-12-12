const contactModal = require("../jsonModels/contactModal");

const createContact = async (req, res) => {
    try {
    
        const {
            call,
            email,
            address
        } = req.body;
    
        const client = new contactModal({
            call: {
                en: call.en,
                ka: call.ka
            },
            email: {
                en: email.en,
                ka: email.ka
            },
            address: {
                en: address.en,
                ka: address.ka
            },
        });
    
        const clients = await client.save();
    
        return res.status(200).send(clients);
    } catch (error) {
        return res.status(500).send("Something went wrong while creating car!");
    }
};

module.exports = {createContact}