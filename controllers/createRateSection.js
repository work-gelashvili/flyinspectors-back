const rateSectionModel = require("../jsonModels/rateSectionModel");

const createRateSection = async (req, res) => {
    try {
    
        const {
            id,
            title,
            description,
            icon
        } = req.body;

        console.log(title)
    
    
        const client = new rateSectionModel({
            id: id,
            title: {
                en: title.en,
                ka: title.ka
            },
            description: {
                en: description.en,
                ka: description.ka
            },
            icon: icon
        });
    
        const clients = await client.save();
    
        return res.status(200).send(clients);
    } catch (error) {
        return res.status(500).send("Something went wrong while creating car!");
    }
};

module.exports = {createRateSection}