const { contact } = require('./controllers/contact');
const {createClient} = require('./controllers/createClient');
const { createService } = require('./controllers/createService');
const { editStatus } = require('./controllers/editStatus');
const {emailSend} = require('./controllers/email');
const { getClient } = require('./controllers/getClient');
const { getID } = require('./controllers/getID');

const router = require("express").Router();

router.get("/", (req, res) => {
  res.send("Welcome to Directions API");
});
 
router.post("/client", createClient);
router.post("/email", emailSend);
router.post("/contact", contact);
router.get("/client", getClient);
router.post("/id", getID);
router.put("/client/id", editStatus);
router.post("/services", createService);
router.get("/services", getClient);

module.exports = router;
