const contactController = require('../controllers/contactController');
const projectController = require('../controllers/projectController');
const upload = require("../middlewares/uploads");
const router = require('express').Router();

// for sending we use post
// for receiving we use get
// for update we use put
// for deleting we use delete
router.post("/savecontact", contactController.addContact);
router.post("/saveproject", upload.single("file"), projectController.addProject);

module.exports = router;