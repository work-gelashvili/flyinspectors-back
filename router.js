const {createClient} = require('./controllers/ClientController/createClient')
const {emailSend} = require('./controllers/ClientController/email')

const router = require("express").Router();

router.get("/", (req, res) => {
  res.send("Welcome to Directions API");
});
 
router.post("/client", createClient);
router.post("/email", emailSend);

module.exports = router;
