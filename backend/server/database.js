const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true
    })
    .then(db => {
        console.log('DB IS CONNECTED');
    })
    .catch(err => {
        console.log(err);
    })

module.exports = mongoose;