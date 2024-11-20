const ClientModal = require("./../jsonModels/clientModal");

const getClient = async (req, res) => {
    try {
      
  
      const clients = await ClientModal.find();
  
      return res.status(200).send(clients);
    } catch (error) {
      console.log(error)
      return res.status(500).send("Something went wrong while getting cars!");
    }
};

module.exports = {getClient}