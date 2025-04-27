const ClientModal = require("./../jsonModels/clientModal");

const getClient = async (req, res) => {
    try {
        // Extract page, limit, and reverse flag from query params
        const page = parseInt(req.query.page);
        const limit = parseInt(req.query.limit) || 5;
        const reverse = req.query.reverse === "true"; // e.g., ?reverse=true

        const skip = (page - 1) * limit;

        // Sort order: if reverse is true, sort descending (-1); otherwise ascending (1)
        // const sortOrder = reverse ? -1 : 1;
        const sortOrder = -1;

        const clients = await ClientModal.find()
            .sort({ _id: sortOrder }) // Assuming _id roughly represents creation time
            .skip(skip)
            .limit(limit);

        const totalClients = await ClientModal.countDocuments();

        return res.status(200).send({
            data: clients,
            pagination: {
                page,
                limit,
                totalClients,
                totalPages: Math.ceil(totalClients / limit),
                reverse,
            }
        });
        // return res.status(200).send(clients);

    } catch (error) {
        console.log(error);
        return res.status(500).send("Something went wrong while getting clients!");
    }
};

module.exports = { getClient };

// http://localhost:8000/client?page=1&limit=5&reverse=true

// const ClientModal = require("./../jsonModels/clientModal");

// const getClient = async (req, res) => {
//     try {
//       const clients = await ClientModal.find();

//       return res.status(200).send(clients);
//     } catch (error) {
//         console.log(error);
//         return res.status(500).send("Something went wrong while getting clients!");
//     }
// };

// module.exports = { getClient };
