const ConditionsModal = require("../jsonModels/ConditionsModal");

const createConditions = async (req, res) => {
    try {
    
        const {
            title,
            description
        } = req.body;

    
        const client = new ConditionsModal({
            title: {
                en: title.en,
                ka: title.ka
            },
            description: {
                en: description.en,
                ka: description.ka,
            },
        });
    
        const clients = await client.save();
    
        return res.status(200).send(clients);
    } catch (error) {
        return res.status(500).send("Something went wrong while creating car!");
    }
};

module.exports = {createConditions}