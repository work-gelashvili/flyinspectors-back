const {createClient} = require('./controllers/createClient')
const {emailSend} = require('./controllers/email')

const router = require("express").Router();

router.get("/", (req, res) => {
  res.send("Welcome to Directions API");
});
 
router.post("/client", createClient);
router.post("/email", emailSend);

module.exports = router;
