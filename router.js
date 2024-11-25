const {createClient} = require('./controllers/createClient')
const {emailSend} = require('./controllers/email');
const { getClient } = require('./controllers/getClient');
const { getID } = require('./controllers/getID');

const router = require("express").Router();

router.get("/", (req, res) => {
  res.send("Welcome to Directions API");
});
 
router.post("/client", createClient);
router.post("/email", emailSend);
router.get("/client", getClient);
router.get("/id", getID);

module.exports = router;
