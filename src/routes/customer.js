const express = require('express');
const router = express.Router();
const customerCrl = require('./../controllers/customerController');

router.get('/', customerCrl.list);
router.post('/add', customerCrl.save);

router.get('/delete/:id', customerCrl.delete);

router.get('/update/:id', customerCrl.edit);
router.post('/update/:id', customerCrl.update);

module.exports = router;