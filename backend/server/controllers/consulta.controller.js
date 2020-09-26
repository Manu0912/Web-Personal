const consultaCtrl = {}
const Consulta = require('../models/consulta');

consultaCtrl.getConsultas = async (req,res) => {
    const consultas = await Consulta.find();
    res.json(consultas);
}


consultaCtrl.saveConsulta = async (req,res) => {
    const consulta = new Consulta(req.body);
    await consulta.save();
    
    res.json({
        status: 'Consulta guardada'
    });
}

consultaCtrl.deleteConsulta = async (req, res, next) => {

    await Consulta.findByIdAndRemove(req.params.id);
    res.json({status: 'Consulta eliminada'});
    
};

module.exports = consultaCtrl;