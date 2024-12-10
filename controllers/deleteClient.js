const ClientModal = require("../jsonModels/clientModal");

const deleteClient = async (req, res) => {
  try {
    const { userId } = req.body;
    
    // Try to find the client by userId and delete it
    const client = await ClientModal.findOneAndDelete({ userId: userId });
    
    if (!client) {
      return res.status(404).send("Client not found!");
    }

    // Return a success response with the deleted client data
    return res.status(200).send({ message: "Client deleted successfully", client });
  } catch (error) {
    return res.status(500).send("Something went wrong while deleting the client.");
  }
};

module.exports = { deleteClient };
