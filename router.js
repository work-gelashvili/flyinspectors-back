const { contact } = require('./controllers/contact');
const {createClient} = require('./controllers/createClient');
const { createService } = require('./controllers/createService');
const { editStatus } = require('./controllers/editStatus');
const {emailSend} = require('./controllers/email');
const { getClient } = require('./controllers/getClient');
const { getID } = require('./controllers/getID');
const { getServices } = require('./controllers/getServices');
const { editServices } = require('./controllers/editServices');
const { createRateSection } = require('./controllers/createRateSection');
const { getRateSection } = require('./controllers/getRateSection');
const { editRateSection } = require('./controllers/editRateSection');
const { clientSendEmail } = require('./controllers/clientSendEmail');

const router = require("express").Router();

router.get("/", (req, res) => {
  res.send("Welcome to Directions API");
});
 
router.post("/client", createClient);
router.post("/email", emailSend);
router.post("/sendtoclient", clientSendEmail);
router.post("/contact", contact);
router.get("/client", getClient);
router.post("/id", getID);
router.put("/client/id", editStatus);

router.post("/services", createService);
router.get("/services", getServices);
router.put("/services/id", editServices);

router.post("/rate", createRateSection);
router.get("/rate", getRateSection);
router.put("/rate/id", editRateSection);

module.exports = router;
