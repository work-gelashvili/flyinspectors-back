const contactModal = require("../jsonModels/contactModal");

const editContactList = async (req, res) => {
    try {
      const { call,
        email,
        address } = req.body;

      await contactModal.findOneAndUpdate(
        { 
          call: {
            en: call.en,
            ka: call.ka
          },
          email: {
              en: email.en,
              ka: email.ka
          },
          address: {
              en: address.en,
              ka: address.ka
          },
        }
      );

      return res.status(200).send("Car seat has been reserved!");
    } catch (error) {
        return res.status(500).send("Something went wrong while creating car!");
    }
};

module.exports = {editContactList}