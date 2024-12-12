const contactModal = require("../jsonModels/contactModal");

const getContactList = async (req, res) => {
    try {
      
  
      const clients = await contactModal.find();
  
      return res.status(200).send(clients);
    } catch (error) {
      console.log(error)
      return res.status(500).send("Something went wrong while getting cars!");
    }
};

module.exports = {getContactList}