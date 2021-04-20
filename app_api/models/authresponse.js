const mongoose = require('mongoose');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');

const authresponseSchema = new mongoose.Schema({
    token: {
        type: String
    }
});

mongoose.model('authresponse', authresponseSchema);
