const ClientModal = require("./../jsonModels/clientModal");

const getClient = async (req, res) => {
    try {
        // Extract page and limit from the query parameters, with defaults
        const page = parseInt(req.query.page) || 1;  // Default page is 1
        const limit = parseInt(req.query.limit) || 200;  // Default limit is 10

        // Calculate the number of items to skip
        const skip = (page - 1) * limit;

        // Fetch the clients with pagination
        const clients = await ClientModal.find()
            .skip(skip)
            .limit(limit);

        // Get the total count of clients for pagination purposes
        const totalClients = await ClientModal.countDocuments();

        // Send the response with pagination info
        return res.status(200).send({
            data: clients,
            pagination: {
                page,
                limit,
                totalClients,
                totalPages: Math.ceil(totalClients / limit),
            }
        });
    } catch (error) {
        console.log(error);
        return res.status(500).send("Something went wrong while getting clients!");
    }
};

module.exports = { getClient };


// const ClientModal = require("./../jsonModels/clientModal");

// const getClient = async (req, res) => {
//     try {
//       const clients = await ClientModal.find();

//       const reversedClients = clients.reverse();

//       const result = reversedClients.slice(0, 10).map(client => {
//           return client
//       });

//       return res.status(200).send(result);
//     } catch (error) {
//         console.log(error);
//         return res.status(500).send("Something went wrong while getting clients!");
//     }
// };

// module.exports = { getClient };
