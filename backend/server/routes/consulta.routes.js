const express = require('express');
const router = express.Router();
const consultaCtrl = require('../controllers/consulta.controller');
const cors = require('cors');
const jwt = require('jsonwebtoken');

router.get('/internal/admin/privateandcertificate', verifyToken, cors(), consultaCtrl.getConsultas);
router.post('/saverequest', cors() , consultaCtrl.saveConsulta);
router.delete('/internal/admin/privateandcertificate/delete/:id', cors(), consultaCtrl.deleteConsulta);

module.exports = router;


function verifyToken(req,res,next){
    if(!req.headers.authorization){
        return res.status(401).send('request no autorizada');
    }

    const token = req.headers.authorization.split(' ')[1];
    if(token === 'null'){
        return res.status(401).send('request no autorizada');
    }

    const payload = jwt.verify(token, '0DOLPHIN_9Bravo_1KchWa_2SUPERLOG_0NEW_1Destiny');
    req.userId = payload._id;
    next();
}
