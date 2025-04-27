const ClientModal = require("../jsonModels/clientModal");

const getID = async (req, res) => {
    try {
      const { userId } = req.body;
      // const users = await ClientModal.find();
      const user = await ClientModal.findOne({ userId });


      // const user = users.filter((item) =>item.userId === userId)
  
      return res.status(200).send(user);
    } catch (error) {
      console.log(error)
      return res.status(500).send("Something went wrong while getting cars!");
    }
};

module.exports = {getID}
