const servicesModal = require("../jsonModels/servicesModal");

const createService = async (req, res) => {
    try {
    
        const {
            id,
            title,
            description
        } = req.body;

        console.log(title, description)
    
    
        const client = new servicesModal({
            id: id,
            title: {
                en: title.en,
                ka: title.ka
            },
            description: {
                en: description.en,
                ka: description.ka
            },
        });
    
        const clients = await client.save();
    
        return res.status(200).send(clients);
    } catch (error) {
        return res.status(500).send("Something went wrong while creating car!");
    }
};

module.exports = {createService}