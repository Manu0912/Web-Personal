const technologiesCtrl = {}
const Technologies = require('../models/technologies');

technologiesCtrl.getTechnologies = async (req, res) => {
    const technologies = await Technologies.find();
    res.json(technologies);
}

module.exports = technologiesCtrl;