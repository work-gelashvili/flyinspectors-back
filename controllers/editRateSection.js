const rateSectionModel = require("../jsonModels/rateSectionModel");

const editRateSection = async (req, res) => {
    try {
      const { id, title, description, icon } = req.body;
      // const { userId, status } = req.query;
      

      await rateSectionModel.findOneAndUpdate(
        { id: id },
        { 
          title: {
            en: title.en,
            ka: title.ka
          },
          description: {
              en: description.en,
              ka: description.ka
          },
          icon: icon
        }
      );
    
    
      // const send = await clients.save();
    
      // return res.status(200).send(send);
      return res.status(200).send("Car seat has been reserved!");
    } catch (error) {
        return res.status(500).send("Something went wrong while creating car!");
    }
};

module.exports = {editRateSection}