const ClientModal = require("./../jsonModels/clientModal");

const getClient = async (req, res) => {
    try {
      const clients = await ClientModal.find();

      // Reverse the order of clients
      const reversedClients = clients.reverse();

      // Map over the reversed clients and transform the data if needed
      const result = reversedClients.slice(0, 20).map(client => {
          return client
      });

      // Return the transformed and limited client list
      return res.status(200).send(result);
    } catch (error) {
        console.log(error);
        return res.status(500).send("Something went wrong while getting clients!");
    }
};

module.exports = { getClient };
