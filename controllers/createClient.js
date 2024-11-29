const ClientModal = require("./../jsonModels/clientModal");

const createClient = async (req, res) => {
    try {
    
        const {
            passportImage,
            ticketImage,
            otherImage,
            signature,
            userId,
            firstName,
            lastName,
            phone,
            email,
            city,
            address,
            problem,
            flightNumber,
            date,
            select,
            description,
        } = req.body;
    
    
        const client = new ClientModal({
            passportImage: passportImage,
            ticketImage: ticketImage,
            otherImage: otherImage,
            signature: signature,
            userId: userId,
            firstName: firstName,
            lastName: lastName,
            phone: phone,
            email: email,
            city: city,
            address: address,
            problem: problem,
            flightNumber: flightNumber,
            date: date,
            select: select,
            description: description,
            status: "In progress"
        });
    
        const clients = await client.save();
    
        return res.status(200).send(clients);
    } catch (error) {
        return res.status(500).send("Something went wrong while creating car!");
    }
};

module.exports = {createClient}