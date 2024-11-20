const ClientModal = require("./../jsonModels/clientModal");

const createClient = async (req, res) => {
    try {
    
        const {
            passportImage,
            ticketImage,
            firstName,
            lastName,
            phone,
            email,
            city,
            address,
            problem,
            flightNumber,
            date,
            description,
        } = req.body;
        console.log(req.body)
    
    
        const client = new ClientModal({
            passportImage: passportImage,
            ticketImage: ticketImage,
            firstName: firstName,
            lastName: lastName,
            phone: phone,
            email: email,
            city: city,
            address: address,
            problem: problem,
            flightNumber: flightNumber,
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