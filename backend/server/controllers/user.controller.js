const userCtrl = {}
const bcrypt = require('bcrypt');
const User = require('../models/user');
const jwt = require('jsonwebtoken');

userCtrl.postUser = async (req, res) => {
    const {
        email,
        password
    } = req.body;
    const newUser = new User({
        email,
        password
    });

    newUser.password = bcrypt.hashSync(password, 12);

    await newUser.save();
    console.log(newUser.password);

    const token = jwt.sign({
        _id: newUser._id
    }, '0DOLPHIN_9Bravo_1KchWa_2SUPERLOG_0NEW_1Destiny', {
        expiresIn: '3h'
    });
    res.status(200).json({
        token
    });
}

userCtrl.logInUser = async (req, res) => {

    const {
        email,
        password
    } = req.body;
    const user = await User.findOne({
        email
    });

    //compara los mails
    if (!user) return res.status(401).send('correo no existente');

    //compara las contraseñas
    if (!bcrypt.compareSync(password, user.password)) return res.status(401).send('contraseña erronea');

    const token = jwt.sign({
        _id: user._id
    }, '0DOLPHIN_9Bravo_1KchWa_2SUPERLOG_0NEW_1Destiny', {
        expiresIn: '3h'
    });
    return res.status(200).json({
        token
    });
}

module.exports = userCtrl;