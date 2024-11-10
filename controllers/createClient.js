const ClientModal = require("./../jsonModels/clientModal");

const createClient = async (req, res) => {
    try {
    
        const {
            pasportImage,
            ticketImage,
            firstName,
            lastName,
            phone,
            email,
            city,
            address,
            problem,
            fightNumber,
            date,
            description,
        } = req.body;
        console.log(req.body)
    
    
        const client = new ClientModal({
            pasportImage: pasportImage,
            ticketImage: ticketImage,
            firstName: firstName,
            lastName: lastName,
            phone: phone,
            email: email,
            city: city,
            address: address,
            problem: problem,
            fightNumber: fightNumber,
            date: date,
            description: description,
        });
    
        const clients = await client.save();
    
        return res.status(200).send(clients);
    } catch (error) {
        return res.status(500).send("Something went wrong while creating car!");
    }
};

module.exports = {createClient}