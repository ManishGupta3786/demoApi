const mongoose = require('mongoose');

const dbConnection = async () => {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/demoApi', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("successfully connect to mongodb database");
    } catch (error) {
        console.log(error.message);
    }
}

module.exports = dbConnection;