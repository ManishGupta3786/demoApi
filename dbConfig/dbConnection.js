const mongoose = require('mongoose');

const dbConnection = async () => {
    try {
        // await mongoose.connect('mongodb://127.0.0.1:27017/demoApi', {
        await mongoose.connect('mongodb+srv://guptamns3786:NfwpgTOs6M1Mse1e@cluster0.wcgo120.mongodb.net/demoApi');
        console.log("successfully connect to mongodb database");
    } catch (error) {
        console.log(error.message);
    }
}

module.exports = dbConnection;