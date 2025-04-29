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
const { deleteClient } = require('./controllers/deleteClient');
const { createContact } = require('./controllers/createContact');
const { getContactList } = require('./controllers/getContactList');
const { editContactList } = require('./controllers/editContactList');
const { createConditions } = require('./controllers/createConditions');
const { editConditions } = require('./controllers/editConditions');
const { getConditions } = require('./controllers/getConditions');
const { getClientByDateTime } = require('./controllers/getClientByDateTime');

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
router.post("/datetime", getClientByDateTime);
router.put("/client/id", editStatus);
router.put("/delete", deleteClient);

router.get("/services", getServices);
router.put("/services/id", editServices);

router.post("/rate", createRateSection);
router.get("/rate", getRateSection);
router.put("/rate/id", editRateSection);

router.post("/contactlist", createContact);
router.get("/contactlist", getContactList);
router.put("/contactlist", editContactList);


router.post("/conditions", createConditions);
router.get("/conditions", getConditions);
router.put("/conditions", editConditions);

const multer = require('multer');
const { uploadImageAsync } = require('./uploadImage');

const storage = multer.memoryStorage();
const upload = multer({ storage });

router.post('/', upload.single('image'), async (req, res) => {
  try {
    const base64Image = `data:${req.file.mimetype};base64,${req.file.buffer.toString('base64')}`;
    const secureUrl = await uploadImageAsync(base64Image);
    res.status(200).json({ url: secureUrl });
  } catch (err) {
    res.status(500).json({ error: 'Failed to upload image' });
  }
});


module.exports = router;
